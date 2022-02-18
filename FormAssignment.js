function GetData() {
    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;
    let mail = document.getElementById("em").value;
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    var gender = document.querySelector('input[name="gnd"]:checked');
    var plan = document.querySelector('input[name="pln"]:checked');

    if (fn == "") {
        document.getElementById("lbl").innerHTML = "*First Name is required";
    }
    else if (ln == "") {
        document.getElementById("lbl").innerHTML = "*Last Name is required";
    }
    else if (mail == "") {
        document.getElementById("lbl").innerHTML = "*Email is required";
    }
    else if (p1 == "" && p2 == "") {
        document.getElementById("lbl").innerHTML = "*Enter Password";
    }
    else if (p2 == "") {
        document.getElementById("lbl").innerHTML = "*Confirm Password";
    }
    else if (p1 != p2) {
        document.getElementById("lbl").innerHTML = "*Passwords Do Not Match";
    }
    else if (gender == null) {
        document.getElementById("lbl").innerHTML = "*Select Gender";
    }
    else if (plan == null) {
        document.getElementById("lbl").innerHTML = "*Select Plan";
    }
    else {
        document.write("Name: ", fn, " ", ln, "</br>Email: ", mail, "</br>Gender: ", gender.value, "</br>Plan: ", plan.value);
    }
}

// Email pattern- /^\S+@\S+\.\S+$/ 