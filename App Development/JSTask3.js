const teams = [
    {
        name: "Chelsea",
        id: 1,
        groupId: [1, 2],
        points: 10,
    },
    {
        name: "Liverpool",
        id: 2,
        groupId: [2, 3],
        points: 20,
    },
    {
        name: "Manchester United",
        id: 3,
        groupId: [3, 4],
        points: 50,
    },
    {
        name: "Arsenal",
        id: 4,
        groupId: [1, 4],
        points: 20,
    },
];

//Task 1
// Remove the first element of the teams array using spread operator.

let remone = ([a, ...teams])=>teams;
console.log(remone(teams));


// Task 2
// Remove the last element of the Teams array (hint use array slice).

let remlast = teams.slice(0,-1);
console.log(remlast);


// Task 3
// Find total points of all the teams.

let sum = teams.reduce((b,p)=>{
    return b + p.points;
},0);
console.log(sum);


// Task 4
// Create an object with group ids as keys and an array of team names in it as values.

let gidname = teams.map(({groupId, name})=>({groupId, name}));
console.log(gidname);


let na = [];
let gid = [];
for(i in teams)
{
    na.push(teams[i].name);
}
console.log(na);

for(i in teams)
{
    gid.push(teams[i].groupId);
}
console.log(gid);

let obj = {};
na.forEach((element, index)=>{
    obj[element] = gid[index];
});
console.log(obj); // Print array
// console.log(Object.values(obj)); // Print values
// console.log(Object.keys(obj)); // Print keys


// Task 5
// Filter teams have points higher than or equal to 20 and are in group 1.

// let filter1 = teams.filter(function(pt,grpid){
//     return (pt.points >= 20) || (grpid === )
// });
// console.log(filter1);

let group1=[];
for(let i=0; i<=teams.length; i++)
{
    for(item in teams[i])
    {
        if((teams[i].groupId[0]===1 || teams[i].groupId[1]===1) && teams[i].points>=20)
        {
            group1.push(teams[i]);
            break;
        }
    }
}
console.log(group1);


// Task 6
// Find the name of the team whose id is 4.

// console.log(teams.filter(i => {
//     return i.id == 4;
// }));

for(let i=0;i<teams.length;i++)
{
    for(teamname in teams[i])
    {
        if(teams[i].id === 4)
        {
            console.log(teams[i].name);
            break;
        }
    }
}

// Task 7
/* Find the team which is in both group 1 & 2 and convert that particular object to array as shown in the example below:
{
    name: 'team name',
    id: 0,
    points: 90,
    group: [3,4,2]
}
to
[['name','team name'], ['id', 0], ['points', 90], ['group', [3, 4, 2]]] */

let na1 = [];
for(let i=0;i<teams.length;i++)
{
    for(IDS in teams[i])
    {
        if((teams[i].groupId[0]===1 && teams[i].groupId[1]===2)||(teams[i].groupId[0]===2 && teams[i].groupId[1]===1))
        {
            na1.push(teams[i]);
            break;
        }
    }
}
console.log(na1);


// Task 8
// Check if any team is in group 3 and in group 4.

let gr34 = [];
for(let i=0;i<teams.length;i++)
{
    for(gr in teams[i])
    {
        if((teams[i].groupId[0]===3 && teams[i].groupId[1]===4)||(teams[i].groupId[0]===4 && teams[i].groupId[1]===3))
        {
            gr34.push(teams[i]);
            break;
        }
    }
}
console.log(gr34);


// Task 9
// Reduce 5 points for teams in group 3 into a new array.

let gr3 = [];
for(let i=0;i<teams.length;i++)
{
    if(teams[i].groupId[0]===3 || teams[i].groupId[1]===3)
    {
        teams[i].points = teams[i].points - 5;
        gr3.push(teams[i]);
    }
    else
    {
        gr3.push(teams[i]);
    }
}
console.log(gr3);


// Task 10
// Print the names of all teams separated by a coma.

let name_team = teams.map(i => i.name);
console.log(name_team);


// Task 11
// Check if all teams have points greater than 10.

// let teampts = [];
// for(let i=0;i<teams.length;i++)
// {
//     for(POINTS in teams[i])
//     {
//         if(teams[i].points>10)
//         {
//             teampts.push(teams[i]);
//             break;
//         }
//     }
// }
// console.log(teampts);

console.log(teams.filter(({points})=>points>10));
console.log(teams.filter(({points})=>points===10));


// Task 12
// Remove keys “awayJerseyColour” and “captain” and print them as well as the remaining details as an object without mutating:

const manU = 
{
    name: "Manchester United",
    id: 1,
    group: ["Champions League", "League Cup"],
    points: 10,
    jerseyColour: "red",
    homeGround: "Old Trafford",
    awayJerseyColour: "black",
    captain: "Harry",
    coach: "OGS",
};

const {awayJerseyColour, captain, ...updatedmanU} = manU;   // using ES6 object destructuring & spread operator
console.log(manU);