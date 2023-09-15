const url = 'https://jsonplaceholder.typicode.com/users'; // toma la url del json para agregar los datos

const formulario = document.getElementById('miFormulario'); //obtiene el formulario por su id

formulario.addEventListener("submit", function(event){ 
    event.preventDefault();
    alert("abre la consola desde inspeccionar: sortcut: f12")
    /* se le añade un envento a el formulario y event.preventDefault() para que al enviar los datos no se recargue la pagina automaticamente */ 
    
    // obtiene los datos de las inputs

    const Nombre = document.getElementById('nombre').value;
    const Apellido = document.getElementById('apellido').value;
    const FechaNacimiento = document.getElementById('fecha').value;

    //coloca los datos de los inputs en un variable y crea un objeto con ellos.
    const data = {
        nombre: Nombre,
        apellido: Apellido,
        fechaNacimiento: FechaNacimiento
    };


    // Configura las opciones para la solicitud de envío al servidor

    const requestOptions = {
        method: 'POST', // Utiliza el método HTTP POST para enviar datos al servidor
        headers: {
            'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
        },
        body:JSON.stringify(data) // Convierte el objeto de datos en una cadena JSON y lo coloca en el cuerpo de la solicitud
    };

    fetch(url, requestOptions)
    .then(response => {   // Verifica si la respuesta del servidor indica un error
        if (!response.ok) {
            throw new Error('La solicitud no se completó correctamente.');
        
        }
        return response.json(); // Convierte la respuesta del servidor en un objeto JSON
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);  // Maneja la respuesta del servidor, en este caso, la muestra en la consola del navegador
       
    })
    .catch(error => {   // Maneja los errores que puedan ocurrir durante la solicitud
        console.error('Error:', error);
    });
});

