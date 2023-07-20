//window load popup
window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector("#default").style.display = "block";
  }, 5000);
});
// close popup
document.querySelector("#closeBtn").addEventListener("click", close);
function close() {
  document.querySelector("#default").style.display = "none";
}

// buttons
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");
let btn5 = document.querySelector("#button5");
let btn6 = document.querySelector("#button6");
let btn7 = document.querySelector("#button7");

btn1.addEventListener("click", popup);
btn2.addEventListener("click", popup);
btn3.addEventListener("click", popup);
btn4.addEventListener("click", popup2);
btn5.addEventListener("click", popup2);
btn6.addEventListener("click", popup2);

function popup() {
  document.querySelector("#default").style.display = "block";
  document.querySelector("#finalBtn").style.display = "block";
}
function popup2() {
  document.querySelector("#default").style.display = "block";
}

// get data to google-sheet
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  document.querySelector("#sub").value = "Submiting..";

  let data = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbx1W-IhTPojwMR53m-d9FHOBegNpS0BS5oLedg66c73pcjMn401eIx-OU0O9aavmnLG/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#msg").innerHTML = data;

      document.querySelector("#sub").value = "Submit";
    });
});
