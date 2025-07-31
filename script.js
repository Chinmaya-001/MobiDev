function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value, 
        message: document.getElementById("message").value,
    };

    emailjs.send("service_f7p72gg", "template_mob0h8b", parms)
        .then(alert("Thank you !!<xoxo>")); // Handle success or error here
}
function sendResponse() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

    emailjs.send("service_f7p72gg", "template_i2hnl12", parms)
        .then(alert("Thank you !!<xoxo>")); // Handle success or error here
}
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
    sendResponse();
});