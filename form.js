const htmlForm = `
<div
  style="
    display: flex;
    align-items: center;
    justify-content: center;
  "
>
  <form
    id="elitedermaForm"
    name="elitedermaForm"
    target="/"
    style="padding: 8px; width: 100%; max-width: 425px"
  >
    <div style="text-align: center">
      <h1>Contattaci</h1>
      <p
        style="
          position: right;
          font-size: 11px;
          color: red;
        "
      >
        (*)Campi obbigatori
      </p>
    </div>

    <div>
      <label for="your-name" style="font-weight: 600"
        >Nome: *</label
      ><br />
      <input
        class="text"
        type="text"
        id="your-name"
        name="your-name"
        placeholder=""
        style="
          width: 100%;
          min-width: 200px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        "
        pattern=".*([a-zA-Z]{2,30}).*"
        required=""
      />
      <span
        class="error"
        style="
          display: none;
          font-size: 0.8em;
          position: absolute;
          color: red;
        "
        >Inserisci il tuo nome
      </span>
    </div>

    <br />

    <div>
      <label for="your-surname" style="font-weight: 600"
        >Cognome: *</label
      ><br />
      <input
        class="text"
        type="text"
        id="your-surname"
        name="your-surname"
        placeholder=""
        style="
          width: 100%;
          min-width: 200px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        "
        pattern=".*([a-zA-Z]{2,30}).*"
        required=""
      />
      <span
        class="error"
        style="
          display: none;
          font-size: 0.8em;
          position: absolute;
          color: red;
        "
        >Inserisci il tuo cognome</span
      >
    </div>
    <br />

    <div>
      <label for="your-email" style="font-weight: 600"
        >Email: *</label
      ><br />
      <input
        class="text"
        type="email"
        id="your-email"
        name="your-email"
        placeholder=""
        style="
          width: 100%;
          min-width: 200px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        "
        required=""
      />
      <span
        class="error"
        style="
          display: none;
          font-size: 0.8em;
          position: absolute;
          color: red;
        "
        >Inserisci una mail valida</span
      >
    </div>
    <br />

    <div>
      <label for="your-phone" style="font-weight: 600"
        >Telefono: *</label
      ><br />
      <input
        class="text"
        type="tel"
        id="your-phone"
        name="your-phone"
        placeholder=""
        style="
          width: 100%;
          min-width: 200px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        "
        pattern="^\\+?[0-9]{9,12}$"
        required=""
      />
      <span
        class="error"
        style="
          display: none;
          font-size: 0.8em;
          position: absolute;
          color: red;
        "
        >Inserisci un numero di telefono valido</span
      >
    </div>
    <br />

    <div>
      <p style="font-weight: 600; margin-bottom: 5px">
        Settore di provenienza: *
      </p>
      <input
        type="checkbox"
        class="settore"
        id="settore1"
        name="checkbox-settore-work[]"
        value="Estetista"
      />
      <label for="settore1">Estetista</label>
      <input
        type="checkbox"
        class="settore"
        id="settore2"
        name="checkbox-settore-work[]"
        value="Tatuatore"
      />
      <label for="settore2">Tatuatore</label><br />
      <input
        type="checkbox"
        class="settore"
        id="settore3"
        name="checkbox-settore-work[]"
        value="Lash Maker"
      />
      <label for="settore3">Lash Maker</label>
      <input
        type="checkbox"
        class="settore"
        id="settore4"
        name="checkbox-settore-work[]"
        value="Onicotecnica"
      />
      <label for="settore4">Onicotecnica</label><br />
      <input
        type="checkbox"
        class="settore"
        id="settore5"
        name="checkbox-settore-work[]"
        value="Make up artist"
      />
      <label for="settore5">Make up artist</label>
      <input
        type="checkbox"
        class="settore"
        id="settore6"
        name="checkbox-settore-work[]"
        value="Parrucchiera"
      />
      <label for="settore6">Parrucchiera</label><br />
      <input
        type="checkbox"
        class="settore"
        id="settore7"
        name="checkbox-settore-work[]"
        value="Massaggiatore"
      />
      <label for="settore7">Massaggiatore</label>
      <input
        type="checkbox"
        class="settore"
        id="settore8"
        name="checkbox-settore-work[]"
        value="Altro settore"
      />
      <label for="settore8">Altro settore</label>
      <span
        id="error-settore"
        style="
          display: none;
          font-size: 0.8em;
          position: absolute;
          color: red;
        "
        >Seleziona almeno un settore</span
      >
    </div>
    <br />

    <div>
      <p style="font-weight: 600; margin-bottom: 5px">
        Richiesta informazioni per:
      </p>
      <input
        type="checkbox"
        class="info"
        id="corso1"
        name="checkbox-info-corsi[]"
        value="Corso Microblading Base"
      />
      <label for="corso1">Corso Microblading Base</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso2"
        name="checkbox-info-corsi[]"
        value="Corso Microblading Avanzato"
      />
      <label for="corso2"
        >Corso Microblading Avanzato</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso3"
        name="checkbox-info-corsi[]"
        value="Corso trucco permanente con dermografo Base"
      />
      <label for="corso3"
        >Corso trucco permanente con dermografo
        Base</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso4"
        name="checkbox-info-corsi[]"
        value="Corso trucco permanente con dermografo Avanzato"
      />
      <label for="corso4"
        >Corso trucco permanente con dermografo
        Avanzato</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso5"
        name="checkbox-info-corsi[]"
        value="Corso Microneedling"
      />
      <label for="corso5">Corso Microneedling</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso6"
        name="checkbox-info-corsi[]"
        value="Corso Tricopigmentazione"
      />
      <label for="corso6">Corso Tricopigmentazione</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso7"
        name="checkbox-info-corsi[]"
        value="Corso Laminazione Ciglia e sopracciglia"
      />
      <label for="corso7"
        >Corso Laminazione Ciglia e sopracciglia</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso8"
        name="checkbox-info-corsi[]"
        value="Corso AreolArt"
      />
      <label for="corso8">Corso AreolArt</label><br />
      <input
        type="checkbox"
        class="info"
        id="corso9"
        name="checkbox-info-corsi[]"
        value="Corso Extension Ciglia"
      />
      <label for="corso9">Corso Extension Ciglia</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso10"
        name="checkbox-info-corsi[]"
        value="Corso laminazione con protocollo IKE"
      />
      <label for="corso10">Corso laminazione con protocollo IKE</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso11"
        name="checkbox-info-corsi[]"
        value="Corso Remover"
      />
      <label for="corso11">Corso Remover</label
      ><br />
      <input
        type="checkbox"
        class="info"
        id="corso12"
        name="checkbox-info-corsi[]"
        value="Altro"
      />
      <label for="corso12">Altro</label>
    </div>
    <br />

    <p style="font-weight: 600; margin-bottom: 5px">
      La tua regione:
    </p>
    <select
      class="select-regione"
      aria-invalid="false"
      name="menu-regioni-it"
      style="
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 10px;
      "
    >
      <option value="">—Seleziona un'opzione—</option>
      <option value="Abruzzo">Abruzzo</option>
      <option value="Basilicata">Basilicata</option>
      <option value="Calabria">Calabria</option>
      <option value="Campania">Campania</option>
      <option value="Emilia Romagna">
        Emilia Romagna
      </option>
      <option value="Friuli Venezia Giulia">
        Friuli Venezia Giulia
      </option>
      <option value="Lazio">Lazio</option>
      <option value="Liguria">Liguria</option>
      <option value="Lombardia">Lombardia</option>
      <option value="Marche">Marche</option>
      <option value="Molise">Molise</option>
      <option value="Piemonte">Piemonte</option>
      <option value="Puglia">Puglia</option>
      <option value="Sardegna">Sardegna</option>
      <option value="Sicilia">Sicilia</option>
      <option value="Toscana">Toscana</option>
      <option value="Trentino Alto Adige">
        Trentino Alto Adige
      </option>
      <option value="Umbria">Umbria</option>
      <option value="Val d'Aosta">Val d'Aosta</option>
      <option value="Veneto">Veneto</option>
    </select>

    <br />
    <br />

    <p style="font-weight: 600; margin-bottom: 5px">
      Quando preferisci essere contattata?
    </p>
    <select
      class="select-giorno"
      aria-invalid="false"
      name="menu-giorno"
      style="
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
      "
    >
      <option value="">—Seleziona un'opzione—</option>
      <option value="Lunedì">Lunedì</option>
      <option value="Martedì">Martedì</option>
      <option value="Mercoledì">Mercoledì</option>
      <option value="Giovedì">Giovedì</option>
      <option value="Venerdì">Venerdì</option>
      <option value="Sabato">Sabato</option>
    </select>
    <br />
    <br />

    <p style="font-weight: 600; margin-bottom: 5px">
      Seleziona la fascia oraria:
    </p>
    <select
      class="select-fascia-oraria"
      aria-invalid="false"
      name="menu-ora"
      style="
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
      "
    >
      <option value="">—Seleziona un'opzione—</option>
      <option value="Qualsiasi orario di Mattina">
        Qualsiasi orario di Mattina
      </option>
      <option value="Qualsiasi orario di Pomeriggio">
        Qualsiasi orario di Pomeriggio
      </option>
      <option value="8.30-9.00">8.30-9.00</option>
      <option value="9.00-9.30">9.00-9.30</option>
      <option value="9.30-10.00">9.30-10.00</option>
      <option value="10.00-10.30">10.00-10.30</option>
      <option value="10.30-11.00">10.30-11.00</option>
      <option value="11.00-11.30">11.00-11.30</option>
      <option value="11.30-12.00">11.30-12.00</option>
      <option value="12.00-12.30">12.00-12.30</option>
      <option value="12.30-13.00">12.30-13.00</option>
      <option value="13.00-13.30">13.00-13.30</option>
      <option value="13.30-14.00">13.30-14.00</option>
      <option value="14.00-14.30">14.00-14.30</option>
      <option value="14.30-15.00">14.30-15.00</option>
      <option value="15.00-15.30">15.00-15.30</option>
      <option value="15.30-16.00">15.30-16.00</option>
      <option value="16.00-16.30">16.00-16.30</option>
      <option value="16.30-17.00">16.30-17.00</option>
      <option value="17.00-17.30">17.00-17.30</option>
      <option value="17.30-18.00">17.30-18.00</option>
      <option value="18.30-19.00">18.30-19.00</option>
      <option value="19.00-19.30">19.00-19.30</option>
      <option value="19.30-20.00">19.30-20.00</option>
    </select>
    <br />
    <br />

    <div style="margin-top: 30px">
      <input
        type="submit"
        id="submit"
        value="Accetto e Invio"
        style="
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
          border-radius: 5px;
        "
        onmouseover="this.style.cursor='pointer'"
      />
      <p
        style="
          font-size: 11px;
          padding-bottom: 5px;
          margin-top: 20px;
        "
      >
        Si applica la nostra
        <a href="/j/privacy" target="_blank"
          >Dichiarazione sulla privacy</a
        >
      </p>
    </div>
  </form>
</div>
`;

