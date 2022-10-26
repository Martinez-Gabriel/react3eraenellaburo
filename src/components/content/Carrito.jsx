import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../components/context/CarritoContext';
import { mostrarCarrito } from '../../utils/funcionesUtiles';
import Swal from 'sweetalert2';


const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            <div className="card cardProducto containerProductos" key={producto.id}>
                    <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Cantidad: {producto.cantidad}</p>
                            <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
    useEffect(() => {
        mostrarAlerta();
    }, []);

    const mostrarAlerta = () => {
        Swal.fire('Mensaje Simple');
    }

   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} <button>Terminar Compra</button></div> : <> <h1 className='containerProductos'>Carrito Vacio</h1></>
          
    return app
}

export default Carrito;
