const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname : {
            firstname: "shivam",
            lastname : "kumar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
        
    }

]

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor : "shivam"
}

const {courseInstructor: instructor} = course 
console.log(instructor);

//{
  // name: "shivam",
   //coursename: "js in hindi",
   //price: "free" 
//}

