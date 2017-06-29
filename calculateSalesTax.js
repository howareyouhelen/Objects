var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// console.log(salesTaxRates['AB']);



// // var TelusBC = companySalesData[0].sales.reduce(add, 0);
// // function add(a, b) {
// //   return a + b;
// // }

// // var Bombardier = companySalesData[1].sales.reduce(add, 0);
// // function add(a, b) {
// //   return a + b;
// // }

// // var TelusSK = companySalesData[2].sales.reduce(add, 0);
// // function add(a, b) {
// //   return a + b;
// // }


// // var

function add(a, b) {
  return a + b;
}

function calculateSalesTax(salesData, taxRates) {
  // sum up total sales for TelusOne & TelusTwo (2 of them) from obj

  var total = {};
  // separate Telus from Bombardier
  for (var i in companySalesData) {
    var currentRecord = companySalesData[i];
    if (total[currentRecord.name] === undefined) {
      total[currentRecord.name] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }
    var currentSales = currentRecord.sales.reduce(add, 0);
    var currentTaxRate = salesTaxRates[currentRecord.province]

    total[currentRecord.name].totalSales += currentSales;
    // total[telus] --> total sales...
    total[currentRecord.name].totalTaxes += (currentTaxRate * currentSales);
  }

  return total;
}
console.log(calculateSalesTax(companySalesData, salesTaxRates));

  // looks at the name individually



  // sum up total sales for Bombardier from obj
  // Multiply salesTaxRates to each prov
  // sum up the total of 3 different "salesTaxRates"

// watch out for falsey


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/