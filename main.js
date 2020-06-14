let testFunc =function(n){
  var flag=0,arr=[],lt1=Math.floor(n/3),lt2=Math.floor(n/5),lt3=Math.floor(n/7);
  for(let i=1;i<=lt1;i++){
    if(i*3<=n){
      arr.push(i*3);
    }
    if(i*5<=n){
       arr.push(i*5);
    }
    if(i*7<=n){
       arr.push(i*7);
    }
    
  }
  var sum = Array.from(new Set(arr)).reduce(function(a, b){
        return a + b;
    }, 0);
  
  return sum;
}
 const testar=[123, 92, 32, 13, 12, 10, 9, 2, 1];
  
console.log(testFunc(10));
