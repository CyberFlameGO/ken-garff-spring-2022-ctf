import { readFile } from "fs/promises";

const correctHash = [
  91163, 92240, 51916, 71270, 14287, 51916, 92240, 92240, 30408, 74502, 12132,
  13209, 30408, 51378, 12132, 30408, 92778, 73425, 30408, 91701, 93318, 31485,
  51916, 33102, 31485, 30408, 51916, 30408, 92240, 12132, 12132, 32563, 13209,
  53533, 30408, 33102, 51916, 11594, 92240, 31485, 30408, 91163, 12132, 93318,
  30408, 31485, 51916, 91701, 12671, 30408, 53533, 12132, 73425, 73425, 92778,
  11594, 92240, 31485, 30408, 51916, 73425, 91701, 92778, 92778, 30408, 91701,
  12671, 51916, 93318, 51916, 91701, 33102, 31485, 93318, 30408, 51916, 32025,
  51378, 30408, 91701, 12132, 72347, 53533, 51916, 93318, 31485, 30408, 92778,
  33102, 30408, 52994, 92778, 33102, 12671, 30408, 33102, 12671, 31485, 30408,
  31485, 32025, 91701, 12132, 51378, 31485, 51378, 30408, 91163, 92240, 51916,
  71270, 30408, 51378, 2140, 4295, 3211, 31485, 91701, 98901, 97830, 54071,
];

function a(input: bigint[]) {
  return input.map((c) => Number(c.toString().slice(2, 7)));
}

function b(input: bigint[]) {
  return f(input.map((c) => c + 61n));
}

function c(input: bigint[]) {
  return b(input.map((c) => c ^ 86n));
}

function d(input: bigint[]) {
  return j(input.map((c) => c + 19n));
}

function e(input: bigint[]) {
  return q(input.map((c) => c ^ 43n));
}

function f(input: bigint[]) {
  return w(input.map((c) => c ^ 4n));
}

function g(input: bigint[]) {
  return l(input.map((c) => c ^ 51n));
}

function h(input: bigint[]) {
  return o(input.map((c) => c * 54n));
}

function i(input: bigint[]) {
  return g(input.map((c) => c ^ 99n));
}

function j(input: bigint[]) {
  return t(input.map((c) => c * 48n));
}

function k(input: bigint[]) {
  return h(input.map((c) => c * 51n));
}

function l(input: bigint[]) {
  return m(input.map((c) => c + 5n));
}

function m(input: bigint[]) {
  return y(input.map((c) => c * 22n));
}

function n(input: bigint[]) {
  return c(input.map((c) => c ^ 47n));
}

function o(input: bigint[]) {
  return r(input.map((c) => c + 85n));
}

function p(input: bigint[]) {
  return k(input.map((c) => c ^ 57n));
}

function q(input: bigint[]) {
  return i(input.map((c) => c ^ 35n));
}

function r(input: bigint[]) {
  return d(input.map((c) => c + 88n));
}

function s(input: bigint[]) {
  return a(input.map((c) => c + 10n));
}

function t(input: bigint[]) {
  return x(input.map((c) => c + 42n));
}

function u(input: string) {
  return p(input.split("").map((c) => BigInt(c.charCodeAt(0))));
}

function v(input: bigint[]) {
  return e(input.map((c) => c * 30n));
}

function w(input: bigint[]) {
  return z(input.map((c) => c * 38n));
}

function x(input: bigint[]) {
  return v(input.map((c) => c + 39n));
}

function y(input: bigint[]) {
  return n(input.map((c) => c * 60n));
}

function z(input: bigint[]) {
  return s(input.map((c) => c ^ 42n));
}

(async function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789_{}";
  u(alphabet);
  const charMap: Map<bigint, string> = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    charMap.set(BigInt(u(alphabet[i])[0]), alphabet[i]);
  }

  const input = await readFile("./lol.txt", "utf8");
  const inputArray = input.split(" ").map((c) => BigInt(c));
  let output = "";
  for (let hash of inputArray) {
    output += charMap.get(hash);
  }
  console.log(output);
})();
