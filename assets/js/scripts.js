

$(document).ready(function() {

    $('#formulario').submit(function(e) {

      e.preventDefault();

      var correo = $('#correo').val();

      if (correo === '' || !isValidEmail(correo)) {

        $('#correo').addClass('is-invalid').fadeOut(100).fadeIn(100);
        return;

      } else {
        $('#correo').removeClass('is-invalid');

      }
      
      var texto = $('#texto').val();
      
      if (texto === '') {

        $('#texto').addClass('is-invalid').fadeOut(100).fadeIn(100);

        return;

      } else {
        $('#texto').removeClass('is-invalid');

      }
      

      var rut = $('#rut').val();
      
      if (rut === '' || !isValidRUT(rut)) {

        $('#rut').addClass('is-invalid').fadeOut(100).fadeIn(100);

        return;

      } else {
        $('#rut').removeClass('is-invalid');

      }

      var checkbox = $('#checkbox').prop('checked');
      
      if (!checkbox) {

        $('#checkbox-error').fadeIn(100);

        return;

      } else {
        $('#checkbox-error').fadeOut(100);

      }
      
      $('#formulario')[0].submit();

    });
    

    function isValidEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return regex.test(email);

    }
    

    function isValidRUT(rut) {
      var regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;

      return regex.test(rut);
    }

    document.getElementById("formulario").addEventListener("submit", function(event) {

      event.preventDefault();
  });

  });