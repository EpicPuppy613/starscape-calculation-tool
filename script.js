function calculate(){

/*
Resources:
r = reknite
k = korrelite
g = gellium
a = axnit
n = narcor
c = red narcor
v = vexnium
*/

var r = parseInt(document.getElementById("r").value);
var k = parseInt(document.getElementById("k").value);
var g = parseInt(document.getElementById("g").value);
var a = parseInt(document.getElementById("a").value);
var n = parseInt(document.getElementById("n").value);
var c = parseInt(document.getElementById("c").value);
var v = parseInt(document.getElementById("v").value);

var rc = parseInt(document.getElementById("rp").value);
var ro = document.getElementById("ro").value == "o";
var kc = parseInt(document.getElementById("kp").value);
var ko = document.getElementById("ko").value == "o";
var gc = parseInt(document.getElementById("gp").value);
var go = document.getElementById("go").value == "o";
var ac = parseInt(document.getElementById("ap").value);
var ao = document.getElementById("ao").value == "o";
var nc = parseInt(document.getElementById("np").value);
var no = document.getElementById("no").value == "o";
var cc = parseInt(document.getElementById("cp").value);
var co = document.getElementById("co").value == "o";
var vc = parseInt(document.getElementById("vp").value);
var vo = document.getElementById("vo").value == "o";

var fee = parseFloat(document.getElementById("lf").value);
var tax = parseFloat(document.getElementById("mt").value);

var rn = Math.max(0, parseInt(document.getElementById('rc').value) - r);
var kn = Math.max(0, parseInt(document.getElementById('kc').value) - k);
var gn = Math.max(0, parseInt(document.getElementById('gc').value) - g);
var an = Math.max(0, parseInt(document.getElementById('ac').value) - a);
var nn = Math.max(0, parseInt(document.getElementById('nc').value) - n);
var cn = Math.max(0, parseInt(document.getElementById('cc').value) - c);
var vn = Math.max(0, parseInt(document.getElementById('vc').value) - v);

var cost = 0;
var out = document.getElementById("stats");
out.innerHTML = "";
if (rn > 0 && ro) {
    cost += fee + (rc * rn) + (rc * rn * tax / 100);
    console.log(`Reknite: ${rn} (cost: ${(fee + (rc * rn) + (rc * rn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Reknite: ${rn} (cost: ${(fee + (rc * rn) + (rc * rn * tax / 100)).toFixed(0)})<br>`;
} else if (rn > 0) {
    cost += rc * rn;
    console.log(`Reknite: ${rn} (cost: ${(rc * rn).toFixed(0)})`);
    out.innerHTML += `Reknite: ${rn} (cost: ${(rc * rn).toFixed(0)})<br>`;
} else {
    console.log(`Reknite: 0`);
    out.innerHTML += `Reknite: 0<br>`;
}
if (kn > 0 && ko) {
    cost += fee + (kc * kn) + (kc * kn * tax / 100);
    console.log(`Korrelite: ${kn} (cost: ${(fee + (kc * kn) + (kc * kn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Korrelite: ${kn} (cost: ${(fee + (kc * kn) + (kc * kn * tax / 100)).toFixed(0)})<br>`;
} else if (kn > 0) {
    cost += kc * kn;
    console.log(`Korrelite: ${kn} (cost: ${(kc * kn).toFixed(0)})`);
    out.innerHTML += `Korrelite: ${kn} (cost: ${(kc * kn).toFixed(0)})<br>`;
} else {
    console.log(`Korrelite: 0`);
    out.innerHTML += `Korrelite: 0<br>`;
}
if (gn > 0 && go) {
    cost += fee + (gc * gn) + (gc * gn * tax / 100);
    console.log(`Gellium: ${gn} (cost: ${(fee + (gc * gn) + (gc * gn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Gellium: ${gn} (cost: ${(fee + (gc * gn) + (gc * gn * tax / 100)).toFixed(0)})<br>`;
} else if (gn > 0) {
    cost += gc * gn;
    console.log(`Gellium: ${gn} (cost: ${(gc * gn).toFixed(0)})`);
    out.innerHTML += `Gellium: ${gn} (cost: ${(gc * gn).toFixed(0)})<br>`;
} else {
    console.log(`Gellium: 0`);
    out.innerHTML += `Gellium: 0<br>`;
}
if (an > 0 && ao) {
    cost += fee + (ac * an) + (ac * an * tax / 100);
    console.log(`Axnit: ${an} (cost: ${(fee + (ac * an) + (ac * an * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Axnit: ${an} (cost: ${(fee + (ac * an) + (ac * an * tax / 100)).toFixed(0)})<br>`;
} else if (an > 0) {
    cost += ac * an;
    console.log(`Axnit: ${an} (cost: ${(ac * an).toFixed(0)})`);
    out.innerHTML += `Axnit: ${an} (cost: ${(ac * an).toFixed(0)})<br>`;
} else {
    console.log(`Axnit: 0`);
    out.innerHTML += `Axnit: 0<br>`;
}
if (nn > 0 && no) {
    cost += fee + (nc * nn) + (nc * nn * tax / 100);
    console.log(`Narcor: ${nn} (cost: ${(fee + (nc * nn) + (nc * nn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Narcor: ${nn} (cost: ${(fee + (nc * nn) + (nc * nn * tax / 100)).toFixed(0)})<br>`;
} else if (nn > 0) {
    cost += nc * nn;
    console.log(`Narcor: ${nn} (cost: ${(nc * nn).toFixed(0)})`);
    out.innerHTML += `Narcor: ${nn} (cost: ${(nc * nn).toFixed(0)})<br>`;
} else {
    console.log(`Narcor: 0`);
    out.innerHTML += `Narcor: 0<br>`;
}
if (cn > 0 && co) {
    cost += fee + (cc * cn) + (cc * cn * tax / 100);
    console.log(`Red Narcor: ${cn} (cost: ${(fee + (cc * cn) + (cc * cn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Red Narcor: ${cn} (cost: ${(fee + (cc * cn) + (cc * cn * tax / 100)).toFixed(0)})<br>`;
} else if (cn > 0) {
    cost += cc * cn;
    console.log(`Red Narcor: ${cn} (cost: ${(cc * cn).toFixed(0)})`);
    out.innerHTML += `Red Narcor: ${cn} (cost: ${(cc * cn).toFixed(0)})<br>`;
} else {
    console.log(`Red Narcor: 0`);
    out.innerHTML += `Red Narcor: 0<br>`;
}
if (vn > 0 && vo) {
    cost += fee + (vc * vn) + (vc * vn * tax / 100);
    console.log(`Vexnium: ${vn} (cost: ${(fee + (vc * vn) + (vc * vn * tax / 100)).toFixed(0)})`);
    out.innerHTML += `Vexnium: ${vn} (cost: ${(fee + (vc * vn) + (vc * vn * tax / 100)).toFixed(0)})<br>`;
} else if (vn > 0) {
    cost += vc * vn;
    console.log(`Vexnium: ${vn} (cost: ${(vc * vn).toFixed(0)})`);
    out.innerHTML += `Vexnium: ${vn} (cost: ${(vc * vn).toFixed(0)})<br>`;
} else {
    console.log(`Vexnium: 0`);
    out.innerHTML += `Vexnium: 0<br>`;
}
console.log(`-- Total Cost: ${cost.toFixed(0)} --`);
out.innerHTML += `-- Total Cost: ${cost.toFixed(0)} --`;

}