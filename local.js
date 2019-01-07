
// // // localStorage.clear();
// // // console.log(localStorage)

// if (typeof (Storage) !== "undefined") {
//     var d = function (name, email, password) {
//         return {
//             name,
//             email,
//             password
//         }
//     }


//     localStorage.setItem('demo', JSON.stringify(d("charan", "charan", "charan")));
//     var obj = JSON.parse(localStorage.getItem("demo"));

//     var array = [];
//     array.push(obj);
//     array.push(d("eswar", "eswar", "eswar"));
//     localStorage.setItem('demo', JSON.stringify(array));

//     console.log(JSON.parse(localStorage.getItem("demo")));
//     console.log(JSON.parse(localStorage.getItem("first")));
    

// }

    // localStorage.setItem('demo', JSON.stringify(d("eswar", "eswar@gmail.com", "eswar1234")))


    // var user = JSON.parse(localStorage.getItem("demo")) || [];
    // var users = Object.entries(user);

    // user.push(d("charan", "charan", "charan"));
    // user.push(d("ch", "ch", "ch"));


    // var str = JSON.stringify(d("srinu", "srinu@.com", "srinu1234"))
    // // console.log(str);
    // var got = localStorage.getItem("demo");
    // // got.concat(str);
    // // console.log(got);
    // localStorage.setItem('demo', got+str);
    // console.log(localStorage.getItem("demo"));

//     var yeayyy = JSON.parse(localStorage.getItem("demo"));
//     console.log(yeayyy);



// }
// //     localStorage.setItem( 'demo',
// //     JSON.stringify(
// //         JSON.parse(
// //             localStorage.getItem( 'demo' ) || '[]'
// //         )
// //     ).concat(d("charan", "charan@.com", "charan1234"))
// // )






// function insertAfter(referenceNode, newNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }


// var el = document.createElement("span");
// el.innerHTML = "test";
// var div = document.getElementById("foo");
// insertAfter(div, el);



//AFTER COMPLETION

/* <input type="button" value="reset" id="rst"> */

// document.getElementById("rst").addEventListener("click", function () {
//     window.location.reload();
// })


            // return "Error message removed from dom";

    //console.log(validating_input(password, "Password", "pwd_dup") === validating_input(name, "Name", "name_dup") === "Error message removed from dom");

    // if (name.trim() === "" || email.trim() === "" || password.trim() === "" || address.trim() === "" || phone.trim() === "") {
    // validating_input(name, "Name", "name_dup");
    // validating_input(email, "Email", "email_dup");
    // validating_input(password, "Password", "pwd_dup");
    // validating_input(address, "Address", "add_dup");
    // validating_input(phone, "Phone", "phone_dup");
    // }
    // else {
    //     storage_local(name, email, password, address, phone);

    // }

    // var value = validating_input(name, "Name", "name_dup") = validating_input(email, "Email", "email_dup");
    // if(value === true){
    //     console.log("true")
    // }


// else {
//     console.log("not executed")
// }

// console.log(JSON.parse(localStorage.getItem("third")));

// console.log(tb)


// var storing_input = function (name, email, password, address, phone) {
//     return {
//         name,
//         email,
//         password,
//         address,
//         phone
//     }
// }
    // window.location.reload();
    // if(localStorage.getItem("demo") != null){
    //     var 

    // }

            // console.log("please enter "+element_name);
            // msg.setAttribute("id", v);
            // var msg = document.createTextNode("Please enter "+element_name); 

        // localStorage.setItem('demo', JSON.stringify(d("charan", "charan", "charan")));

        // var array = [];
        // array.push(obj);

        // console.log()
        // console.log(storing_input(name, email, password, address, phone));

// localStorage.setItem("a", JSON.stringify([1, 2, 3]));
// var c = typeof(JSON.parse(localStorage.getItem("a")));



// localStorage.setItem('c', JSON.stringify(c))

// localStorage.setItem('d', JSON.stringify(d("charan", "charan", "charan")))



// var a = "charan";
// var b = "eswar";

// var array = [];
// array.push({a,b});
// console.log(array);


// var p = document.createElement("p")
// p.innerHTML = "created";
// c.appendChild(p);
// if(typeof(p) != 'undefined' && p != null){
//     console.log("null");
// }else{
//     console.log("not null");
// }

// c.removeChild(p);

// localStorage.clear();


var c = function(a,b){
    return a+b;
}

console.log(c());