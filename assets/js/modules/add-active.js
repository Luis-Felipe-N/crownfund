function addClass( elementos ) {
    elementos.forEach(elemento => {
        elemento.classList.toggle('active')
    });
}

function addEvent( elem, event , ...rest ) {
    elem.addEventListener( event,  () => addClass( rest ))
}

export default addEvent