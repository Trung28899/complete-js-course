/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Parks{
    constructor(name, buildYear, trees = 0, area = 0){
        this.name = name; 
        this.buildYear = buildYear; 
        this.trees = trees; 
        this.area = area; 
    }
}

class Streets extends Parks{
    constructor(name, buildYear, streetLength, streetSize = 'normal'){
        super(name, buildYear); 
        this.streetLength = streetLength; 
        this.streetSize = streetSize; 
    }
}

const parks = new Map(); 
const streets = new Map(); 

streets.set('Milady', new Streets('Milady', 1999, 0.5, 'small')); 
streets.set('Finch', new Streets('Finch', 1820, 15, 'huge')); 
streets.set('Albion', new Streets('Albion', 1920, 2)); 
streets.set('Jane', new Streets('Jane', 1980, 6, 'big'));

parks.set('National Park', new Parks('National Park', 1820, 1280, 12250)); 
parks.set('Humber Park', new Parks('Humber Park', 1995, 950, 10500)); 
parks.set('High Park', new Parks('High Park', 1770, 2340, 34040)); 

console.log('PARK REPORT: \n'); 
console.log('---------------'); 

// 1. Tree density of each park in the town (forumla: number of trees/park area)
// 3. The name of the park that has more than 1000 trees

let totalYear = 0; 
parks.forEach( (value, key) => {
    let density =  Math.round((value.trees * 1000)/value.area); 
    totalYear += (new Date().getFullYear() - value.buildYear); 
    console.log(`Tree density of ${key} is: ${density} trees/km2`); 
    value.trees >= 1000 ? console.log(`${key} has more than 1000 trees`) : value.trees = value.trees; 
});

// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
console.log(`Average age of Parks in Town: ${Math.round(totalYear/4)} years old`);

console.log('---------------'); 
console.log('STREET REPORT: \n'); 
console.log('---------------'); 

// 4. Total and average length of the town's streets
let totalLength = 0; 
streets.forEach((value, key) => {
    totalLength += value.streetLength; 
    console.log(`${key} Street is ${value.streetSize} size`); 
}); 

console.log(`The total length of all streets are: ${totalLength} km`); 
console.log(`The average length of all streets are: ${Math.round(totalLength/3)} km`); 