const innerScript = `// Add event listener
var btn = document.getElementById("submit");
var form = document.getElementById("elitedermaForm");

form.addEventListener("change", validateData, true);
btn.addEventListener("click", submitData);

function validateData(e) {
  var formData = new FormData(form);

  if (e == "submit") {
    var res;
    var validation = form.reportValidity();
    formData.getAll("checkbox-settore-work[]").length == 0
      ? (document.getElementById("error-settore").style.display = "block")
      : (res = true);
  } else {
    if (e.target.className == "text") {
      e.target.validity.valid
        ? (e.target.nextElementSibling.style.display = "none")
        : (e.target.nextElementSibling.style.display = "block");
    } else if (e.target.className == "settore") {
      formData.getAll("checkbox-settore-work[]").length == 0
        ? (document.getElementById("error-settore").style.display = "block")
        : (document.getElementById("error-settore").style.display = "none");
    }
  }
  return res == true && validation == true;
}

function submitData(e) {
  e.preventDefault();

  var formData = new FormData(form);
  var vldt = validateData("submit");

  if (vldt) {
    btn.disabled = true;
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
        body: JSON.stringify({
          origin: window.location.href,
          tmsp: timeUTC + timezoneoffset,
          data: getData,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "cdbe92ca-ae4e-4ab9-b536-a4eba06919fa",
        },
      };

      const response = await fetch(
        "https://contact-manager-psi-ten.vercel.app/api/contact",
        d
      );

      if (response.status != 200) {
        window.alert("Si è verificato un errore. Riprova");
        btn.disabled = false;
      } else {
        window.location.href = "https://www.elitederma.it/thankyou/";
      }
    })();
  } else {
    //console.log("some error");
  }
}`;

async function createForm() {
  /*
  // Cache removal script
  caches
    .keys()
    .then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
  */
  var formHTML = htmlForm;
  // Append the form to the body or a specific element
  document.getElementById("form-container").innerHTML = formHTML;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = innerScript;

  // Append the script element to the form-container or to document.body or head
  document.getElementById("form-container").appendChild(script);
}

window.onload = createForm;
