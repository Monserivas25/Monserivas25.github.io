const formulario = document.getElementById ('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('https://sheet.best/api/sheets/88e66dd1-9ad9-4c4f-8e7e-9540e5a9daa7');{

   method: 'POST' ,
   mode: 'cors' ,
   headers: {
    'Content-Type': 'application/json'
   },

     body: JSON.stringify ({
	"Nombre": formulario.nombre.value,
        "Correo": formulario.correo.value
      })



  });

});
