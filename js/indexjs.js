
if (document.getElementById('pregunta1')) {
    


let pergunta1 = document.getElementById('pregunta1');
let pergunta2 = document.getElementById('pregunta2');
let pergunta3 = document.getElementById('pregunta3');
let pergunta4 = document.getElementById('pregunta4');
let pergunta5 = document.getElementById('pregunta5');
let botonatrevete = document.getElementById('botonatrevete');






let respuesta1 = document.getElementById('respuesta1');
let respuesta2 = document.getElementById('respuesta2');
let respuesta3 = document.getElementById('respuesta3');
let respuesta4 = document.getElementById('respuesta4');
let respuesta5 = document.getElementById('respuesta5');

let atrevetedescripcion = document.getElementById('atrevetedescripcion');
let degradado = document.getElementById('degradado');
let infoMasterContenedor = document.getElementById('infoMasterContenedor');
let atrevetedescripcion2 = document.getElementById('atrevetedescripcion2');



let estadoBotonRespuesta1 = 0;
let estadoBotonRespuesta2 = 0;
let estadoBotonRespuesta3 = 0;
let estadoBotonRespuesta4 = 0;
let estadoBotonRespuesta5 = 0;
let estadoBotonAtrevete = 0;

botonatrevete.addEventListener('click', function(){botonatreveteF();});


function botonatreveteF(){
    if (estadoBotonAtrevete === 0) {
        gsap.to("#atrevetedescripcion", {
            display: 'block',
            bottom: '0' ,
            height: 'auto' ,
            duration: 0.5, 
        });
        
        atrevetedescripcion.style.display = 'block';
        atrevetedescripcion.style.height = 'auto';
        degradado.style.display = 'block';
        infoMasterContenedor.style.display = 'block';
        estadoBotonAtrevete = 1;
        atrevetedescripcion.style.zIndex = '0';
        gsap.to("#atrevetedescripcion", {
            opacity: '1',
        });
        
        let intViewportHeight = window.innerHeight;
        $('body, html').animate({
            scrollTop: intViewportHeight * 1.5
        }, 300);
        
        return 'oki';
    }else{

        
        degradado.style.display = 'none';
        infoMasterContenedor.style.display = 'none';
        estadoBotonAtrevete = 0;

        atrevetedescripcion.style.zIndex = '-1';
        gsap.to("#atrevetedescripcion", {
            bottom: '10vw' ,
            duration: 0.5, 
            opacity: '0',
            display: 'none',
        });


    }
}








pergunta1.addEventListener('click', function(){botonRespuesta1F();});

function botonRespuesta1F(){
    if (estadoBotonRespuesta1 === 0) {
        respuesta1.style.display = 'block';
        estadoBotonRespuesta1 = 1;
    }else{

        respuesta1.style.display = 'none';
        estadoBotonRespuesta1 = 0;
    }
    
}

pergunta2.addEventListener('click', function(){botonRespuesta2F();});

function botonRespuesta2F(){
    if (estadoBotonRespuesta2 === 0) {
        respuesta2.style.display = 'block';
        estadoBotonRespuesta2 = 1;
        return 'oki';
    }else{

        respuesta2.style.display = 'none';
        estadoBotonRespuesta2 = 0;
    }
    
}

pergunta3.addEventListener('click', function(){botonRespuesta3F();});

function botonRespuesta3F(){
    if (estadoBotonRespuesta3 === 0) {
        respuesta3.style.display = 'block';
        estadoBotonRespuesta3 = 1;
        return 'oki';
    }else{

        respuesta3.style.display = 'none';
        estadoBotonRespuesta3 = 0;
    }
    
}

pergunta4.addEventListener('click', function(){botonRespuesta4F();});

function botonRespuesta4F(){
    if (estadoBotonRespuesta4 === 0) {
        respuesta4.style.display = 'block';
        estadoBotonRespuesta4 = 1;
        return 'oki';
    }else{

        respuesta4.style.display = 'none';
        estadoBotonRespuesta4 = 0;
    }
    
}
pergunta5.addEventListener('click', function(){botonRespuesta5F();});

function botonRespuesta5F(){
    if (estadoBotonRespuesta5 === 0) {
        respuesta5.style.display = 'block';
        estadoBotonRespuesta5 = 1;
        return 'oki';
    }else{

        respuesta5.style.display = 'none';
        estadoBotonRespuesta5 = 0;
    }
    
}

}

const contenedorImagenGaleria = document.querySelector('.img_ver');
const contenedorImg = document.querySelector('.contenedor-img-galeria');
const imagenesGaleria = document.querySelectorAll('.imagenGaleria');


imagenesGaleria.forEach(image =>{
    image.addEventListener('click',()=>{
        
        addImage(image.getAttribute('src'));
         
    })
})

const addImage = (srcImage)=>{
    contenedorImg.classList.toggle('moreveImgGaleria');
    contenedorImagenGaleria.src = srcImage;
}

if (contenedorImg) {
    contenedorImg.addEventListener('click',()=>{
        contenedorImg.classList.toggle('moreveImgGaleria');
    
    
    })
}






// Maestros ssssssssssssssssssssssssssssssssssssssssssssssss

