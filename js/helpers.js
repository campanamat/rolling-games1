export function navMenu (){
    let newNav = document.createElement('nav');
    newNav.innerHTML=`
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg ">
     <a class="navbar-brand me-5 mb-lg-0" href="/html/index.html"> <img src="../assets/Images/Logo.png" width="120px" > </a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-5 mb-lg-0">
            <li class="nav-item"> <a class="nav-link" href="/html/index.html"> <img src="../assets/Images/Inicio.png" height="40px" > </a> </li>
            <li class="nav-item"> <a class="nav-link" href="/html/Contacto.html"> <img src="../assets/Images/Contacto.png" height="40px" > </a> </li>
            <li class="nav-item"> <a class="nav-link" href="/html/Acerca de.html"> <img src="../assets/Images/acerca de.png" height="40px" > </a> </li>
            <li class="nav-item nav-buttons"> <a class="nav-link" href="/html/index.html">Cerrar Sesion</li>
          </ul>
        </div>
      </div>
    </nav>
`
document.querySelector('header').appendChild(newNav)
  }

  export function footerMenu() {
    let footerMenu = document.createElement('footer');
    footerMenu.innerHTML=`<div class="container-fluid text-white bg-dark py-4">
    <div class="row">
        <div class="col-12 col-sm-4 col-lg-4">
            <div class="text-center ms-auto logo me-auto"><a href="../html/index.html"></a></div>              
        </div> 
        <div class="col-12 col-sm-4 col-lg-4 text-center  ms-auto me-auto">
             2022 RollingGames SRL.&#169
     </div>
    <div class="col-12 col-sm-4 col-lg-4 ms-auto">                
        
          <ul class="social-icons">
        <li>
            <a href="https://www.whatsapp.com/"style="color: lawngreen"><i class="fab fa-whatsapp"></i></a> </li>            
        <li><a href="https://www.instagram.com/"style="color: deeppink;"><i class="fab fa-instagram"></i></a></li>       
        <li><a href="https://twitter.com/"style="color: deepskyblue;"><i class="fab fa-twitter"></i></a></li>        
        <li><a href="https://www.facebook.com/"style="color: #0F90F3;"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="https://www.youtube.com/"style="color: #FF0000;"><i class="fab fa-youtube"></i></a></li>      
    </ul>
 
      </div>
    </div>
  </div>
    `
    document.querySelector('footer').appendChild(footerMenu)
  }
  