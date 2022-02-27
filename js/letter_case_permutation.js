

var letterCasePermutation = function(s) {
    let result =[];
    let len =s.length;
    result.push(s);

    for(let i=0;i<len;i++) {
        let arr_len = result.length;
        let c = s.charAt(i);
        while(arr_len>0) {
            let tmp = result.shift();
            result.push(tmp.substring(0,i) + c.toLowerCase() + tmp.substring(i+1, len));
            result.push(tmp.substring(0,i) + c.toUpperCase() + tmp.substring(i+1, len));
        }
    }
    
    
    return result;
};

letterCasePermutation("a1b2");