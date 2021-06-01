import React, {useState, useEffect} from 'react'

export default function Ejemplo2() {

    const [mensaje, setMensaje] = useState('Hola Mundo!');

    useEffect(() => {
        console.log('El componente se actualiza');
    })

    const handleChangeMessage = () => {
        const mensajes = ['Hola','¿Qué tal?','Buenas'];
        setMensaje(mensajes[Math.floor(Math.random() * mensajes.length)]);
    }

    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={handleChangeMessage}>Cambiar mensaje</button>
        </div>
    )
}
