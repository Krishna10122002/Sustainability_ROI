function calculateROI(){

let investment =
Number(document.getElementById("investment").value);

let savings =
Number(document.getElementById("savings").value);

let incentives =
Number(document.getElementById("incentives").value);

let maintenance =
Number(document.getElementById("maintenance").value);

let life =
Number(document.getElementById("life").value);

let carbon =
Number(document.getElementById("carbon").value);

let water =
Number(document.getElementById("water").value);

let waste =
Number(document.getElementById("waste").value);

if(
investment<=0 ||
life<=0
){

alert("Please enter valid values.");

return;

}

let totalSavings =
(savings*life)+incentives;

let totalMaintenance =
maintenance*life;

let netProfit =
totalSavings-totalMaintenance-investment;

let roi =
(netProfit/investment)*100;

let payback =
investment/(savings-maintenance);

let score=0;

score+=Math.min(carbon,40);

score+=Math.min(water/2000,30);

score+=Math.min(waste/50,30);

let rating="";

if(score>=85)
rating="⭐⭐⭐⭐⭐ Excellent";

else if(score>=70)
rating="⭐⭐⭐⭐ Very Good";

else if(score>=55)
rating="⭐⭐⭐ Good";

else if(score>=40)
rating="⭐⭐ Average";

else
rating="⭐ Needs Improvement";

document.getElementById("roi").innerHTML=
roi.toFixed(2)+" %";

document.getElementById("profit").innerHTML=
"₹ "+netProfit.toLocaleString();

document.getElementById("payback").innerHTML=
payback.toFixed(2)+" Years";

document.getElementById("score").innerHTML=
score.toFixed(0)+" /100";

document.getElementById("rating").innerHTML=
rating;

}