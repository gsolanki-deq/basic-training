// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

obj = {
    a : [1,2,3],
    b : [3,[5,6],7]
}
v= Object.keys(obj)

function flatten(unflatObject) {
    res = v.reduce(function(e,v1){
    return e.concat(v1, unflatObject[v1])
    },[])
}

flatten(obj);
console.log(res)

