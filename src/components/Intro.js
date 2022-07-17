import { Button, Col, Container, Row } from "react-bootstrap"

const Intro = () =>{
    return (
        <div className="intro">
            <Container className="text-white d-flex text-center justify-content-center align-items-center">
                <Row>
                    <Col>
                    <div className="title">NONTON <span className="text-warning">GRATIS</span></div>
                    <div className="title">GAK PAKE KARCIS</div>
                    <div className="mt-4 introButton">
                    <Button variant="dark">Lihat Semua List</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro