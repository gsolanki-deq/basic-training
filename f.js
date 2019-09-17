var flatObject = {
    "emp_name" : "Gunjan",
    "emp_vehicle": "car",
    "emp_vehicle.model" : "maruti",
    "emp_dept" : "Finance",
    "emp.batch": "OSS",
    "emp.batch.time": "morning"
  }
  
  a = Object.keys(flatObject);
  console.log(a)
  
  function unflatten(flatObject) {
    res = {};
    for(let prop of a){
      if(prop.indexOf('.')==-1){
        res[prop]=flatObject[prop];
      }
      else{
        arr=prop.split('.');
        arr1=[arr[0]];
  console.log(arr)
  console.log(arr1)
        r={}
        //for(let ele of arr2){
          //Object.assign(res, {ele : r})
          //r[ele]=flatObject[prop];
        //}
        for(let v of arr1){
          //if()
          Object.assign(res, {v : r})
        }
      }
    }
    return res;
  }
  unflatten(flatObject);
  console.log(res)