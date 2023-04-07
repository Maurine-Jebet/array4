//3Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index

let arrNum = [1,2,3,4,5,6,7,8,9];
let p = 0;
equal(arrNum)
function equal (arrNum){ 
while (p <arrNum.length){
    console.log(arrNum[p]);
    p++
    if(p === 5){
        break;
    }
        
}

 }


