import { readFile } from 'fs/promises';

(async function () {
  const file = await readFile('things.txt', 'utf8'),
    lines = file.split('\n');
  console.log(lines.map(line => String.fromCharCode(line.length)).join(''));
})();
