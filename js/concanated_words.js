

var findAllConcatenatedWordsInADict = function(words) {
    const wordSet = new Set(words);
    const dp = new Map();
    
    const helper = (word) => {
        if(dp.has(word)) return dp.get(word);
        for(let i = 1; i < word.length; i++){
            const prefix = word.substr(0,i);
            if(wordSet.has(prefix)){
                const suffix = word.slice(i);
                if(wordSet.has(suffix) || helper(suffix)){
                    dp.set(word, true);
                    return true;
                }
            }
        }
        
        dp.set(word, false);
        return false;
    }
    
    
    return words.filter(helper);
};

console.log(findAllConcatenatedWordsInADict(["a","b","ab","abc"]));