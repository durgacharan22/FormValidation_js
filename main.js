var validating_input = function (v, element_name, str_duplicate) {
    var created_element = document.getElementById(str_duplicate);
    var v_func = document.getElementById(element_name);
    if (v.trim() === "") {
        if (created_element === null) {
            var p = document.createElement("p");
            p.setAttribute("id", str_duplicate);
            p.innerHTML = "Please enter " + element_name;
            v_func.appendChild(p);
        } return "No Input";
    }
    else {
        if (created_element != null) {
            v_func.removeChild(created_element);
        } return "Input";
    }
}

var storage_local = function (name, email, password, address, phone, gender) {
    var array = JSON.parse(localStorage.getItem("third")) || [];
    array.push({ name, email, password, address, phone, gender });
    localStorage.setItem('third', JSON.stringify(array));
    var tb = "<table border = '1'>";
    for (var i = 0; i < array.length; i++) {
        tb += "<tr>";
        tb += "<td>" + array[i].name + "</td>";
        tb += "<td>" + array[i].email + "</td>";
        tb += "<td>" + array[i].password + "</td>";
        tb += "<td>" + array[i].address + "</td>";
        tb += "<td>" + array[i].phone + "</td>";
        tb += "<td>" + array[i].gender + "</td>";
        tb += "</tr>";
    }
    tb += "</table>";
    document.getElementById("table").innerHTML = tb;
}

document.getElementById("bt").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var genders = document.getElementsByName("gender");
    var gender;
    if(genders[0].checked == true){
        gender = "male";
    }else if(genders[1].checked == true){
        gender = "female";
    }else{
        gender = "";
    }
    var a = validating_input(name, "Name", "name_dup");
    var b = validating_input(email, "Email", "email_dup");
    var c = validating_input(password, "Password", "pwd_dup");
    var d = validating_input(address, "Address", "add_dup");
    var e = validating_input(phone, "Phone", "phone_dup");
    var f = validating_input(gender, "Gender", "gender_dup")
    if (a === "No Input" || b === "No Input" || c === "No Input" || d === "No Input" || e === "No Input" || f ==="No Input") {
        console.log("No Input")
    }
    else {
        storage_local(name, email, password, address, phone, gender);
    }
})