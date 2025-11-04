const arr = [1, 2, 3, 4, 5];

// map
const mapArr = arr.map((ele) => ele * 4);
console.log("Mapped Array:", mapArr);

// reduce
const sum = arr.reduce((acc, ele) => acc + ele, 0);
console.log("Sum:", sum);

// filter
const filterData = arr.filter((ele) => ele % 2 === 0); // Example: filtering even numbers
console.log("Filtered Data:", filterData);

// corrected data array
const data = [
  {
    productionID: 1,
    productionName: 'A',
    price: 499,
    manufacturingDate: '2025-02-22',
    color: "purple"
  },
  {
    productionID: 2,
    productionName: 'B',
    price: 599,
    manufacturingDate: '2025-02-20',
    color: "white"
  },
  {
    productionID: 3,
    productionName: 'C',
    price: 799,
    manufacturingDate: '2025-06-22',
    color: "blue"
  },
  {
    productionID: 4,
    productionName: 'D',
    price: 899,
    manufacturingDate: '2025-05-22',
    color: "green"
  }
];

// map product names
const mapData = data.map((ele) => ele.productionName);
console.log("Product Names:", mapData);

// filter products with price <= 600
const FilterOnprice = data.filter((product) => product.price <= 600);
console.log("Filtered by Price (<=600):", FilterOnprice);