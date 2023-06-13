(function () {
    const forms = document.querySelectorAll('.needs-validation');
  
    for (let form of forms) {
      form.addEventListener(
        'button',
        function (event) {
          {
            event.preventDefault();
            event.stopPropagation();
          } 
            form.classList.add('was-validated');
          }
      );
    }
  })();