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
let incompleteSetups = developers.reduce((acc, developer) => {
  return (
    acc +
    developer.computerSetups.reduce((count, setup) => {
      if (
        setup.mice === 0 ||
        setup.keyboards === 0 ||
        setup.speakers === 0 ||
        setup.monitors === 0
      ) {
        return count + 1;
      } else {
        return count;
      }
    }, 0)
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
let noSetup = developers.filter(function (developer) {
  return developer.computerSetups.length === 0;
}).length;
console.log(noSetup);

// i.Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.
let mostGadgetsDeveloper = developers
  .map(function (developer) {
    return {
      name: developer.name,
      totalGadgets:
        developer.laptops.length +
        developer.phones.length +
        developer.computerSetups.length,
      gadgets: {
        laptops: developer.laptops,
        phones: developer.phones,
        computerSetups: developer.computerSetups,
      },
    };
  })
  .sort(function (a, b) {
    return b.totalGadgets - a.totalGadgets;
  })[0];

console.log(mostGadgetsDeveloper);

// j. Check which developer has the most phones. In your answer provide the name and the phones they have
let mostPhonesDeveloper = developers
  .map(function (developer) {
    return {
      name: developer.name,
      phones: developer.phones,
    };
  })
  .sort(function (a, b) {
    return b.phones.length - a.phones.length;
  })[0];

console.log(mostPhonesDeveloper);

// k. Check which developer has the most computer setups. In your answer provide the name as well as their computer setups.
let mostSetupsDeveloper = developers
  .map(function (developer) {
    return {
      name: developer.name,
      computerSetups: developer.computerSetups,
    };
  })
  .sort(function (a, b) {
    return b.computerSetups.length - a.computerSetups.length;
  })[0];

console.log(mostSetupsDeveloper);

// l. Check which developer has the most monitors (combining all their computer setups). In your answer provide their name and the monitor count.
let mostMonitorsDeveloper = developers
  .map(function (developer) {
    return {
      name: developer.name,
      totalMonitors: developer.computerSetups.reduce(function (acc, setup) {
        return acc + setup.monitors;
      }, 0),
    };
  })
  .sort(function (a, b) {
    return b.totalMonitors - a.totalMonitors;
  })[0];

console.log(mostMonitorsDeveloper);
