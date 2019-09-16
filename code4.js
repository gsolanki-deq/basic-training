var flatObject = {
    "emp_name" : "Gunjan",
    "emp_vehicle": "car",
    "emp_vehicle.model" : "maruti",
    "emp_dept" : "Finance",
    "emp.batch": "OSS",
  }
  
  a = Object.keys(flatObject);
  b= Object.values(flatObject);
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
        arr2=[arr[1]];
        arr3=[];
        for(let a=2; a<arr.length; a++){
          arr3.push(arr[a]);
        }
        fobj={};
        for(let ele of arr2){
          fobj[ele]=flatObject[prop];
        }
        for(let ele2 of arr3){
          fobj[ele2]=flatObject[prop];
        }
        for(let ele1 of arr1){
          res[ele1]=fobj;
        }
      }
    }
    return res;
  }
  unflatten(flatObject);
  console.log(res)