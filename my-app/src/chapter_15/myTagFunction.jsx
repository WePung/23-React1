import React from "react";

const name = "인제";
const region = "서울";

function myTagFunction(string, nameExp, regionExp) {
  let srt0 = string[0];
  let str1 = string[1];
  let str2 = string[2];

  return `${str0}${nameExp}${str1}${regionExp}${str2}`;
}
const output = myTagFunction`제이름은 ${name}이고, 사는 곳은 ${region}입니다.`;
console.log(output);
export default myTagFunction;
