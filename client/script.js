const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPhone = document.getElementById("phone");
const addUserButton = document.querySelector("button");


    

addUserButton.onclick=()=>{
    console.log(userName.value)
    console.log(userEmail.value)
    console.log(userPhone.value)

    // e.preventDefault();
    // let valid = true;
  
    // if (!userName.value) {
    //   console.log("error")
    // }
    // else{
    //     console.log("sucess")
    // }

    fetch("http://localhost:3001/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now(),
            name: userName.value,
            email:userEmail.value,
            phone:userPhone.value
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUser()
        });
        userName.value=""
    };

    function displayUser(){
        let section = ""
        fetch("http://localhost:3001/displayUser")
        .then((res)=>{
            res.json();
        });
        }

