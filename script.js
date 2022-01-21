function Logowanie(){
    console.log("Imię i nazwisko, kierunek studiów oraz grupa");
    //zmienne pobierające login i hasło z formularza z pliku index.html
    var login = document.getElementById("login").value;
    var haslo = document.getElementById("haslo").value;

    if(login == "admin" && haslo == "admin"){
        window.location.href = 'main.html';
    }
    else{
        alert("Niepoprawne dane logowania!");
    }
}

function sidebar(){
    var sidebarID = document.getElementById("sidebar");
    var sidebar_schowany = document.getElementById("sidebar_schowany");
    var sidebar_pokazany = document.getElementById("sidebar_pokazany");

    if(window.getComputedStyle(sidebarID, null).getPropertyValue("display") === "none"){
        sidebarID.style.display = "block";
        sidebar_schowany.style.display = "none";
        sidebar_pokazany.style.display = "block";
    }else{
        sidebarID.style.display = "none";
        sidebar_schowany.style.display = "block";
        sidebar_pokazany.style.display = "none";
    }
}

function getForm(){
    //window.alert('eki');
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var opis = document.getElementById("opis").value;
    var temat = document.getElementById("temat");
    var value_temat = temat.value;

    window.alert("Imię: " + imie + " Nazwisko: " + nazwisko + " Temat: " + value_temat + " Treść ogłoszenia: " + opis);
}

function addLi(){
    var ul = document.getElementById("list");

    const animals = [
        {animal: 'Słoń', weight: 1200},
        {animal: 'Mysz', weight: 0.1},
        {animal: 'Pies', weight: 30},
        {animal: 'Jeż', weight: 5},
        {animal: 'Tygrys', weight: 200},
    ];
    
    for(var i = 0; i < animals.length; i++){
        if(animals[i].weight > 10){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(animals[i].animal));
            ul.appendChild(li); 
        }
    }

    
}


