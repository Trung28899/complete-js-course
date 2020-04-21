var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 23,
      inc: 32,
    },
    budget: 0,
    percentage: -1,
};

console.log("There are 2 ways to use the field in an object. Here is the 1st way: "); 
console.log(data.totals["exp"]); 
console.log("Here is the 2nd way: ");
console.log(data.totals.exp);  

// USING MAP FUNCTION
/*
    Map function create a new array with input array 
    and indicated function
    See this site for more info
    https://www.geeksforgeeks.org/javascript-array-map-method/
*/

var testArray; 
testArray = [6, 7, 4, 5].map((val)=>{  
    return val+1; 
}); 
console.log(testArray); 

var arr = [2, 5, 6, 3, 8, 9]; 
          
    var newArr = arr.map(function(val, index){ 
        return {key:index, value:val*val}; 
    });  
          
console.log(newArr)