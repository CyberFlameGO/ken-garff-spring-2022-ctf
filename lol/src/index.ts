import { readFile, writeFile } from "fs/promises";

const dataDir = "./data",
  inputDataDir = `${dataDir}/input`,
  outputDataDir = `${dataDir}/output`,
  inputColorsFile = `${inputDataDir}/colors.txt`;

const alphabet = "abcdefghijklmnopqrstuvwxyz",
  passwordNumber = [..."graduation"]
    .map((char) => alphabet.indexOf(char) + 1)
    .reduce((a, b) => a + b, 0);

(async function () {
  // read colors.txt file, split it by newline, remove the first character from each line, split every line by 2 characters, and return them as an object of rgba
  const colors: Array<{
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }> = (await readFile(inputColorsFile, "utf8"))
    .split("\n")
    .map((line) => {
      line = line.slice(1);
      const matches = line.match(/[0-9a-f]{2}/gi);
      if (!matches) return null;
      const [r, g, b, a] = matches;
      return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: parseInt(a, 16),
      };
    })
    .filter((color) => color !== null);

  // write output files
  await writeFile(`${outputDataDir}/colors.json`, JSON.stringify(colors));
  await writeFile(
    `${outputDataDir}/colors-rgba.txt`,
    colors
      .map(
        (color) =>
          `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`
      )
      .join("\n")
  );
  await writeFile(
    `${outputDataDir}/colors-rgb.txt`,
    colors
      .map((color) => `rgb(${color.red}, ${color.green}, ${color.blue})`)
      .join("\n")
  );
  await writeFile(
    `${outputDataDir}/colors-hex.txt`,
    colors
      .map(
        (color) =>
          `#${color.red.toString(16).padStart(2, "0")}${color.green
            .toString(16)
            .padStart(2, "0")}${color.blue
            .toString(16)
            .padStart(2, "0")}${color.alpha.toString(16).padStart(2, "0")}`
      )
      .join("\n")
  );
  await writeFile(
    `${outputDataDir}/red.txt`,
    colors.map(({ red }) => red).join(" ")
  );
  await writeFile(
    `${outputDataDir}/green.txt`,
    colors.map(({ green }) => green).join(" ")
  );
  await writeFile(
    `${outputDataDir}/blue.txt`,
    colors.map(({ blue }) => blue).join(" ")
  );
  await writeFile(
    `${outputDataDir}/colors-decimal.txt`,
    colors
      .map((color) =>
        parseInt(
          `${color.red.toString(16).padStart(2, "0")}${color.green
            .toString(16)
            .padStart(2, "0")}${color.blue.toString(16).padStart(2, "0")}`,
          16
        ).toString()
      )
      .join(" ")
  );

  console.log(
    colors.map(({ red }) => String.fromCharCode(red - passwordNumber)).join("")
  );
  console.log(
    colors
      .map(({ green }) => String.fromCharCode(green - passwordNumber))
      .join("")
  );
  console.log(
    colors
      .map(({ blue }) => String.fromCharCode(blue - passwordNumber))
      .join("")
  );
  console.log(
    colors
      .map((color) => String.fromCharCode(color.green + color.blue - color.red))
      .join("")
  );
})();
