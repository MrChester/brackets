module.exports = function check(str, bracketsConfig) {
  var strArr = str.split(''),
        stack = [],
        iter = 0;

    if (str.length % 2 != 0) {
        return false;
    }

    while (iter < str.length) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (strArr[iter] === bracketsConfig[i][1] && stack[stack.length - 1] === bracketsConfig[i][0]) {
                stack.pop();
            } else
            if (strArr[iter] === bracketsConfig[i][0]) {
                stack.push(strArr[iter]);
            }
        }
        iter++;
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}
