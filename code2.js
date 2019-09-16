// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    str=string.split('');
    freq={};
    for(var i=0; i<str.length; i++){
      if(freq[str[i]]){
        freq[str[i]]+=1
      }
      else{
        freq[str[i]]=1;
      }
    }
    return freq
}

s= 'aabcd'
console.log(calculateFrequency(s))

