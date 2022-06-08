const titulo = document.querySelector('#titulo');
titulo.textContent = 'Titulo usando textContent';
//cambiar h1 por un párrafo
const segundoTitulo = document.querySelector('#segundoTitulo');
segundoTitulo.innerHTML = '<p>Esto era originalmente un titulo, pero ahora es un parrafo</p>';
const parrafo = document.createElement('p');
parrafo.textContent = 'Ut irure pariatur et fugiat amet enim et. Occaecat minim consectetur esse quis ut officia laborum ut quis pariatur aliqua esse sunt. Sunt deserunt dolor pariatur exercitation occaecat cupidatat consectetur laborum ut pariatur consequat est nulla. Enim aliquip adipisicing incididunt do non officia voluptate irure ullamco laborum. Proident incididunt culpa velit ullamco.';
document.body.appendChild(parrafo);


const cuadrado = document.querySelector('#seccionStyle').classList.add('square');

const figura = document.querySelector(".square");

//El método llama a una función a intervalos especificados (en milisegundos).setInterval()
setInterval(
    function() {
        figura.classList.toggle('square');
    }, 1000);