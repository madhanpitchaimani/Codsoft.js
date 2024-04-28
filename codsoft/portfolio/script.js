function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "Madhan@gmail.com",
        Password : "EEA2CCB9F52343D0929357FD6143EAF6AE02",
        To : 'madhanp920822104046@nprcolleges.org',
        From : document.getElementById("email").value,
        Subject : "New contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}