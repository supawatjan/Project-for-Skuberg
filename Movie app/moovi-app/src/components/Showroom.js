import { MoviesCenter } from "../managers/MoviesProvider"
import { CartCenter } from "../managers/CartProvider";

const Showroom = () =>{
    const {searchMovie, BASE_IMG_URL} = MoviesCenter()
    const {addToCart} = CartCenter()
    
    return(

        <div className="container">
            <div className="row hidden-md-up">
                {
                    searchMovie.map((movie, index) =>{
                        return (
                            <div className="col-md-4" style={{width: "15rem",margin:"20px"}}key={index}>    
                                <div className="card" style={{width: "12rem",margin:"5px"}} >
                                    <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p>฿{movie.price}</p>
                                        {/* <p className="card-text">{movie.overview}</p> */}
                                        <button className="btn btn-primary"
                                         onClick={()=>addToCart(movie)}
                                        >BUY</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
        
    )
}
export default Showroom