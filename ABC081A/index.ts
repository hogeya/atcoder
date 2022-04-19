import * as fs from "fs";

const Main = (input: string) => {
  const splited = input.split('\n');
  const split = splited[0].replace(/0/g, "");
  console.log(split.length);
};

Main(fs.readFileSync("/dev/stdin", "utf8"));
