// let cant = document.getElementById("cantidad").value;
let totPag;
// let desc = document.getElementById("categoria").value;
let totPagRes = document.querySelector(".pagar");
let totPagOrg = totPagRes.innerHTML;
let btnResumen = document.getElementById("resumen");
let btnResumenOrg = btnResumen.innerHTML;
let btnBorar = document.getElementById("reset");




function handLeaveInInputBtn() {
    btnResumen.innerHTML = btnResumenOrg;
    totPagRes.innerHTML = totPagOrg;
}

function handClickInImputBtn() {
    btnResumen.innerHTML = "Comprar";
    let cant = document.getElementById("cantidad").value;
    let desc = document.getElementById("categoria").value;
    cant = cant * 200;
    if (desc == "e") {
        totPag = cant * .2;
    } else if (desc == "t") {
        totPag = cant * .5;
    } else {
        totPag = cant * .85;
    }
    /*switch (desc) {
        case "e":
            desc = .2;
            break;
        case "t":
            desc = .5;
            break;
        case "j":
            desc = .85;
            break
    }

    totPag = cant * desc;*/
    totPagRes.innerHTML = totPagOrg + totPag;
}

/*function montoAPagar() {
    totPagRes.innerHTML = (totPagOrg + totPag);
}*/

btnResumen.onclick = handClickInImputBtn;
btnBorar.onclick = handLeaveInInputBtn;