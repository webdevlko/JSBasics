
function addTwoNums(a, b) {
   
    try {
      if (typeof (a) != number){
        throw new RefrenceError("the first argument is not a number");}
      else if (typeof (b) != number) {
        throw new RefrenceError("the second argument is not a number");
      }
      else {
        console.log(a+b);
      }catch(err) {
        console.log("Error!", err).
    }
  
}
addTwoNums(5,"5");
console.log("code still works");