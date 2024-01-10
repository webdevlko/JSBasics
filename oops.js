let purchase1 = {
  shoe: 100,
  tax: 2,
  totalPrice: function () {
    let calculation = this.shoe * this.tax;
    console.log("Total Price is", calculation);
  },
};

purchase1.totalPrice();

let purchase2 = {
  shoe: 50,
  tax: 2,
  totalPrice: function () {
    let calculation = this.shoe * this.tax;
    console.log("Total Price is", calculation);
  },
};

purchase2.totalPrice();
