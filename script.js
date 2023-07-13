window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector("#default").style.display = "block";
  }, 5000);
});

document.querySelector("#closeBtn").addEventListener("click", function () {
  document.querySelector("#default").style.display = "none";
});

function sendEmail() {
  //   let nameId = document.querySelector("#name").value;
  //   let email = document.querySelector("#email").value;
  //   let mobileNumber = document.querySelector("#mobileNo").value;
  //   let budget = document.querySelector("#budget").value;
  //   let category = document.querySelector("#category").value;
  //   let description = document.querySelector("#description").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "diptesh151097@gmail.com",
    Password: "Mahadev@123",
    To: "deepteshchaudhari@gmail.com",
    From: "onlybabaadam@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));

  //   document.writeln(nameId);
  //   document.writeln(email);
  //   document.writeln(mobileNumber);
  //   document.writeln(budget);
  //   document.writeln(category);
  //   document.writeln(description);
}
