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
// 1. Create an array with just the names of all the developers
let developerNames = [];
function getAllDeveloperNames() {
  for (let i = 0; i < developers.length; i++) {
    developerNames.push(developers[i].name);
  }
}
getAllDeveloperNames();
console.log("Developer Names:", developerNames);

// 2. Count how many total phones all the developers have
let totalPhones = 0;
function getTotalPhones() {
  for (let i = 0; i < developers.length; i++) {
    totalPhones += developers[i].phones.length;
  }
}
getTotalPhones();
console.log("Total Phones:", totalPhones);

// 3. Count the number of incomplete setups
let incompleteSetups = 0;
function countIncompleteSetups() {
  for (let i = 0; i < developers.length; i++) {
    for (let j = 0; j < developers[i].computerSetups.length; j++) {
      let setup = developers[i].computerSetups[j];
      if (
        setup.monitors === 0 ||
        setup.keyboards === 0 ||
        setup.mice === 0 ||
        setup.speakers === 0
      ) {
        incompleteSetups++;
      }
    }
  }
}
countIncompleteSetups();
console.log("Incomplete Setups:", incompleteSetups);

// 4. Check what is the most trusted phone brand
let phoneBrandCount = {};
function findMostTrustedBrand() {
  for (let i = 0; i < developers.length; i++) {
    for (let j = 0; j < developers[i].phones.length; j++) {
      let brand = developers[i].phones[j];
      if (!phoneBrandCount[brand]) {
        phoneBrandCount[brand] = 0;
      }
      phoneBrandCount[brand]++;
    }
  }

  let mostTrustedBrand = null;
  let mostTrustedCount = 0;
  for (let brand in phoneBrandCount) {
    if (phoneBrandCount[brand] > mostTrustedCount) {
      mostTrustedBrand = brand;
      mostTrustedCount = phoneBrandCount[brand];
    }
  }
  return mostTrustedBrand;
}
let mostTrustedBrand = findMostTrustedBrand();
console.log("Most Trusted Phone Brand:", mostTrustedBrand);

// 5. Check what phone brand is least trusted
function findLeastTrustedBrand() {
  let leastTrustedBrand = null;
  let leastTrustedCount = Infinity;
  for (let brand in phoneBrandCount) {
    if (phoneBrandCount[brand] < leastTrustedCount) {
      leastTrustedBrand = brand;
      leastTrustedCount = phoneBrandCount[brand];
    }
  }
  return leastTrustedBrand;
}
let leastTrustedBrand = findLeastTrustedBrand();
console.log("Least Trusted Phone Brand:", leastTrustedBrand);

// 6. Check how many people do not have a phone
let noPhoneCount = 0;
function countPeopleWithoutPhones() {
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].phones.length === 0) {
      noPhoneCount++;
    }
  }
}
countPeopleWithoutPhones();
console.log("People Without Phones:", noPhoneCount);

// 7. Check how many people do not have a laptop
let noLaptopCount = 0;
function countPeopleWithoutLaptops() {
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].laptops.length === 0) {
      noLaptopCount++;
    }
  }
}
countPeopleWithoutLaptops();
console.log("People Without Laptops:", noLaptopCount);

// 8. Check how many people do not have a computer setup (desktop)
let noSetupCount = 0;
function countPeopleWithoutSetups() {
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].computerSetups.length === 0) {
      noSetupCount++;
    }
  }
}
countPeopleWithoutSetups();
console.log("People Without Computer Setups:", noSetupCount);

// 9. Check which developer has the most total gadgets
let mostGadgetsDeveloper = null;
function findDeveloperWithMostGadgets() {
  let maxGadgets = 0;
  for (let i = 0; i < developers.length; i++) {
    let totalGadgets =
      developers[i].laptops.length +
      developers[i].phones.length +
      developers[i].computerSetups.length;
    if (totalGadgets > maxGadgets) {
      maxGadgets = totalGadgets;
      mostGadgetsDeveloper = developers[i].name;
    }
  }
  return mostGadgetsDeveloper;
}
mostGadgetsDeveloper = findDeveloperWithMostGadgets();
console.log("Developer with Most Gadgets:", mostGadgetsDeveloper);

// 10. Check which developer has the most phones
let mostPhonesDeveloper = null;
function findDeveloperWithMostPhones() {
  let maxPhones = 0;
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].phones.length > maxPhones) {
      maxPhones = developers[i].phones.length;
      mostPhonesDeveloper = developers[i].name;
    }
  }
  return mostPhonesDeveloper;
}
mostPhonesDeveloper = findDeveloperWithMostPhones();
console.log("Developer with Most Phones:", mostPhonesDeveloper);

// 11. Check which developer has the most computer setups
let mostSetupsDeveloper = null;
function findDeveloperWithMostSetups() {
  let maxSetups = 0;
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].computerSetups.length > maxSetups) {
      maxSetups = developers[i].computerSetups.length;
      mostSetupsDeveloper = developers[i].name;
    }
  }
  return mostSetupsDeveloper;
}
mostSetupsDeveloper = findDeveloperWithMostSetups();
console.log("Developer with Most Computer Setups:", mostSetupsDeveloper);

// 12. Check which developer has the most monitors
let mostMonitorsDeveloper = null;
function findDeveloperWithMostMonitors() {
  let maxMonitors = 0;
  for (let i = 0; i < developers.length; i++) {
    let monitorCount = 0;
    for (let j = 0; j < developers[i].computerSetups.length; j++) {
      monitorCount += developers[i].computerSetups[j].monitors;
    }
    if (monitorCount > maxMonitors) {
      maxMonitors = monitorCount;
      mostMonitorsDeveloper = developers[i].name;
    }
  }
  return mostMonitorsDeveloper;
}
mostMonitorsDeveloper = findDeveloperWithMostMonitors();
console.log("Developer with Most Monitors:", mostMonitorsDeveloper);
