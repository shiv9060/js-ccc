const mySym = Symbol("key1")
const JsUser = {
    name : "shivam",
    "full name": "shivam kumar",
    [mySym]: "mykey1",
    age: 18,
    location : "Jaipur",
    email: "shivamkr9934@gmaiil.com",
    isLoggedIn : false,
    lastLoginDAys: ["Monday","Sturday"]


}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.email = "shivam@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "shivam@microsoft.com"
console.log(JsUser);
