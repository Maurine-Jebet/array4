//1Write a function that accepts an array of strings and 
//console.logs each element using a for loop.

function names(array){
    for(let i = 0;i<array.length;i++){
        console.log(array[i])
    }
}
let array = ["Morin","Jebet","Tantan","Sum"]
names(array)

//2Write a function that accepts an array of numbers and uses the forEach()
// method to console.log each number multiplied by 2.

let num = [3,4,5,6,7,8];
num.forEach(myFunction)
function myFunction(item,index,array){
    array[index]= item * 2
}
console.log(num)

//4Write a function that takes in an array of numbers and consoles the 
//first four items multiplied by 8 and the last two added by 5.
// Console the array with the new values
function p (w){
    for(let i = 0;i<4;i++){
        w[i]*=8;
    }
    for(let i = w.length-2; i< w.length;i++){
    w[i]+=5; 
}
console.log(w)

}
w = [3,5,6,7,8,9]
p(w)






//5Write a function that takes in a an array of strings and use 
//a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function apple(fruits){ 
for(let i = 0;i<fruits.length;i++){
    
    if(i === 2){
        continue;
         } 
         console.log("continue",fruits[i]);
          }
           }
           apple(fruits)