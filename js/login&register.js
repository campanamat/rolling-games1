class User{
    constructor(id, name, email, password, admin){
      this.name = name;
      this.id = id;
      this.email = email;
      this.password = password;
      this.favs = [];
      this.cart = [];
      this.admin = admin;
    }
  }
  let users;  
  const usersFromLS = JSON.parse(localStorage.getItem('users'));  
  if(usersFromLS){
    users = usersFromLS
  }else{
    users = [
        new User(1, 'Matias Campana', 'matias_campana@outlook.com', 'designRS2022',true),
        new User(2, 'Angel Carrera', 'ancar121286@gmail.com', 'Urugame2022',true),
        new User(3, 'Fernando Garcia','fergarcia10@gmail.com','PROYECTrolling',true),
       new User(4, 'Pilar Juez Perez', 'pilijuez@gmail.com', 'Irlandagames2022',true),
      new User(5, 'Joel Tula','fergarcia10@gmail.com','Games4EVER',true)
    ];
    localStorage.setItem('users',JSON.stringify(users));
  }    
  const login = (event)=>{    
    event.preventDefault();    
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    //*Validaciones del login */
    let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
    if(emailOk && passOk){     
      let userFound = users.find(user=>user.email===email);      
    if(userFound && userFound.password === pass){        
        localStorage.setItem('favs',JSON.stringify(userFound.favs));
        localStorage.setItem('cart',JSON.stringify(userFound.cart));
        localStorage.setItem('user',JSON.stringify(userFound.id));
        window.location.assign(window.location.origin + '/home/homeprincipal.html') //!poner la direccion de correo a donde sera redirigido el usuario/adminstrador
    }else{
      errorAlert('Los datos ingresados no son correctos')
    }
  }else{
    errorAlert('Revise los datos ingresados')
  }
  }  
  function errorAlert (texto){
    let errorMessage = document.createElement('div');
    errorMessage.innerText = texto;
    errorMessage.classList.add('alert','alert-danger');
    let loginForm = document.getElementById('login-form');
    loginForm.appendChild(errorMessage);
    setTimeout(()=>{
      errorMessage.remove()
    },3000)
  }  
  //* Funciones para Registro  
  const register = (event) =>{
    event.preventDefault();
    let fullName = document.querySelector('#register-fullname').value;
    let email = document.querySelector('#register-email').value;    
    let pass= document.getElementById('register-pass').value;
    let pass2= document.getElementById('register-pass2').value;  
    let fullNameOk = /^([a-zA-Z]){4,35}$/.test(fullName); 
    let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);    
    let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass); 
    let pass2Ok= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2); 
    let equalPass = pass === pass2;  
    if(fullNameOk && emailOk  && pass2Ok && passOk && equalPass){
      let usersLS = JSON.parse(localStorage.getItem('users'));
      if(usersLS.find(user=>user.email==email)){
        console.log('Se ha evitado un inicio de sesión sospechoso');
      }else{
        usersLS.push(new User(usersLS.length+1,fullName,email,pass,false));
        localStorage.setItem('user',JSON.stringify(usersLS.length+1));
        window.location.assign(window.location.origin + '/home/homeprincipal.html')//!direccion a donde sera redirigido el usuario una vez registrado
      }
       localStorage.setItem('users',JSON.stringify(usersLS))
    }else{
      console.log('Revise la informacion proporcionada');
    }
  
  } 
  