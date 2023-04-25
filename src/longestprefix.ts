//Write a function to find the longest common prefix string amongst an array of strings.
//
//If there is no common prefix, return an empty string "".
function longestCommonPrefix(strings: string[]): string {
    strings.sort((a: string, b: string)=>{
        return a.length - b.length
    })
    for(let i = 0; i < strings[0].length; i++){
        let previousWordPrefix = ""
        for(let s of strings){
            let wordPrefix = s.substring(0, i + 1)
            if(previousWordPrefix === ""){
                previousWordPrefix = wordPrefix
            }else{
                if(wordPrefix !== previousWordPrefix){
                    return s.substring(0, i)
                }
            }
        }
    }
        
    return ""
};
// const testStrings = ["flower","flow","flight"]
const testStrings = ["dog","racecar","car"]
console.log(longestCommonPrefix(testStrings))
