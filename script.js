const database =[
    {
        email: "tijjtay@gmail.com",
        password: "Solace"
    },
     {
        email: "tijjken@gmail.com",
        password: "Solaceboy"
    },
     {
        email: "gbadamosi@gmail.com",
        password: "Sol"
    },
     {
        email: "imam@gmail.com",
        password: "Imam23"
    },
     {
        email: "adetayo@gmail.com",
        password: "Adeade20"
    }

]
const b = document.getElementById("email")
const c = document.getElementById("password")
const d =document.querySelector(".button")

function login() {
     if (userValid(b.value.toLowerCase(), c.value)) {
         window.alert("This is right username and password")
     }else{
         window.alert("enter the right username and password")
     }
     setDefault()
}
function userValid(username, password) {
    // e.preventDefault();
     for (let i = 0; i < database.length; i++) {
          if (database[i].email===username && database[i].password===password) {
      return true
    } 
  
     }
       return false
}

d.addEventListener("click",login)

function setDefault() {
    b.value = ""
    c.value = ""
}