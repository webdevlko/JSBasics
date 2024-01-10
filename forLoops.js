// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])}


// const car4 = {
//     speed: 400,
//     color: 'magenta'
// }
// console.log(Object.entries(car4));

// part 2
// const car2 = {
//     speed: 200,
//     color: "red"
// }
// console.log(Object.keys(car2)); // ['speed','color']

// part 3

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();