import React, {useState} from 'react'

export default function Ejemplo() {
    // Hook useState() inicialización y acceso a los
    // valores del estado
    // const [<propiedad-del-estado>, <metodo-de-actualización>] = useState(<valor-inicial-de-esa-propiedad>)

    const [producto, setProducto] = useState({id: 1, nombre: 'Tuerca 22A', almacen: 'L12'});
    const [precio, setPrecio] = useState(120);

    const handleChangeProducto = () => {
        // setProducto({nombre: 'Tuerca 22AEspecial'}) Los métodos declarados con useState modifican totalmente la propiedad
        setProducto(prevProducto => {
            return {...prevProducto, nombre: 'Tuerca 22AEspecial'}
        })
        setPrecio(200);
    }

    return (
        <>
            <p>Nombre producto: {producto.nombre}</p>
            <p>Precio: {precio}</p>
            <button onClick={handleChangeProducto}>Cambiar</button>
        </>
    )
}

