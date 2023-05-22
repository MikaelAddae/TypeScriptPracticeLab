//Mountain Section

interface Mountain
{
    name : string,
    height : number
}

let mountains : Mountain [] = [];

let m1 : Mountain = {name: "Kilimanjaro", height: 19341};
mountains.push(m1);

let m2 : Mountain = {name: "Everest", height: 29029};
mountains.push(m2);

let m3 : Mountain = {name: "Denali", height: 20310};
mountains.push(m3);



function findNameOfTallestMountain (mountains: Mountain[]): string
{
    
    let tallest: Mountain = mountains[0];

    for (let i = 0; i < mountains.length; i++)
    {
        if (tallest.height < mountains[i].height){

            tallest = mountains[i]

        }
    }
    return tallest.name;
}

console.log(findNameOfTallestMountain(mountains));

//Products Section

interface Product
{
    name : string,
    price : number
}

let products : Product [] = [];

let p1 : Product = {name: "Thing", price: 1.99}
let p2 : Product = {name: "Stuff", price: 3.99}
let p3 : Product = {name: "Things and Stuff", price: 4.99}

products.push(p1, p2, p3);

function calcAverageProductPrice(products: Product []) : number
{
    let total : number = 0;
    let average : number = 0;

    products.forEach((single:Product) => 
    {
        total += single.price
        average = total / products.length
    });

    return average;
    
}

console.log(calcAverageProductPrice(products));

interface InventoryItem
{
    product: Product,
    quantity: number
}

let inventory : InventoryItem [] = [];

let p4 : Product = {name: "motor", price: 10}
let p5 : Product = {name: "sensor", price: 12.50}
let p6 : Product = {name: "LED", price: 1.00}

let in1 :InventoryItem = {product: p4, quantity: 10}
let in2 : InventoryItem = {product : p5, quantity: 4}
let in3 : InventoryItem = {product : p6, quantity: 20}

inventory.push(in1, in2, in3)

function calcInventoryValue (inventory : InventoryItem []) : number
{
    let productStock = 0;

    inventory.forEach((single:InventoryItem) => 
    {
        productStock += (single.product.price * single.quantity);

    });
    
    return productStock;

}

console.log(calcInventoryValue(inventory))



