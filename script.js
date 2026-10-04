let contactbtn = document.getElementById("contactbtn");
let contactmessage = document.getElementById("contactmessage");

let username = document.getElementById("username");
let sendbtn = document.getElementById("sendbtn");
let sendmessage = document.getElementById("sendmessage");

let skillinput = document.getElementById("skillinput");
let skillbtn = document.getElementById("skillbtn");
let dynamicskill = document.getElementById("dynamicskill");


// Contact button
let isvisible = true;

contactbtn.addEventListener("click", function() {

    contactmessage.textContent = "Thank you for contacting me!";

    contactbtn.style.backgroundColor = "green";
    contactbtn.style.color = "white";

    if (isvisible) {
        contactmessage.style.display = "none";
        isvisible = false;
    } else {
        contactmessage.style.display = "block";
        isvisible = true;
    }

});


// Send message
sendbtn.addEventListener("click", function(event) {

    event.preventDefault();

    if (username.value === "") {
        sendmessage.textContent = "Please enter your name!";
    } else {
        sendmessage.textContent = "Thank you, " + username.value + "!";
    }

});


// Add skill
skillbtn.addEventListener("click", function() {

    if (skillinput.value !== "") {

        let newskill = document.createElement("li");

        newskill.textContent = skillinput.value;

        let removebtn = document.createElement("button");

        removebtn.textContent = "Remove";

        removebtn.addEventListener("click", function() {
            newskill.remove();
        });

        newskill.appendChild(removebtn);

        dynamicskill.appendChild(newskill);

        skillinput.value = "";
    }

});