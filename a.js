function take(){
    const a= fetch('/', {method:"POST"})
}

take();


let button = document.getElementById("btn1");
let Back = document.getElementById("btn2");
let box = document.getElementsByClassName("box")[0];
let box2 = document.getElementsByClassName("rst")[0];
let output= document.getElementsByClassName("ans")[0];

button.addEventListener("click", function () {
    box.style.display = "none";
    box2.style.display = "flex";
    
let m= Math.floor(Math.random()*3)+1;
let n= Math.floor(Math.random()*3)+1;
let o= Math.floor(Math.random()*3)+1;


// let adj={
//     1:"crazy",
//     2:"amazing",
//     3:"fire",
// }

// let word={
//     1:"Engine",
//     2:"food",
//     3:"car",
// }
// let end={
//     1:"bros",
//     2:"limited",
//     3:"hub",
// }
if(m==1){
    output.append("crazy ");
}
else if (m==2) {
    output.append("amazing ");
} 
else {
    output.append("fire ");
}


if(n==1){
    output.append("Engine ");
}
else if (n==2) {
    output.append("food ");
} 
else {
    output.append("car ");
}


if(o==1){
    output.append("Bros");
}
else if (o==2) {
    output.append("Limited");
} 
else {
    output.append("Hub");
}



});

Back.addEventListener("click", function () {
    box2.style.display = "none";
    box.style.display = "flex";
    output.innerHTML=''; 
});


// let m= Math.floor(Math.random()*3)+1;
// let n= Math.floor(Math.random()*3)+1;
// let o= Math.floor(Math.random()*3)+1;


// // let adj={
// //     1:"crazy",
// //     2:"amazing",
// //     3:"fire",
// // }

// // let word={
// //     1:"Engine",
// //     2:"food",
// //     3:"car",
// // }
// // let end={
// //     1:"bros",
// //     2:"limited",
// //     3:"hub",
// // }
// if(m==1){
//     output.append="crazy"
// }
// else if (m==2) {
//     output.append="amazing"
// } 
// else {
//     output.append="fire"
// }


// if(n==1){
//     output.append="Engine"
// }
// else if (n==2) {
//     output.append="food"
// } 
// else {
//     output.append="car"
// }


// if(o==1){
//     output.append="Bros"
// }
// else if (o==2) {
//     output.append="Limited"
// } 
// else {
//     output.append="Hub"
// }


