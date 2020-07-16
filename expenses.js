

let grosi  = [1500, 750, 50, 
  1100, 2000, 300,
    40, 64, 180];
  
let steffi = [1450,135, 342, 
  80, 540, 160];
  
let tanja  = [960, 250, 210, 
  120, 1950, 1090,
    622];


let grositot = 0;
let steffitot = 0;
let tanjatot = 0;

for (var i = 0; i < grosi.length; i++) {
  grositot += grosi[i];
}

let grosiavg = grositot/grosi.length;

console.log("Grosi Ausgaben in Kuna: " + grositot);

for (var i = 0; i < steffi.length; i++) {
  steffitot += steffi[i];
}

let steffiavg = steffitot/steffi.length;
console.log("Steffi Ausgaben in Kuna: " + steffitot);


for (var i = 0; i < tanja.length; i++) {
  tanjatot += tanja[i];
}

let tanjaavg = tanjatot/tanja.length;
console.log("Tanja Ausgaben in Kuna: " + tanjatot);

grositot = Math.round(grositot * 0.14);
steffitot = Math.round(steffitot * 0.14);
tanjatot = Math.round(tanjatot * 0.14);

let tot = grositot + steffitot + tanjatot;

console.log("Gesamt in Franken: " + tot);
console.log("Gesamt in Kuna: " + Math.round(tot/0.14));

let avg = tot/3;
avg = Math.round(avg);
console.log("");
console.log("Durchschnitt in Franken = " + avg);


let get =0;
let givex =0;
let givey =0;

if (grositot > steffitot && grositot > tanjatot){
  get = grositot - avg;
  console.log("Grosi bekommt " + get + " Franken");
  givex = avg - steffitot;
  givey = avg - tanjatot;
  console.log(givex + " von Steffi, und von Tanja "+ givey);
}
else
if (steffitot > grositot && steffitot > tanjatot){
  get = steffitot -avg;
  console.log("Steffi bekommt " + get + " Franken");
  givex = avg - grositot;
  givey = avg - tanjatot;
  console.log(givex + " von Grosi, und von Tanja "+ givey);
}
else{get = tanjatot - avg;
  console.log("Tanja bekommnt " + get + " Franken");
  givex = avg - steffitot;
  givey = avg - grositot;
  console.log(givex + " von Steffi, und von Grosi "+ givey);
}

