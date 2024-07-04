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
