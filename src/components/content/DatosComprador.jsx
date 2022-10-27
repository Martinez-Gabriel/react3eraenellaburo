import React from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'

const DatosComprador = () => {
    const datosFormulario = React.useRef()

    const datosCompradorForm = (e) => {
        e.preventDefault()
        
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        e.target.reset()
    }

    const mostrarAlertaFinalizarCompra = () => {
        Swal.fire(
            'Gracias por su compra!',
            'En 48hs le estaremos enviando la factura de compra!',
            'success'
          )
    }

    return (

       

        <>
        <div className="container containerProductos">
            <form onSubmit={datosCompradorForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="direccion" className="form-control" name="direccion"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="numero" className="form-label">Numero de contacto</label>
                    <input type="numero" className="form-control" name="numero"  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={mostrarAlertaFinalizarCompra}><Link className='nav-link' to={`/`}>Finalizar Compra</Link></button>
            </form>
        </div>
        

        </>
    );
}

export default DatosComprador;