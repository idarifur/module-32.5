// function add(num1, num2) {
//     return num1 + num2;

// }

// const sum = add(12, 12);

// // console.log(sum)

// const add2 = function add2(num1, num2) {
//     return num1 + num2;
// }

// const sum2 = add2(12, 12)

// // console.log(sum, sum2)

// const add3 = function (num1, mum2) {
//     return num1 + num2;
// }

// const sum3 = add(12, 12)
// // console.log(sum, sum2, sum3)


// const add4 = (num1, num2) => num1 + num2;

// const sum4 = add(12, 12);

// // console.log(sum4)


// const dividing = (number) => number / 5;
// const ans1 = dividing(20);
// // console.log(ans1)


// const addMultiply = (x, y) => (x + 2) * (y + 2);
// const ans2 = addMultiply(10, 10);

// // console.log(ans2)

// // 3.c arrow function with three parameters. will multiply all three parameters:

// const multiply = (a, b, c) => a * b * c;
// const ans3 = multiply(10, 10, 10);

// // console.log(ans3)

// // ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

// const doMath = (x, y) => {
//     const mathOne = x + 2;
//     const mathTwo = y + 2;
//     const mathResult = (x + 2) * (y + 2)
//     return mathResult
// }

// const myInput = doMath(10, 10);

// console.log(myInput)

// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।


// Older Version without using map

// const numbers = [4, 6, 8, 10, 12, 24, 46, 96, 192]
// const output = [];
// for (const number of numbers) {
//     const result = number * 5;
//     output.push(result)
// }

// console.log(output);



// Using arrow ......


// const numbers = [4, 6, 8, 10, 12, 24, 46, 96, 192]

// const fiveXIt = number => number * 5;
// const output = [];

// for (const number of numbers) {
//     const result = fiveXIt(number);
//     output.push(result)

// }
// console.log(output);

// Using map.....

// const numbers = [4, 6, 8, 10, 12, 24, 46, 96, 19]

// const output = numbers.map(number => number * 5)

// console.log(output)



// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

// const numbers = [5, 4, 6, 8, 41, 30, 43, 24, 76, 38, 80];
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(oddNumbers)

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।



// const mobiles = [
//     { name: 'Motorolla', price: 2000, color: 'Black' },
//     { name: 'Samsung', price: 3000, color: 'white' },
//     { name: 'One Plus', price: 5000, color: 'Gray' },
//     { name: 'iPhone', price: 6000, color: 'Gold' }
// ]

// const midRangeMobile = mobiles.find(mobile => mobile.price == 5000)


// console.log(midRangeMobile)







// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

// filter Array er moddhe dibe
// Find only Element er moddhe dibe
//(32-6 video: It has been discussed in eleborately in last 5 mins)



