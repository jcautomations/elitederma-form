import { htmlForm } from "./formbody";

var btn = document.getElementById("submit");
var form = document.getElementById("elitedermaForm");

form.addEventListener("change", validateData, true);
btn.addEventListener("click", submitData);

function validateData(e) {
    var formData = new FormData(form);

    if (e == "submit") {
        var res;
        var validation = form.reportValidity();
        (formData.getAll("checkbox-settore-work[]").length == 0) ?
            document.getElementById("error-settore").style.display = "block" :
            res = true;
    }

    else {

        if (e.target.className == "text") {
            (e.target.validity.valid) ?
                e.target.nextElementSibling.style.display = "none" :
                e.target.nextElementSibling.style.display = "block";
        }

        else if (e.target.className == "settore") {
            (formData.getAll("checkbox-settore-work[]").length == 0) ?
                document.getElementById("error-settore").style.display = "block" :
                document.getElementById("error-settore").style.display = "none";
        }
    }
    return res == true && validation == true;
}

function submitData(e) {
    e.preventDefault();
    btn.disabled = true;

    var formData = new FormData(form);
    var vldt = validateData("submit");

    if (vldt) {

        var getData = Object.fromEntries(formData.entries());
        var checkSettore = formData.getAll("checkbox-settore-work[]").toString();
        var checkInfo = formData.getAll("checkbox-info-corsi[]").toString();
        var timestamp = new Date();
        var timeUTC = timestamp.getTime();
        var timezoneoffset = timestamp.getTimezoneOffset() * -60000;

        getData["checkbox-settore-work[]"] = checkSettore;
        getData["checkbox-info-corsi[]"] = checkInfo;

        console.log(getData);

        (async () => {

            var d = {
                method: "POST",
                body: JSON.stringify({ origin: window.location.href, tmsp: timeUTC + timezoneoffset, data: getData }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "cdbe92ca-ae4e-4ab9-b536-a4eba06919fa"
                }
            };

            const response = await fetch("https://contact-manager-psi-ten.vercel.app/api/contact", d);

            if (response.status != 200) {
                window.alert("Si è verificato un errore. Riprova");
                btn.disabled = false;
            }
            else {
                window.location.href = "https://www.elitederma.it/thankyou/";
            }
        })();
    }
    else {
        //console.log("some error");
    }
}


function createForm() {
    var formHTML = htmlForm;

    // Append the form to the body or a specific element
    document.getElementById("form-container").innerHTML = formHTML;
}

window.onload = createForm;
