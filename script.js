function limpiarCampo() {
            document.getElementById("telefono").value = "";
        }

        function cargarDatos() {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var correo = document.getElementById("correo").value;
            var telefono = document.getElementById("telefono").value;
            var edad = document.getElementById("edad").value;
            var direccion = document.getElementById("direccion").value;
            var provincia = document.getElementById("provincia").value;
            var codigopostal = document.getElementById("codigopostal").value;
            var metodo = document.querySelector('input[name="metodo"]:checked').value;
            var subscripciones = [];
            document.querySelectorAll('input[name="subscripcion"]:checked').forEach((checkbox) => {
                subscripciones.push(checkbox.value);
            });
            
            document.getElementById("valorNombre").innerText = nombre;
            document.getElementById("valorApellido").innerText = apellido;
            document.getElementById("valorCorreo").innerText = correo;
            document.getElementById("valorTelefono").innerText = telefono;
            document.getElementById("valorEdad").innerText = edad;
            document.getElementById("valorDireccion").innerText = direccion;
            document.getElementById("valorProvincia").innerText = provincia;
            document.getElementById("valorCodigoPostal").innerText = codigopostal;
            document.getElementById("valorMetodoContacto").innerText = metodo;
            document.getElementById("valorTipoSub").innerText = subscripciones.join(", ");

        }

        function validarFormulario() {
                const formulario = document.getElementById("formulario");

                if (formulario.checkValidity()) {
                    alert("Formulario válido");
                } else {
                    formulario.reportValidity();
                }
            }
            
        function limpiarTodo(){
            document.getElementById("formulario").reset();
            document.getElementById("valorNombre").innerText = "";
            document.getElementById("valorApellido").innerText = "";
            document.getElementById("valorCorreo").innerText = "";
            document.getElementById("valorTelefono").innerText = "";
            document.getElementById("valorEdad").innerText = "";
            document.getElementById("valorDireccion").innerText = "";
            document.getElementById("valorProvincia").innerText = "";
            document.getElementById("valorCodigoPostal").innerText = "";
            document.getElementById("valorMetodoContacto").innerText = "";
            document.getElementById("valorTipoSub").innerText = "";
        }