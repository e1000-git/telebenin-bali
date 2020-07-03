document.querySelector(".fenn").style.width = "400px";

function remove() {
    document.querySelector(".fenn").removeChild(document.querySelector(".subject"));
    document.querySelector(".fenn").removeChild(document.querySelector(".point"));
    document.querySelector(".fenn").removeChild(document.querySelector(".remove"));
}

function fenn() {
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Fennin adi");
    input1.setAttribute("class", "subject");
    document.querySelector('.fenn').appendChild(input1);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("placeholder", "Balin");
    input2.setAttribute("class", "point");
    document.querySelector('.fenn').appendChild(input2);

    var button = document.createElement("button");
    button.innerText = "-";
    button.setAttribute("class", "remove");
    button.setAttribute("onclick", "remove()");
    document.querySelector(".fenn").appendChild(button);
}

function hesabla() {
    var ballar = document.querySelectorAll(".point");
    var sum = 0,
        gpa, teqaudun_novu;
    for (var i = 0; i < ballar.length; i++) {
        if (parseInt(ballar[i].value) > 100 || parseInt(ballar[i].value) < 0) { alert("Xahis olunur 0-100 arasinda bir qiymet daxil edin!!! Eks teqdirde ortalamaniz '0' kimi hesablanacaq!") } else { sum += parseInt(ballar[i].value); }
    }

    gpa = sum / ballar.length;

    if (gpa >= 91 && gpa <= 100) { teqaudun_novu = "145 man."; }
    if (gpa < 91 && gpa >= 81) { teqaudun_novu = "120 man."; }
    if (gpa < 81 && gpa >= 71) { teqaudun_novu = "80 man."; }
    if (gpa < 71 && gpa >= 51) { teqaudun_novu = "Teqaude dusmediniz!!"; }
    if (gpa < 51 && gpa >= 0) { teqaudun_novu = "Teqaude dusmediniz!! Cunki kesildiniz!"; }
    //if (gpa < 0 || gpa > 100) { alert("Xahis olunur 0-100 arasinda bir qiymet daxil edin!!!") }


    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var row = document.createElement("tr");
    row.className = "row1";
    document.querySelector(".cedvel").appendChild(row);

    var data1 = document.createElement("td");
    data1.innerText = name;
    var data2 = document.createElement("td");
    data2.innerText = surname;
    var data3 = document.createElement("td");
    data3.innerText = gpa;
    var data4 = document.createElement("td");
    data4.innerText = teqaudun_novu;
    document.querySelector(".row1").appendChild(data1);
    document.querySelector(".row1").appendChild(data2);
    document.querySelector(".row1").appendChild(data3);
    document.querySelector(".row1").appendChild(data4);

    row.className = "row2";
}