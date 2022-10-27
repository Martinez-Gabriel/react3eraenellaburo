import React from 'react';

const Contacto = () => {
    return (
        <>
            <h1 className='containerProductos'>Nuestros Metodos de pago</h1>

            <div className='containerMetodoDePago'>
                <img className='imgPagosStyle' src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2Fvisa.webp?alt=media&token=e1b9a0e1-5723-4690-896f-ea7e87ee7a46" alt="imagen-visa" />
                <img className='imgPagosStyle'  src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2FMastercard.png?alt=media&token=4b6b98ab-4682-4e0e-bbaf-2690e87a952c" alt="imagen-mastercard" />
                <img className='imgPagosStyle'  src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2FMPO.jpg?alt=media&token=3d722ec3-4dfc-48b7-9ee6-b11544a294bb" alt="imagen-mercadopago" />
            </div>
        </>
    );
}

export default Contacto;
