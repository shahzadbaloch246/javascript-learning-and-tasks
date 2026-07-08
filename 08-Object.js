// we can create an object using object literal syntax
// we can create an object using constructer which create only one objesct called singleton object
const mysym=Symbol("key1")
const  juser = {
[mysym]:"key1",
name: "shahzad",
cgpa: 3.5,
inbachler:true,
email:"shahzad@gmail.com",
lastday:["monday","tuesday"]
}
//console.log(juser["name"])
//console.log(juser["cgpa"])
//console.log(juser.email)
//console.log(juser.lastday)
//console.log(juser[mysym])
//Object.freeze(juser) // freeze the object so that we can not change the value of object


//juser.email="shahzadbaloch@gmail.com" //we try to chage but not change
//console.log(juser.email)

//function
juser.greeting= function()
{
    console.log(" I am shahzad ")
}

 //console.log(juser.greeting)


 //function
juser.greeting2= function()
{
    console.log( ` I am  ${this.name}` )
}

 //console.log(juser.greeting()) 
 //console.log(juser.greeting2())


 const newobj =new Object()


const  regular = {


email:"shahzad@gmail.com",
username:{
    fullname:{ 
        firstname:"shahzad",
        secondname:"Baloch"
      }
}
}


//console.log(regular.username.fullname. firstname)




const {email: userEmail} =  regular
console.log(userEmail);