// let arr = [12 , 5 ,49 ,27 ,54]

// for (const element of arr) {
//     console.log(element);
// }

let myteam_making = new Map()

myteam_making.set("No.1" , "DEKU")
myteam_making.set("No.2","YORICHI")
myteam_making.set("No.3","kokushibo")
myteam_making.set("No.4","KILLUA)")

function myteam() {
    for (const [key , name] of myteam_making) { // can't use return in for of loop
        console.log(key , name);
         
    }
    
}

myteam()

let myObj = {
    "No.1" : "DEKU",
    "No.2" : "YORICHI",
    "No.3" : "kokushibo",
    "No.4" : "KILLUA"  ,
}

for (const [key , name] of myObj) {
    console.log(key , name)
}
for (const [key , name] in myObj) {
    console.log(key , name)
}