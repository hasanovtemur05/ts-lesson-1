// =============================  35 - masala  ===========================

function fn(n: number) {
  const obj: { [key: string]: number } = { a: 2, b: 3, c: 4 };
  for (let key in obj) {
    console.log(obj[key] * n);
  }
}
// fn(3);




// ==============================  36 - masala  ==============================

function str (n:string){
  for(let i = 0; i < n.length; i++){
   if ((Number(n[i])) && n[i] !== ' ')  {
    console.log(+n[i]);
   }
  }
  
}
// str("sadsds1212des")


// ==================================  37 - masala  ======================

const Arrow = (...numbers: number[]): number[] => {
  const sum = numbers.reduce((item, index) => item + index, 0);
  return sum.toString().split('').map(Number);
};
// console.log(Arrow(1, 22, 3)); 



// ========================================= 38 - masala  ==================================


function StrCount (str:string) {
  let count = 0
  for(let i = 0; i < str.length; i++){
    if (str[i] === "a") {
     count ++
    }
  }
  console.log(count);
}
// StrCount("salom qalaysan")



// ============================  39 - masala  ========================================

function finfNumber(n: number): number {
  const k = Math.log2(n);
  if (Number.isInteger(k)) {
    return k;
  } else {
    throw new Error("Berilgan son 2 ning darajasi emas");
  }
}
// const result = finfNumber(8); 
// console.log(result);



//  ===================================  40 - masala  =======================================



const arr: number[] = [1, 2, 3, 4, 5]; 
let newArr: number = arr.reduce((acc: number, curr: number) => acc + curr, 0); 
// console.log(newArr / arr.length);


//  ====================================== 41 - masala  =======================================

function books (){
  interface Book {
    title: string
    author: string
    read: boolean
  }
  const books:Book[] = [
    {
    title: 'Halqa',
    author: 'Akrom Malik',
    read: false
    },
    {
    title: 'Dunyoning ishlari',
    author: 'O’tkir Hoshimov',
    read: true
    },
    {
    title: 'Iymon',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    read: true
    },
    ]
  
  books.forEach((item)=>{
    if (item.read === true) {
      console.log(`${item.author} ning ${item.title} kitob uqilgan`);
      
    }else if (item.read === false) {
      console.log(`${item.author} ning ${item.title} kitob uqilmagan`);
      
    }
    
  })
}
// books()



// =================================  42 - masala  =================================

function inputArr (){
  const arr: string[] = ["text", "world", "laptop"];
const Object: { [key: string]: number } = {};
arr.forEach((item) => {
  Object[item] = item.length; 
});
console.log(Object);
}
// inputArr()



//  ==================================  43 - masala  ============================

// const n: number = 3; 
// const obj: Record<string, number> = { a: 2, b: 3, c: 4 }; 
// const res: Record<string, number> = {}; 
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) { 
//     res[key] = obj[key] * n; 
//   }
// }
// console.log(res); 




//  =========================================  44 - masala  ==============================

function getLevel(n: number): number[] {
  const result: number[] = []; 
  for (let i = 1; i <= n; i++) {
      result.push(Math.pow(2, i)); 
  }
  return result;
}

// console.log(getLevel(4)); 


// ==============================  45 - masala  ================================

function animals (){
  const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  const countAnimals: { [key: string]: number } = {}; 
  animals.forEach((animal) => {
    if (countAnimals[animal]) {
        countAnimals[animal] += 1; 
    } else {
        countAnimals[animal] = 1; 
    }
});
console.log(countAnimals); 
}
// animals()



//  =====================================  46 - masala  =====================================

function squareArr (){
  const arr = [1, 2, 3, 4, 5]; 
  const newArr = arr.map((item) => item ** 2); 

  console.log(newArr); 
}
// squareArr()



//  =================================  47 - masala  ==============================

// const inputArray: number[] = [1, -4, 12, 0, -3, 29, -150]; 
// const res = inputArray
//   .filter(num => num > 0) 
//   .reduce((acc, num) => acc + num, 0);

// console.log(res);



// ================================  48 - masala  ================================

// const inputString:string = 'George Raymond Richard Martin'; 
// const res = inputString
//   .split(' ') 
//   .map(item => item.charAt(0)) 
//   .join('');

// console.log(res); 



//  =====================================  49 - masala  ==============================

// type Person = {
//   name: string;
//   age: number;
// };

// const inputArray: Person[] = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];


// const ageDifference = inputArray
//   .sort((a, b) => a.age - b.age) 
//   .reduce((acc, person, index, array) => {
//       if (index === 0) {
//           acc.minAge = person.age; 
//       }
//       if (index === array.length - 1) {
//           acc.maxAge = person.age; 
//       }
//       return acc;
//   }, { minAge: 0, maxAge: 0 }); 

// const difference = ageDifference.maxAge - ageDifference.minAge;

// console.log(difference); 




//  ===================================  50 - masala  ================================

// var singleNumber = function(nums: (number | boolean)[]) {
//   const counts: { [key: number]: number } = {}; 

//   nums.forEach(num => {

//       if (typeof num === 'number') {
//           counts[num] = (counts[num] || 0) + 1; 
//       }
//   });

//   const result = Object.keys(counts)
//       .filter(key => counts[Number(key)] === 1)
//       .map(key => Number(key));

//   return result; 
// };
// const uniqueNumbers = singleNumber([4, 1, 2, 1, 2, 9, true]);
// console.log(uniqueNumbers); 



















  

    


  






