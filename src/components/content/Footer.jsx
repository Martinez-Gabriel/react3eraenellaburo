import {memo} from 'react';

const Footer = () => {
    return (
        <>
          <ul className="nav d-flex justify-content-center footerAcomodate">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Instagram</a>
            </li>
            <li className="nav-item">
              <h6>Gracias por confiar en nosotros!</h6>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Gmail</a>
            </li>
          </ul>  
        </>
    );
}

export default memo(Footer);
