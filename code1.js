// Problem 1: Complete the secondLargest function which takes in an array of numbers in input
//and return the second biggest number in the array. (without using sort)?
function secondLargest(array) { 
    var big=array[0];
    var nextbig= array[0];
    for(var i=0; i<array.length; i++){
      if(big<array[i]){
        nextbig=big;
        big=array[i];      
       }
      else if(nextbig<array[i] && array[i]!=big){
        nextbig = array[i];
      }
    }
    return nextbig;
  }

arr= [1,2,3,4,5]
sl = secondLargest(arr)
console.log(sl)
  