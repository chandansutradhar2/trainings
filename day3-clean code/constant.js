//http pull data from server and store it in products;
fetch('http://localhost:3000/products').then(res=>{
    const products=res;
   
})

function findPi(inputNumber){
    const pi=3.14;
    pi=pi+100;
    let result=inputNumber*pi;

    return result;
}

findPi(200)


// class Student{

//     firstName;
//     lastName;
//     email;
//     mobileNo;
//     std;
//     div;
// }

// let studentObj=new Student();
// studentObj.firstName="chandan";
// studentObj.lastName="naresh";
// studentObj.mobileNo=8080811145;

// console.log(studentObj.firstName)



let firstName;
let age;
firstName="chandan";
age='39';

console.log(firstName,age);


