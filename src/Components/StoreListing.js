import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function StoreListing(){
    return(
        <div>
            <h2>Browse stores in San Diego</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Col sm="2" >
                        <Image
                            src="https://www.sprouts.com/wp-content/uploads/2023/04/sprouts-logo.svg"
                            height={40}
                            width={100}
                            alt="Sprouts" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.Sprouts.com/" style={{ fontWeight: "bold" }}>Sprouts</a>
                        <p>Delivery * Pickup</p>
                    </Col>  
                    <Col sm="2" >
                        <Image
                            src="https://www.ralphs.com/content/v2/binary/image/ralphs_svg_logo--freshcart_ralphs_color_logo--ralphs.svg"
                            height={40}
                            width={100}
                            alt="Raplhs" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.Ralphs.com/" style={{ fontWeight: "bold" }}>Ralphs</a>
                        <p>Delivery * Pickup</p>
                    </Col>  
                    <Col sm="2" >
                        <Image
                            src="https://images.albertsons-media.com/is/content/ABS/Vons_RGB-1"
                            height={40}
                            width={100}
                            alt="Vons" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.vons.com/" style={{ fontWeight: "bold" }}>Vons</a>
                        <p>Delivery * Pickup</p>
                    </Col>            
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Col sm="2" >
                        <Image
                            src="https://www.sprouts.com/wp-content/uploads/2023/04/sprouts-logo.svg"
                            height={40}
                            width={100}
                            alt="Sprouts" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.Sprouts.com/" style={{ fontWeight: "bold" }}>Sprouts</a>
                        <p>Delivery * Pickup</p>
                    </Col>  
                    <Col sm="2" >
                        <Image
                            src="https://www.ralphs.com/content/v2/binary/image/ralphs_svg_logo--freshcart_ralphs_color_logo--ralphs.svg"
                            height={40}
                            width={100}
                            alt="Raplhs" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.Ralphs.com/" style={{ fontWeight: "bold" }}>Ralphs</a>
                        <p>Delivery * Pickup</p>
                    </Col>  
                    <Col sm="2" >
                        <Image
                            src="https://images.albertsons-media.com/is/content/ABS/Vons_RGB-1"
                            height={40}
                            width={100}
                            alt="Vons" />
                    </Col>
                    <Col sm="2" >
                        <a href="https://www.vons.com/" style={{ fontWeight: "bold" }}>Vons</a>
                        <p>Delivery * Pickup</p>
                    </Col>            
                </Row>
            </Container>
    </div>
    );
}

export default StoreListing