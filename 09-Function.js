//if you  use console.log() inside the function it will not return any value so the result will be undefined
// for return value we have to use return keyword inside the function


function addnum(n1,n2){ 
    n3=n1+n2;
    return n3   ;

}
const result = addnum(5, 3);
//console.log("results :  ",result) has been loged;

function login(username,password){ 
    if(!username || !password){
        return "Username and password are required";
        return
    }
    return `${username} , ${password}`;
}
// console.log(login("Shahzad", "3075"));


function addnum(n3,n2,...n1){ 
  
    return n1

}
//console.log(addnum(5, 3,4,5))

const  juser = {
name: "shahzad",
cgpa: 3.5,
email:"shahzad@gmail.com",

}

function addnum(anyobject){ 
  
    console.log(`my name is ${anyobject.name} and my email is ${anyobject.email} and my cgpa is ${anyobject.cgpa}`)

}
//addnum(juser)
//console.log(addnum(juser))

//Array
let arr=[1,true,3,"shah"]

function print(ar){ 
  
    console.log(ar[3])

}
print(arr)