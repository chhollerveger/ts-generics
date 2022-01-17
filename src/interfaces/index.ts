import IProcess from "./i-process";

const text: IProcess<string> = {
  value: "Starting processing...",
  startProcessing(param: string): string {
    return param.toUpperCase();
  }
}


const number: IProcess<number> = {
  value: 10,
  startProcessing(param: number): number {
    return param * param;
  }
}

console.log(text.value);
console.log(text.startProcessing("Starting processing..."));

console.log(number.value);
console.log(number.startProcessing(number.value))