function enviarMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fernandogarciamurga123@gmail.com",
        Password : "E4B850D03C9E085DE8B142D7175AB2A5B286",
        To : 'rollingGamesComision1i@gmail.com',
        From : "fernandogarciamurga123@gmail.com",
        Subject : "Contacto Rolling Games",
        Body : "PROBLEMAS EN LA PAGINA",
    }).then(
      message => alert(message)
    );
}

