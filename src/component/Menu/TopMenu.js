import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import TopNav from "./TopNav";
import Logo from "./Logo";

import {Col } from 'react-bootstrap';

function TopMenu() {
    return(
        <>
            <Col lg={5} className="mx-auto d-block">
                <Logo />
                <TopNav />
            </Col>
        </>
        
    )
}
export default TopMenu;