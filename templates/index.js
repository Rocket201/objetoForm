/**
 * @author Alejandro Corroto
 * @github
 */

// Método 1: acceder a los formularios por si id

    const formulario = document.getElementById('contactar');

// Método 2: acceder a los formularios por si nombre

    const formularios = document.getElementsByName('form');
    const primerFormulario1 = formularios[0];
    const primerFormulario2 = formularios[1];

// Otra posibilidad interesante que te permite el método anterior, es la de buscar con  un elemento padre, 
//por ejemplo, si tienes un div con id "contenedor" y dentro de él tienes varios formularios, puedes hacer lo siguiente:

const menu = document.getElementById('menulateral');

const formulariosMenulateral = menu.getElementsByTagName('form');

const primerFormularioLateral = formularios[0];
const segundoFormularioLateral = formularios[1];