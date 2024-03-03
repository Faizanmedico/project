
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
}