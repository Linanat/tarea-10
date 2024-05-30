

const miVentanaEmergente = document.getElementById('ventanaEmergente')


miVentanaEmergente.addEventListener('show.bs.modal', function(event){
  console.log('se esta abriendo el modal');

  let boton = event.relatedTarget 

  let mensaje = boton.getAttribute('data-titulo')
  let contenido = boton.getAttribute('data-contenido')
  
  
  document.getElementById('tituloModal').innerText = mensaje
  document.querySelector('.modal-body').innerHTML = contenido
})