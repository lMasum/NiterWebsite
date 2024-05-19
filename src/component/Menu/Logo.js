import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import niter_logo from "../front/image/niter.png";

function Logo() {
    return(
        <div className="">
                <img src={niter_logo} className="d-block mx-auto p-2" />
                <h1 className="disply-3 text-dark text-center NiterName">National Institute of Textile <br /> Engineering and Research - NITER</h1>
        </div>
        
    )
}
export default Logo;