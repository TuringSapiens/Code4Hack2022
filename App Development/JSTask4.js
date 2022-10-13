const comp1 = [
    {
        first_name: "Ben",
        last_name: "Almond",
        age: 28,
        position: "Senior Engineer",
        company: "ABC",
        location: "TVM",
        appraisal: 0,
    },
    {
        first_name: "Andrew",
        last_name: "Lords",
        age: 22,
        position: "Engineer",
        company: "ABC",
        location: "TVM",
        appraisal: 3,
    },
    {
        first_name: "Arathi",
        last_name: "A",
        age: 42,
        position: "PM",
        company: "ABC",
        location: "TVM",
        appraisal: 9,
    },
];
const comp2 = [
    {
        first_name: "Subin",
        last_name: "Viswa",
        age: 28,
        position: "Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 1,
    },
    {
        first_name: "Dev",
        last_name: "Raj",
        age: 21,
        position: "Architect",
        company: "ABC",
        location: "Kochi",
        appraisal: 2,
    },
    {
        first_name: "Thomas",
        last_name: "Mathew",
        age: 28,
        position: "Architect",
        company: "ABC",
        location: "Kochi",
        appraisal: 5,
    },
    {
        first_name: "Deepa",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 4,
    },
    {
        first_name: "Antony",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 4,
    },
];

// Task 1
// Create a new array named employees by merging ‘comp1’ and ‘comp2’ using a spread operator.

let merge = [...comp1, ...comp2];
console.log(merge);


// Task 2
/* Iter the whole employee list and log the employee's full name by creating a function.
(Use spread operator, rest parameters, Object destructuring, array.join) */

for(let i=0;i<merge.length;i++)
{
    for(employee in merge[i])
    {
        console.log(merge[i].first_name);
        break;
    }
}
function full_name(){
    for(let i=0;i<merge.length;i++)
    {
        for(names in merge[i])
        {
            let merge1 = merge[i].first_name + " " + merge[i].last_name;
            console.log(merge1);
            break;
        }
    }
}
full_name();


// Task 3
// List all employees having the role 'Engineer' and age above '25'.

let pos1 = merge.filter(pos => pos.position.indexOf('Engineer')!==-1);
console.log(pos1);
let pos2 = merge.filter(yr => yr.age > 25);
console.log(pos2);

let roleage = [];
for(i in merge)
{
    if(merge[i].position == 'Engineer' && merge[i].age > 25)
    {
        roleage.push(merge[i].first_name);
    }
}
console.log(roleage);


// Task 4
// Create a filter function to sort employees by position, by default the filter need to sort employee having the role 'Architect'.

let merge2 = merge.filter(({position}) => position === "Architect");
console.log(merge2);


// Task 5
// Create a function for checking whether all the employees got appraisals once.

function gotappraisal(merge)
{
    for(i in merge)
    {
        if(merge[i].appraisal == 0)
        {
            return console.log(merge[i].first_name, merge[i].last_name);  // has not got any appraisal at all
        }
    }
}
gotappraisal(merge);


// Task 6
// Create a function for checking whether any of the employees got an appraisal.

function gotappraisal2(merge)
{
    let merge3 = merge.filter(({appraisal})=>appraisal > 0);
    if(merge3.length > 0)
    {
        return console.log(merge3.length);
    }
}
gotappraisal2(merge);


// Task 7
// Create a function for setting employee appraisal count. By default, it should be zero.

function countappraisal(merge)
{
    let acount = 0;
    let apcount = merge.filter(({appraisal})=>appraisal>0);
    for(let i=0;i<apcount.length;i++)
    {
        acount++;
    }
    console.log(acount);
}
countappraisal(merge);


// Task 8
/* Without modifying the existing employee list, 
set the appraisal count of all employees to 3 and check whether all employees got appraisal 3 times. */

let count3 = 0;
function appraisal3()
{
    for(let i=0;i<merge.length;i++)
    {
        if(merge[i].appraisal === 3)
        {
            count3++;
        }
    }
    console.log(count3);
}
appraisal3();


// Task 9
// Calculate the total count of appraisals provided for all employees.

let totapp = merge.map(i=>i.appraisal).reduce((prev,curr)=>prev+curr,0);
console.log(totapp);


// Task 10
// Create a function for listing employees' age as an array list the number of people in each group (age distribution).

function agedistribution()
{
    let age1 = merge.map(i=>i.age<=20).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees below or are at age of 20:",age1);
    let age2 = merge.map(i=>i.age>20 && i.age<=25).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees between age of 21-25:",age2);
    let age3 = merge.map(i=>i.age>25 && i.age<=30).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees between age of 25-30:",age3);
    let age4 = merge.map(i=>i.age>30 && i.age<=35).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees between age of 30-35:",age4);
    let age5 = merge.map(i=>i.age>35 && i.age<=40).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees between age of 35-40:",age5);
    let age6 = merge.map(i=>i.age>40).reduce((prev,curr)=>prev+curr,0);
    console.log("Total number of employees above age of 40:",age6);
}
agedistribution();