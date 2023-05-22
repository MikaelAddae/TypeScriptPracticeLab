//Mountain Section
var mountains = [];
var m1 = { name: "Kilimanjaro", height: 19341 };
mountains.push(m1);
var m2 = { name: "Everest", height: 29029 };
mountains.push(m2);
var m3 = { name: "Denali", height: 20310 };
mountains.push(m3);
function findNameOfTallestMountain(mountains) {
    var tallest = mountains[0];
    for (var i = 0; i < mountains.length; i++) {
        if (tallest.height < mountains[i].height) {
            tallest = mountains[i];
        }
    }
    return tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [];
var p1 = { name: "Thing", price: 1.99 };
var p2 = { name: "Stuff", price: 3.99 };
var p3 = { name: "Things and Stuff", price: 4.99 };
products.push(p1, p2, p3);
function calcAverageProductPrice(products) {
    var total = 0;
    var average = 0;
    products.forEach(function (single) {
        total += single.price;
        average = total / products.length;
    });
    return average;
}
console.log(calcAverageProductPrice(products));
var inventory = [];
var p4 = { name: "motor", price: 10 };
var p5 = { name: "sensor", price: 12.50 };
var p6 = { name: "LED", price: 1.00 };
var in1 = { product: p4, quantity: 10 };
var in2 = { product: p5, quantity: 4 };
var in3 = { product: p6, quantity: 20 };
inventory.push(in1, in2, in3);
function calcInventoryValue(inventory) {
    var productStock = 0;
    inventory.forEach(function (single) {
        productStock += (single.product.price * single.quantity);
    });
    return productStock;
}
console.log(calcInventoryValue(inventory));
