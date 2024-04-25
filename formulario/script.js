function mostrarContenido(opcion) {
  if (opcion === 1) {
      document.getElementById('contenido1').style.display = 'block';
      document.getElementById('contenido2').style.display = 'none';
  } else {
      document.getElementById('contenido1').style.display = 'none';
      document.getElementById('contenido2').style.display = 'block';
  }
}
