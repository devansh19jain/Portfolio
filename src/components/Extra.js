import { ListGroup, Container,Col ,Row } from "react-bootstrap";

export const Extra = () =>{
    return (
        <section className="extra" id="extra">
            <Container>
                <Row>
                    <Col>
                        <div className="extra-list">
                            <h2>Extra-Curricular</h2>
                            <p>"Beyond the code, explore my engagement in extra-curricular activities. From leadership roles to community involvement, witness my holistic approach to personal and professional development."</p>
                                <ListGroup className="list">
                                    <ListGroup.Item>Finance Convener at The LNMIIT Techno-Management Fest Plinth' 24</ListGroup.Item>
                                    <ListGroup.Item>Associate Coordinator at The Counselling and Guidanace Cell, LNMIIT</ListGroup.Item>
                                    <ListGroup.Item>Member at The LNMIIT Alumni Association</ListGroup.Item> 
                                </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}