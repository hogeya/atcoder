import * as fs from "fs";

const Main = (input: string) => {
  const split = input.split("\n");
  const b = split[1].split(" ");
  console.log(
    `${parseInt(split[0]) + parseInt(b[0]) + parseInt(b[1])} ${split[2]}`
  );
};

Main(fs.readFileSync("/dev/stdin", "utf8"));
