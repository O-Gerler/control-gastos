
export const generarId = () => {
    return Math.random().toString(36).substring(2)
             .concat(Date.now().toString(36))
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleString('es-Es', opciones)
}