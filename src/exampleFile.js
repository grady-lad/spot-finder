export const someModule1 = () => {};
let name1 = "",
  name2 = 3;
export { name1, name2 };
function square(x) {
  return x * x;
}
export { square as circle };
export class ClassName {}

const obj = {};
export default obj;
