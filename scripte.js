const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function closeMenu() {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Send email messages
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_4gpvvkh"; // Replace with your EmailJS Service ID
  const templateID = "template_46qvjmh"; // Replace with your EmailJS Template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Reset the form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      console.log("Email sent successfully:", res);
      alert("Your message has been sent successfully!");
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      alert("Failed to send the message. Please try again later.");
    });
}
