
const login = async  function () {
    const user = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    
    const response =  await fetch("http://localhost:3000", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify({user: user,password : password})
    })

    const json = await response.json();
    var result = "";
    if (json.success) {
         result =  `<h1>You are logged in!!!</h1>`;
    }
    else {
        result = `<h1>You are failed to log in</h1>`;
    }
    document.querySelector("body").innerHTML = result;
}
const signup = async  function () {
    const user = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    const name = document.querySelector("#exampleInputName").value
    const response =  await fetch("http://localhost:3000/signup", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify({name : name ,user: user,password : password})
    })

    const json = await response.json();
    var result = "";
    if (json.success) {
         result =  `<h1>You are signed up in!!!</h1>`;
    }
    else {
        result = `<h1>You are failed to signed  in</h1>`;
    }
    document.querySelector("body").innerHTML = result;
}
const btn = document.querySelector(".btn");

document.querySelector(".new").addEventListener("click", function () {
    btn.innerHTML = `Sign Up`
    const name = document.createElement("div");
    name.classList.add("form-group");
    name.innerHTML = `<label for="exampleInputName">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="Help"
        placeholder="Enter Name">`
    document.querySelector("form").prepend(name);
});

btn.addEventListener("click", function () {
    if (this.innerHTML == "Submit") {
        login();
    }
    else {
        signup();
    }
});
