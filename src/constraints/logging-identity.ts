import ILengthwise from "./i-lengthwise";

export default function loggingIdentity<Type extends ILengthwise>(arg: Type): Type {
  console.log(`Length: ${arg.length}`);
  return arg;
}