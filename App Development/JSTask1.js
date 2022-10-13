const apparel = [
    {
        Name: "Jeans",
        Category: "clothes",
        Brand: "Levi",
        Actual_price: 2209,
        Discount: 10
    },
    {
        Name: "Silk Saree",
        Category: "clothes",
        Brand: "Soch",
        Actual_price: 6560,
        Discount: 33
    },
    {
        Name: "T-shirts",
        Category: "clothes",
        Brand: "Westworld",
        Actual_price: 850,
        Discount: 0
    },
    {
        Name: "Dhothi",
        Category: "clothes",
        Brand: "MCR",
        Actual_price: 1570,
        Discount: 2
    },
    {
        Name: "Crocs",
        Category: "shoes",
        Brand: "Killer",
        Actual_price: 2797,
        Discount: 30
    },
    {
        Name: "90s Runner",
        Category: "shoes",
        Brand: "Puma",
        Actual_price: 4999,
        Discount: 50
    },
    {
        Name: "Men's Boots",
        Category: "shoes",
        Brand: "Puma",
        Actual_price: 3999,
        Discount: 50
    },
    {
        Name: "Diamond Ring",
        Category: "jewellery",
        Brand: "Bluestone",
        Actual_price: 14800,
        Discount: 0
    },
    {
        Name: "Gold earring",
        Category: "jewellery",
        Brand: "Tanishq",
        Actual_price: 21529,
        Discount: 6
    },
    {
        Name: "Choker",
        Category: "accessories",
        Brand: "Womanista",
        Actual_price: 129,
        Discount: 0
    },
    {
        Name: "Watch",
        Category: "accessories",
        Brand: "Sonic",
        Actual_price: 2534,
        Discount: 2
    },
    {
        Name: "Pencil",
        Category: "accessories",
        Brand: "Womanista",
        Actual_price: 2,
        Discount: 1
    }
];

// Task 1
// Create a list of all items in the store.

let namelist = [];
for(item in apparel)
{
    namelist.push(apparel[item].Name);
}
console.log(namelist);


// Task 2
/* Consider the second item in the list. 
Extract its name and actual_price and move the remaining properties to another variable. */

let seconditemlist = [];
let remitemlist = [];
for(item in apparel[1])
{
    if(item == 'Name' || item =='Actual_price')
    {
        seconditemlist.push(apparel[1][item]);
    }
    else
    {
        remitemlist.push(apparel[1][item]);
    }
}
console.log(seconditemlist, remitemlist);


// Task 3
/* Iterate through each item in the list to compute the selling price according to the formula:
(selling price = actual_price*(1-discount/100)).
Append that value to an item and create a new list consisting of the modified items. */

let apparel2 = [];
for(item in apparel)
{
    let item2 = {'Name':apparel[item].Name,
            'Category':apparel[item].Category,
            'Brand':apparel[item].Brand,
            'Actual_price':apparel[item].Actual_price,
            'Discount':apparel[item].Discount,
            'Selling_price':apparel[item].Actual_price*((1-(apparel[item].Discount)/100))};
    apparel2.push(item2);
}
console.log(apparel2);


// Task 4
// Find all elements in the list who has a particular brand name.

// for(let i=0;i<apparel.length;i++)
// {
//     if(apparel[i].Brand=='Puma')
//     {
//         let appreal4;
//         console.log(appreal4[i].Brand);
//     }
// }


console.log(item = apparel.filter(item => item.Brand.indexOf('Levi') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Soch') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Westworld') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Puma') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('MCR') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Killer') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Bluestone') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Tanishq') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Womanista') !== -1));
console.log(item = apparel.filter(item => item.Brand.indexOf('Sonic') !== -1));

// Based on Categories

// Task 5
// Convert the given list into a collection where items are grouped according to their category.

console.log(Object.entries(apparel.filter(item => item.Category.indexOf('accessories')!==-1)));
console.log(Object.entries(apparel.filter(item => item.Category.indexOf('jewellery')!==-1)));
console.log(Object.entries(apparel.filter(item => item.Category.indexOf('shoes')!==-1)));
console.log(Object.entries(apparel.filter(item => item.Category.indexOf('clothes')!==-1)));

// console.log(item = apparel.filter(item => item.Category.indexOf('accessories') !== -1));
// console.log(item = apparel.filter(item => item.Category.indexOf('jewellery') !== -1));
// console.log(item = apparel.filter(item => item.Category.indexOf('shoes') !== -1));
// console.log(item = apparel.filter(item => item.Category.indexOf('clothes') !== -1));


// Task 6
/* ABC is planning to conduct a promotional event where-in special discounts are given for some brands.
Create a function to calculate the new selling price for all of the items in the store. The function accepts the brand and discount% as parameters.
Default the discount percentage to 5%.
Also, an additional 2% discount is provided if the final price of the commodity is above 4000, irrespective of the brand. */

function conduct()
{
    for(let i=0;i<apparel.length;i++)
    {
        let AP = apparel[i].Actual_price;
        let discount = 5;
        let new_price = AP*(1-discount/100);
        if(apparel[i].Actual_price>=4000)
        {
            discount = 7;
            let np = AP*(1-discount/100);
            console.log(np);
        }
        console.log(new_price);
    }
}
conduct();