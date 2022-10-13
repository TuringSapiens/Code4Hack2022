let sampleData = {
    name: "World Cup 2018",
    matches: [
        {
            Id: 1,
            match: 'group-stage-1',
            team1:
            {
                name: "Russia",
                code: "RUS"
            },
            team2:
            {
                name: "Saudi Arabia",
                code: "KSA"
            },
            knockout: false,
            stadium:
            {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            }
        },
        {
            Id: 2,
            match: 'group-stage-2',
            team1:
            {
                name: "Egypt",
                code: "EGY"
            },
            team2:
            {
                name: "Uruguay",
                code: "URU"
            },
            knockout: false,
            stadium:
            {
                key: "ekaterinburg",
                name: "Ekaterinburg Arena"
            },
        },
        {
            Id: 3,
            match: 'group-stage-3',
            team1:
            {
                name: "Portugal",
                code: "POR"
            },
            team2:
            {
                name: "Spain",
                code: "ESP"
            },
            knockout: false,
            stadium:
            {
                key: "fisht",
                name: "Fisht Stadium"
            },
        },
        {
            Id: 5,
            match: 'semi-final-2',
            team1:
            {
                name: "Croatia",
                code: "CRO"
            },
            team2:
            {
                name: "England",
                code: "ENG"
            },
            knockout: true,
            stadium:
            {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        },
        {
            Id: 6,
            match: 'final',
            team1:
            {
                name: "France",
                code: "FRA"
            },
            team2:
            {
                name: "Croatia",
                code: "CRO"
            },
            knockout: true,
            stadium:
            {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        }
    ]
};

// Task 1
/* The match details for semi-final -1 appear to be missing from the data.
Add new match detail into the matches array without mutating the original Array (set Id number as 4).*/

console.log(sampleData);

// Make new array for the missing team.
let array1 = [{Id: 4, match: 'semi-final', team1: {name: "Germany", code: "GEM"}, team2: {name: "England", code: "ENG"}, knockout: false, stadium: {key: "fisht", name: "Fisht Stadium"}}];
console.log(array1);
// Adding the the missing array to the initial one.
sampleData.matches.splice(3,0,...array1);
console.log(sampleData);


// Task 2
// Create a new variable and sort the matches array based on the Id property.

// console.log(sampleData);
let sort = sampleData.matches.sort((a,b)=>{
    return a.Id - b.Id;
});
console.log(sort); // arranged in ascending order.


// Task 3
//Check whether the matches array contains only knockout matches and save the result to a new variable.

// let a1 = [];
// let find = function(sampleData){
// for(i=0;i<sampleData.length;i++)
// {
//     for(j=0;j<j<sampleData[i].matches;j++)
//     {
//         console.log(sampleData[i].matches[j].knockout);
//     }
// }
// }


// console.log(sampleData.matches[1].knockout);
// console.log(sampleData.matches[2].knockout);
// console.log(sampleData.matches[3].knockout);

let array2 = [];
if(sampleData.matches[1].knockout === 'false')
{
    array2.push(sampleData);
}
console.log(array2);