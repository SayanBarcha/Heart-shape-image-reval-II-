const randomNumber = () => Math.floor(Math.random() * 100);

function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randomNumber());
  }
  return arr;
}

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

const randomArray = generateRandomArray(10);

console.log("Random Array:", randomArray);
console.log("Sum of Array:", sumArray(randomArray));
console.log("Average of Array:", averageArray(randomArray));
console.log("Max of Array:", findMax(randomArray));
console.log("Min of Array:", findMin(randomArray));

const randomObject = {
  name: "John",
  age: 30,
  city: "New York",
  job: "Developer",
};

for (const key in randomObject) {
  console.log(`${key}: ${randomObject[key]}`);
}

function countdown(seconds) {
  let timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      console.log("Countdown complete!");
    } else {
      console.log(`${seconds} seconds remaining...`);
      seconds--;
    }
  }, 1000);
}

countdown(5);
