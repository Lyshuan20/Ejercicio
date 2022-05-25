/*------------------------ EXPRESIONES y VALIDACIONES ----------------------------- */
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

/*----------------------------- DATA --------------------------------- */
let data = [
    { id:1, img:'img/P1.jpg', nombre:'Matias Corral', telefono:3221524896, correo:'correoMatias@ejemplo.com', puesto:'Director general', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:2, img:'img/P2.jpg', nombre:'Maria Paz', telefono:3221524896, correo:'correoMaria@ejemplo.com', puesto:'Recursos humanos', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:3, img:'img/P3.jpg', nombre:'Roman Solis', telefono:3221524896, correo:'correoRoman@ejemplo.com', puesto:'Desarrollador web', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:4, img:'img/P4.jpg', nombre:'Africa Mejias', telefono:3221524896, correo:'correoAfrica@ejemplo.com', puesto:'Business Manager', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:5, img:'img/P5.jpg', nombre:'Rachida Ruiz', telefono:3221524896, correo:'correoRachida@ejemplo.com', puesto:'Gerente de ventas', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:6, img:'img/P6.jpg', nombre:'Aimar Barrios', telefono:3221524896, correo:'correoAimar@ejemplo.com', puesto:'Marketing digital', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:7, img:'img/P7.jpg', nombre:'Leyre Bermudez', telefono:3221524896, correo:'correoLeyre@ejemplo.com', puesto:'Desarrollador web', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { id:8, img:'img/P8.jpg', nombre:'Cipriano Alvaro', telefono:3221524896, correo:'correoCipriano@ejemplo.com', puesto:'Diseñador grafico', fecha_nac:'10/01/1980',Fecha_regis:'20/05/2019', responsabilidades:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' }
]
/*---Cards empleados-- */
let cards = " ";

data.forEach((item)=>{
    cards += `
    <!--Card----------------->
        <div class="card align-items-center text-center" style="width: 16rem;">
            <div class="card-body card-empleados" id="perfil">
                <img src="${item.img}" class="card-img-top img-empleado" onclick="modal(${item.id})" alt="...">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">${item.puesto}</p>
            </div>
            <!--Contacto card----->
            <div class="contacto">
                <!--email card----->
                    <div class="contacto-email">
                        <i class="bi bi-envelope"></i>
                        <span>Email</span>
                    </div>
                <!--call card----->
                    <div class="contacto-call">
                        <i class="bi bi-telephone-fill"></i>
                        <span>Call</span>
                    </div>
            </div>
        </div>
    <!--FINAL card---------------->`;
});

const pannel = document.getElementById("panel");
pannel.innerHTML = cards

const modalE = document.getElementById("modal-content");

function modal(id){
    data.forEach((item) =>{
        if(item.id==id){
            let modal_div = `
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${item.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex">
            <div><img class="modal-img" src="" alt=""></div>
          <div class="datos-empleados d-inline-block p-2">
            <label for="">Telefono: </label><span class="card-text"> ${item.telefono}</span>
            <hr>
            <label for="">Correo: </label><span class="card-text span-dato"> ${item.correo}</span>
            <hr>
            <label for="">Puesto: </label><span class="card-text span-puesto"> ${item.puesto}</span>
            <hr>
            <label for="">Fecha de nacimiento: </label><span class="card-text span-dato"> ${item.fecha_nac}</span>
            <hr>
            <label for="">Fecha de registro: </label><span class="card-text span-dato"> ${item.Fecha_regis}</span>
            <hr>
            <label for="">Responsabilidades: </label><span class="card-text span-dato"> ${item.responsabilidades}</span>
            <hr>
          </div>
          </div>`;
          modalE.innerHTML = modal_div;
        }
    })
}

document.addEventListener("click", function(e){
    if(e.target.classList.contains("img-empleado")){
        
        const myModal = new bootstrap.Modal(document.getElementById('Modal-empleados'));
        myModal.show();
    }
})






