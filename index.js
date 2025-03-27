// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
 let arr1 = [3,7,34,90,12];
 console.log(arr1[arr1.length-1]);

 let arr2 = [true,"green","where",12,56];
 console.log(arr2[arr2.length-1]);

// Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets =["Cow","Bird","Snake","Dog"];
let joinString = myPets.join(",");
console.log(joinString);

// Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
arr3.sort((a,b)=>a-b);
console.log(arr3);

// Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",  "school", "girl", "woman"];

let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let uniqueSet = new Set
let duplicates =[]
arr.forEach(item => {
    if (uniqueSet.has(item)){
        duplicates.push(item);
    }else{
        uniqueSet.add(item);
    }
})
let uniqueArray = Array.from(uniqueSet);

console.log("Array without duplicates:",uniqueArray);
console.log("Duplicates array:", duplicates);



 // Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4]
 let arr5 =["the","way","x",4];
 let item = "food"
 let result = arr5.includes(item) ? item : "the search word was not found";
 console.log(result)


//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw";
let sortWord = [...word].sort().join('');
console.log(sortWord);


// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits = ['Mango','Strawberry','Peach','Watermelon','Banana','Guava','Grapefruit','Orange','Pawpaw','Grapes'];
fruits.splice(5,0,'Tomato');
console.log(fruits)