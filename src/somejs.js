console.log('vvv entering somejs.js vvv')

this;
let say = (a) => console.log(`${a}`);
say('hello js')

const wm = new WeakMap();
console.log('wm: ', wm)

const p = new Promise(rs=>{});
console.log('p: ', p)

const x = () => 'result of a arrow function from a js file'
// console.log('xxxx', idontexist) //<-- comment out to test source map

console.log('^^^ exiting somejs.js ^^^')
export default x
