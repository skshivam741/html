function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return false;
    } else {
        alert("Login successful (Demo)");
        return false; // demo only
    }
}