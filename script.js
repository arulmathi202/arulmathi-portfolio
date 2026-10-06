// ================================
// Dynamic Skills
// ================================

let skillinput = document.getElementById("skillinput");
let skillbtn = document.getElementById("skillbtn");
let dynamicskill = document.getElementById("dynamicskill");

skillbtn.addEventListener("click", function () {

    let skill = skillinput.value.trim();

    if (skill !== "") {

        let newskill = document.createElement("li");
        newskill.textContent = skill;

        let removebtn = document.createElement("button");
        removebtn.textContent = "Remove";
        removebtn.type = "button";

        removebtn.addEventListener("click", function () {
            newskill.remove();
        });

        newskill.appendChild(removebtn);
        dynamicskill.appendChild(newskill);

        skillinput.value = "";
    }

});