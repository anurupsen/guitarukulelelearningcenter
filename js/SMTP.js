const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Feedback: ${message.value}`;

  Email.send({
    SecureToken : "45ce8037-6fe8-4bf7-8e3d-ab78990d83b6",
    To : 'guitarukulelelearningcenter@gmail.com',
    From : 'guitarukulelelearningcenter@gmail.com',
    Subject : "Feedback Test",
    Body : bodyMessage
  }).then(
    message => {
       if (message == "OK") {
            Swal.fire({
                title: "Thank You",
                text: "Your feedback send successfully!",
                icon: "success"
            });      
        }
     }

  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

});
