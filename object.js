const developers = [
  {
    name: "Vee",
    laptops: ["Dell"],
    phones: ["Samsung", "Xiaomi"],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
  {
    name: "Katlego",
    laptops: ["HP", "Samsung"],
    phones: ["Apple", "Samsung", "Tecno", "Samsung"],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
  {
    name: "Rethabile",
    laptops: ["Samsung"],
    phones: ["Samsung", "Huawei", "Poco"],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
    ],
  },
  {
    name: "Gift",
    laptops: [],
    phones: ["Samsung"],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
    ],
  },
  {
    name: "Thokozile",
    laptops: ["Lenovo"],
    phones: ["Apple"],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2,
      },
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1,
      },
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1,
      },
    ],
  },
];

//Tasks

// a. Create an array with just the names of all the developers
let developerNames = developers.map(function (developer) {
  return developer.name;
});
console.log(developerNames);

// b. Count how many total phones all the developers have
let totalPhones = developers.reduce(function (acc, developer) {
  return acc + developer.phones.length;
}, 0);
console.log(totalPhones);

// c. Count the number of incomplete setups i.e. setups that have 0 mice
let incompleteSetups = developers.reduce(function (acc, developer) {
  return (
    acc +
    developer.computerSetups.filter(function (setup) {
      return (
        setup.mice === 0 ||
        setup.keyboards === 0 ||
        setup.speakers === 0 ||
        setup.monitors === 0
      );
    }).length
  );
}, 0);
console.log(incompleteSetups);

// d. Check what is the most trusted phone brand
let phoneBrands = developers.flatMap(function (developer) {
  return developer.phones;
});

let mostTrustedPhoneBrand = phoneBrands
  .sort(function (a, b) {
    return (
      phoneBrands.filter(function (brand) {
        return brand === a;
      }).length -
      phoneBrands.filter(function (brand) {
        return brand === b;
      }).length
    );
  })
  .pop();
console.log("The most trusted phone brand" + " " + mostTrustedPhoneBrand);

// e.
let leastTrustedPhoneBrand = phoneBrands.sort(function (a, b) {
  return (
    phoneBrands.filter(function (brand) {
      return brand === a;
    }).length -
    phoneBrands.filter(function (brand) {
      return brand === b;
    }).length
  );
})[0];
console.log("The least trusted phone brand is " + " " + leastTrustedPhoneBrand);

// f.Check how many people do not have a phone
let noPhone = developers.filter(function (developer) {
  return developer.phones.length === 0;
}).length;
console.log(noPhone + " " + "people do not have a phone.");

// g. Check how many people do not have a laptop
var noLaptop = developers.filter(function (developer) {
  return developer.laptops.length === 0;
}).length;
console.log(noLaptop);

//h. Check how many people do not have a computer setup (desktop)
var noSetup = developers.filter(function (developer) {
  return developer.computerSetups.length === 0;
}).length;
console.log(noSetup);
