const traerHorario = () => {
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();
    return (`${hora}:${minutos}:${segundos}`)
}

const traerFecha = () => {
    const ahora = new Date();
    const opciones ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return ahora.toLocaleDateString('es-ES', opciones)
}

export default {traerHorario, traerFecha }