if(document.getElementById('elmapa')){

    let intViewportHeight = window.innerHeight;
    let intViewportWidth = window.innerWidth ;
    let heightmapa = intViewportHeight* 1.5;
    
    let elmapa = document.getElementById('elmapa');
    let academia = document.getElementsByClassName('academia');
    //peru
    let peruPunto = document.getElementById('peruPunto');
    
    peruPunto.addEventListener('mouseenter', function(){puntoFuncionVer('limaPeru');});
    peruPunto.addEventListener('mouseout', function(){puntoFuncionNone('limaPeru');});
    peruPunto.addEventListener('click', function(){puntoFuncionClick('PeruMaestros');});
    
    //venezuela
    let venezuelapunto = document.getElementById('venezuelapunto');
    venezuelapunto.addEventListener('mouseenter', function(){puntoFuncionVer('maracaiboVenezuela');});
    venezuelapunto.addEventListener('mouseout', function(){puntoFuncionNone('maracaiboVenezuela');});
    venezuelapunto.addEventListener('click', function(){puntoFuncionClick('venezuelaMaestros');});

    //colombia 
    

    let colombialapunto = document.getElementById('colombialapunto');
    colombialapunto.addEventListener('mouseenter', function(){puntoFuncionVer('colombia');});
    colombialapunto.addEventListener('mouseout', function(){puntoFuncionNone('colombia');});
    colombialapunto.addEventListener('click', function(){puntoFuncionClick('colombiaMaestros');});

    // costarica
    
    let costaricaapunto = document.getElementById('costaricaapunto');
    costaricaapunto.addEventListener('mouseenter', function(){puntoFuncionVer('costarica');});
    costaricaapunto.addEventListener('mouseout', function(){puntoFuncionNone('costarica');});
    costaricaapunto.addEventListener('click', function(){puntoFuncionClick('costaricaMaestros');});




    elmapa = elmapa.child;
  

    function puntoFuncionVer(valorpunto){
        if (intViewportWidth >= 768) {
            gsap.to('#' + valorpunto, {
                duration: 0.5, 
                opacity: '1',
            });
        }
    }

    function puntoFuncionNone(valorpunto){
        if (intViewportWidth >= 768) {
            gsap.to('#' + valorpunto, {
                duration: 0.5, 
                opacity: '0',
            });
        }
    }

    function puntoFuncionClick(valorpunto){
        iteradorAcademia = 0;


        for (let index = 0; index < 5; index++) {
            
            var auxiliarAcademia = academia[iteradorAcademia];
            auxiliarAcademia.style.width="30vw";
            auxiliarAcademia.style.order="0";
            iteradorAcademia = iteradorAcademia+1; 
            auxiliarAcademia.style.border = "solid var(--negro)";
        }
            
     
         
            let maestros = document.querySelectorAll(`.${valorpunto}`);
            
            
            maestros.forEach(maestro => {
                console.log(maestro)
                maestro.style.width = "80vw";
                maestro.style.order = "-1";
                maestro.style.border = "double red";
                if (intViewportWidth >= 768) {
                    $('body, html').animate({
                        scrollTop: heightmapa 
                    }, 300);
                }else{
                    $('body, html').animate({
                        scrollTop: intViewportWidth 
                    }, 300);
                }
                
            });
            
           

               
    }





}



//  bara de navegacion aquiiiiiiiiiii ............................

    let BarraNav = document.getElementById('BarraNav');
    let papel = false;
    if (document.getElementById('papel')) {
        papel = document.getElementById('papel');
       
    }
    

    $(window).scroll(function() {
      let windowwidth = $(window).width();
  
      var scroll = $(window).scrollTop();
      let intViewportHeight = window.innerHeight;
      intViewportHeight = intViewportHeight / 100;
      intViewportHeight = intViewportHeight* 20;
     
        if(windowwidth > 760){
            if(scroll > intViewportHeight){
                BarraNav.style.borderTop = " solid red ";
                BarraNav.style.position = "fixed";
                BarraNav.style.top = "0";
                papel.style.margin = "10vw 5% 5% 5%";
                if (papel ==! false) {
                    
                papel.style.margin = "8vw 5% 5% 5%";
                }
            } else {
                BarraNav.style.position = "relative";
                if (papel ==! false) {
                    
                papel.style.margin = "5% 5% 5% 5%";
                }
                BarraNav.style.borderTop = " none";
            }
        }else{
            
            BarraNav.style.position = "absolute";
           
          
        
        } 
      
    });





    //atrevete descripcion 

if (document.getElementById('atrevetedescripcion')) {
    $(window).scroll(function() {
    
        var scroll = $(window).scrollTop();
        let intViewportHeight = window.innerHeight;
        intViewportHeight = intViewportHeight / 100;
        intViewportHeight = intViewportHeight* 20;
       
       
  
          var desplegaratrevetedescripcion = intViewportHeight * 3;
          var popiBull = 0;
         
          if(scroll > desplegaratrevetedescripcion && popiBull == 0 ){
  
  
              if (estadoBotonAtrevete === 0) {
                  gsap.to("#atrevetedescripcion", {
                      display: 'block',
                      bottom: '0' ,
                      height: 'auto' ,
                      duration: 0.5, 
                  });
                  
                  
                  degradado.style.display = 'block';
                  infoMasterContenedor.style.display = 'block';
                  popiBull = 1;
                  estadoBotonAtrevete = 1;
                  atrevetedescripcion.style.zIndex = '0';
                  gsap.to("#atrevetedescripcion", {
                      opacity: '1',
                  });
              }
              
          } 
          if(scroll < intViewportHeight ){
  
          
              degradado.style.display = 'none';
              infoMasterContenedor.style.display = 'none';
              estadoBotonAtrevete = 0;
      
              atrevetedescripcion.style.zIndex = '-1';
              gsap.to("#atrevetedescripcion", {
                  bottom: '10vw' ,
                  duration: 0.5, 
                  opacity: '0',
                  display: 'none',
              });
      
      
          }
             
            
          
        
      });
}


    











