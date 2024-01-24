//POST poner datos 
// script.js


function buscarProductos() {
    var apiUrl = 'http://127.0.0.1:8000/api/maquillaje';
    var filtroId = $('#buscarId').val(); // Obtener el valor ingresado en el cuadro de búsqueda

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#tabla-datos tbody').empty();

            $.each(data, function(index, item) {
                // Aplicar filtro por ID
                if (filtroId === '' || item.id == filtroId) {
                    var row = '<tr>' +
                                '<td>' + item.id + '</td>' +
                                '<td>' + item.nombre + '</td>' +
                                '<td>' + item.descripcion + '</td>' +
                                '<td>' + item.cantidad + '</td>' +
                                '<td>' + item.precio + '</td>' +
                                '<td>' + item.marca + '</td>' +
                                '<td>' +
                                    '<button class="editar-btn" data-id="' + item.id + '">Editar</button>' +
                                    '<button class="eliminar-btn" data-id="' + item.id + '">Eliminar</button>' +
                                '</td>' +
                              '</tr>';
                    $('#tabla-datos tbody').append(row);
                }
            });
        },
        error: function(error) {
            console.log('Error al obtener productos:', error);
        }
    });
}


function agregar() {
    // Extraer la información
    const objeto = {
        name: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        coments: document.getElementById("subject").value,
        email: document.getElementById("lcorreo").value
    };

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: objeto,
        dataType: "json",
        success: function (objetoRespuesta) {
            alert("Respuesta guardada");
            console.log(objetoRespuesta);

            // Obtén la tabla
            const table = document.querySelector(".table tbody");

            // Agregar una nueva fila con los datos
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${objetoRespuesta.id}</td>
                <td>${objetoRespuesta.name}</td>
                <td>${objetoRespuesta.lastname}</td>
                <td>${objetoRespuesta.coments}</td>
                <td>${objetoRespuesta.email}</td>
            `;

            // Agregar la fila a la tabla
            table.appendChild(newRow);

            // Limpiar los campos de entrada después de agregar
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("lcorreo").value = "";
        },
        error: function (res) {
            alert("Error");
        }
    });
}


 // script.js
// script.js
function obtenerDatos() {
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        dataType: "json",
        success: function (datos) {
            alert("Datos obtenidos exitosamente");
            console.log(datos);

            const dataTable = document.getElementById("dataTable");

            // Crea una tabla con estilos personalizados
            const table = document.createElement("table");
            table.classList.add("table");
            table.style.backgroundColor = "#FBA2F0"; // Fondo de la tabla (verde claro)
            table.style.border = "2px solid #4caf50"; // Borde de la tabla (verde)
            table.style.borderCollapse = "collapse"; // Colapsar los bordes de las celdas
            table.style.width = "100%"; // Ancho de la tabla

            // Crea una fila de encabezado con estilos personalizados
            const headerRow = document.createElement("tr");
            for (const key in datos.data[0]) {
                const th = document.createElement("th");
                th.textContent = key;
                th.style.backgroundColor = "#E7F1C9"; // Fondo del encabezado (verde)
                th.style.color = "Bold black "; // Color del texto en el encabezado
                th.style.textAlign = "center"; // Alineación del texto
                headerRow.appendChild(th);
            }
            table.appendChild(headerRow);

            // Llena la tabla con datos y aplica estilos a las celdas
            datos.data.forEach(function (item, index) {
                const dataRow = document.createElement("tr");
                for (const key in item) {
                    const td = document.createElement("td");
                    td.textContent = item[key];
                    td.style.textAlign = "center"; // Alineación del texto en las celdas

                    // Alterna colores de fondo entre verde y blanco para las filas
                    td.style.backgroundColor = index % 2 === 0 ? "#FFEEEE" : "white";

                    dataRow.appendChild(td);
                }
                table.appendChild(dataRow);
            });

            // Agrega estilos de resaltado a las filas al pasar el mouse
            const rows = table.querySelectorAll("tr");
            for (let i = 1; i < rows.length; i++) {
                rows[i].addEventListener("mouseover", function () {
                    this.style.backgroundColor = "#a0d19a"; // Color de resaltado al pasar el mouse (verde claro)
                });
                rows[i].addEventListener("mouseout", function () {
                    // Restaura el color original de la fila
                    this.style.backgroundColor = i % 2 === 0 ? "#eaf7e3" : "white";
                });
            }

            // Agrega la tabla al contenedor dataTable
            dataTable.appendChild(table);
        },
        error: function (res) {
            alert("Error al obtener datos");
        }
    });
}




function actualizarDatos() {
    const userID = parseInt(document.getElementById("userID").value);
    const newName = document.getElementById("newName").value;
    const newLastname = document.getElementById("newLastname").value;
    const newComents = document.getElementById("newComents").value;
    const newEmail = document.getElementById("newEmail").value;

    const objetoActualizado = {
        name: newName,
        lastname: newLastname,
        coments: newComents,
        email: newEmail
    };

    // Realiza la solicitud PUT al servidor para actualizar los datos
    $.ajax({
        url: "https://reqres.in/api/users/" + userID,
        type: "PUT",
        data: objetoActualizado,
        dataType: "json",
        success: function (datosActualizados) {
            alert("Datos actualizados exitosamente");
            console.log(datosActualizados);

            // Actualiza la tabla
            const table = document.querySelector("#dataTable");
            const rows = table.querySelectorAll("tr");

            // Busca la fila correspondiente al usuario y actualiza las celdas
            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].querySelectorAll("td");
                if (parseInt(cells[0].textContent) === userID) {
                    cells[1].textContent = newName;
                    cells[2].textContent = newLastname;
                    cells[3].textContent = newComents;
                    cells[4].textContent = newEmail;
                }
            }

              // Limpiar los campos de entrada después de agregar
              document.getElementById("userID").value = "";
              document.getElementById("newName").value = "";
              document.getElementById("newLastname").value = "";
              document.getElementById("newComents").value = "";
              document.getElementById("newEmail").value = "";
        },
        error: function (res) {
            alert("Error al actualizar datos");
        }
    });
}


//BORRARR


function eliminarDato() {
    // Obtén el ID ingresado por el usuario
    const id = document.getElementById("deleteID").value;

    // Realiza una solicitud DELETE para eliminar el usuario por ID
    $.ajax({
        url: `https://reqres.in/api/users/${id}`,
        type: "DELETE",
        success: function (respuesta) {
            console.log(`Usuario con ID ${id} ha sido eliminado exitosamente.`);
            
            // Después de eliminar, realiza una solicitud GET para obtener los usuarios actualizados
            obtenernuevos();
        },
        error: function (res) {
            console.error(`Error al eliminar usuario con ID ${id}`);
        }
    });
}

function obtenernuevos() {
    // Realiza una solicitud GET para obtener los usuarios actualizados
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        dataType: "json",
        success: function (datos) {
            console.log("Datos Borrados exitosamente");
            console.log(datos);
        },
        error: function (res) {
            console.error("Error al obtener datos");
        }
    });
}


// qr-generator.js
// qr-generator.js

// qr-generator.js

function generarCodigoQR() {
    const platform = document.getElementById("platform").value;
    const username = document.getElementById("username").value;

    // URL de la API de generación de códigos QR
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${platform}:${username}`;

    // Muestra el código QR en la página
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = `<img src="${apiUrl}" alt="Código QR de Redes Sociales">`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateQRButton").addEventListener("click", generarCodigoQR);
});






  
