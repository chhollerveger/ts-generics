export default function getFirstPosition<T>(array: Array<T>): T | undefined {
  return array.shift();
}