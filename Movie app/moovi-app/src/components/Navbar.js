import "../App.css";
import { CartCenter } from "../managers/CartProvider";
const Navbar = () =>{
    const {cart} = CartCenter()

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid row">
            <a className="navbar-brand col-4" href="#">Moovi</a>
            <form className="form-inline my-2 my-lg-0 col-5 row">
                <input className="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0 col-3" type="submit">Search</button>
            </form>
            <div className="col-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                <span>{cart.amountItems}</span>
            </div>
        </nav>
        
    )
}

export default Navbar