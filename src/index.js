module.exports = function check(str, bracketsConfig) {
  const brackets_pairs = {}
    bracketsConfig.forEach (element => {
        brackets_pairs[`${element[1]}`] = `${element[0]}`;
    })
    let stack = [];
    for (let i = 0; i<str.length; i++) {
        let currentSymbol = str[i];
        let topElement = stack[stack.length-1];
        if (stack.length!=0 && topElement === brackets_pairs[currentSymbol]) {
            stack.pop();
        } else {
            stack.push(currentSymbol);
        }
    }
    return stack.length === 0;
}
