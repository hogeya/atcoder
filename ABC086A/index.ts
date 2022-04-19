import * as fs from "fs";

const Main = (input: string) => {
  const split = input.split(" ");
  if (parseInt(split[0]) * parseInt(split[1]) % 2 === 0) {
    console.log(`Even`);
  } else {
    console.log(`Odd`);
  }
};

Main(fs.readFileSync("/dev/stdin", "utf8"));
