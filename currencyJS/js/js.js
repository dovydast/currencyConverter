const currencyData = async () => {
    data = await fetch(
        'https://api.exchangeratesapi.io/latest'
    ).then(res => res.json());
    
}

const showData = async () => {
    await currencyData();
    console.log(data);
    var timestampData = document.querySelector('.timestamp');
    timestampData.textContent = data.date;

  for (let info in data.rates){ // pasiemam valiutu info is rates pvz: CAD 1.4498
      let option = document.createElement('option'); // sukuriam option elementa
      document.querySelector('select').appendChild(option); // sukuriam select elementa ir priskiriame prie option elemento
      option.textContent = info; // option elemente spausdiname Valiutu pavadinimus pvz: CAD, USD, JPN ir t.t
      option.setAttribute("value",data.rates[info]); // option elementui setinam value atributa su valiutos reiksme pvz . tai Value bus 1.4498 priskitas prie CAD pavadinimo.
  }

  (function () {
    function keistiValiuta() {
        let getIvestaSuma = document.getElementById('ivestiSuma').value; // gaunam ivesta skaiciu
            console.log(getIvestaSuma);
        let getOptionValue = document.getElementById("inputGroupSelect02").value // gaunam pasirinka valiuta
        console.log(getOptionValue);

        let getOptionName = document.getElementById("inputGroupSelect02");
        el = getOptionName.options[getOptionName.selectedIndex].text; // gaunam pasirinkta valiutos pavadinima
        console.log(el);
       

        let konvertuotiSuma = getIvestaSuma * getOptionValue; // EURUS dauginam is pasirinktos valiutos
        console.log(konvertuotiSuma);
        document.getElementById("valiutaPakeista").innerHTML = konvertuotiSuma.toFixed(2) + ' ' + el;
         // Gaunam suskaiciuota rezultata ir spausdiname html elemente palei id - "valiutaPakeista". To fixed - 2 sk. po kableliu
         // el - spausdinam pasirinktos valiutos pavadinima


    }
  
    document.getElementById('changeCurrency').addEventListener('click', keistiValiuta, true);
  })();
    
    
   
}

showData();

