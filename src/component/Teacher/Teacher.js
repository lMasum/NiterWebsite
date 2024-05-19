
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Col, Row, Card, Container} from 'react-bootstrap';

import Teacher_Image from './image/IMG_0811.jpg';
import Teacher_Detail from "./Teacher_Detail/Teacher_Detail";

function Teacher() {
    return(
        <>
            <h2 className="text-center pt-5 mt-5">Aditya Rajbongshi</h2>
            <h4 className="text-center">Lecturer, CSE</h4>
            <hr className="solid_faculti w-25 mx-auto d-block text-center pb-5 mb-5" />
            <Row className="pb-5 mb-5">
                <Col>
                    <img src={Teacher_Image} className="Teachers_image mx-auto d-block" />
                </Col>
                <Col>
                <Container>
                    <Teacher_Detail />
                </Container>
                </Col>
            </Row>
        </>
    )
}
export default Teacher;