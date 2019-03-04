
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cw = canvas.width = window.innerWidth;
var ch = canvas.height = window.innerHeight;
var centerX = cw/2;
var centerY = ch/2;

var minCells = 50;
var cellLength = cw < ch ? cw / minCells : ch / minCells;
ctx.fillStyle = "#e6e6e6";
ctx.lineWidth = 5;
var horiz = 0;
while (horiz < ch) {
  ctx.beginPath();
  ctx.moveTo(0, horiz);
  ctx.lineTo(cw, horiz);
  ctx.closePath();
  ctx.stroke();
  horiz += cellLength;
}

// function drawWave(startHeight, numWaves, color){
//       ctx.fillStyle = color;
//         ctx.strokeStyle = "rgba(0, 95, 240, 0.1)";
//           ctx.shadowBlur=20;
//             ctx.shadowColor = "rgba(0, 95, 240, 0.6)";
//               ctx.shadowOffsetY = -50;
//                 ctx.shadowOffsetX = -30;
//                   ctx.lineWidth = 4;
//                     ctx.beginPath();

//                       var midY = 0;
//                         var botY = startHeight;
//                           var radius = cw/numWaves;
//                             var xPos = radius /2;
//                               var degreesAway = 50;

//                                 ctx.moveTo(0, ch);
//                                   while (xPos < (cw + radius)){

//                                           ctx.arc(xPos, (midY+botY/2), radius,  getRadians(180-degreesAway), getRadians(degreesAway), true);
//                                               xPos += 2*Math.cos(getRadians(degreesAway))*radius;
//                                                 }
//                                     ctx.lineTo(cw, ch);
//                                       ctx.stroke();
//                                         ctx.fill();
//                                           ctx.closePath();

// }

// function randomIntFromInterval(mn, mx) {
//      return randomIntFromUniformDistribution(mn,mx);
// }

// function randomIntFromUniformDistribution(mn, mx){
//       return ~~(Math.random() * (mx - mn + 1) + mn);
// }

// function randomIntFromIntervalPowerLawDistribution(minimum, maxmimum) {
//       return Math.floor(Math.exp(Math.random()*Math.log(maxmimum-minimum+1)))+minimum;
// }

// function getRadians(degrees){
//       return (Math.PI/180)*degrees;
// }

// function drawXWaves(numWaves){
//   for (var i = 0; i < numWaves ; i++){
//     // drawWave((ch / numWaves) * i, randomIntFromInterval(2,50), getRandomBlueColorStringWithAlpha());
//     drawWave((ch / numWaves) * i, randomIntFromInterval(2,50), getRandomBlueColorStringWithKnownAlpha(1-(i / numWaves)));
//   }
// }
// drawXWaves(100);
// setInterval(function() {
//   drawXWaves(100);
// }, 3000);


// function getRandomBlueColorStringWithAlpha(){
//   return 'rgba(' + 0 + ',' + randomIntFromInterval(0,60) +',' + randomIntFromInterval(100,255) + ',' + randomIntFromInterval(2,8)*10 + ')';
// }

// function getRandomBlueColorStringWithKnownAlpha(alpha){
//   return 'rgba(' + 0 + ',' + randomIntFromInterval(30,60) +',' + randomIntFromInterval(150,230) + ',' + alpha + ')';
// }