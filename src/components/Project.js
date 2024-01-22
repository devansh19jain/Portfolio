import { Container, Row, Tab ,Col, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import av from "../assets/images/av.png";
import cb from "../assets/images/crazy_bus.png";
import vt from "../assets/images/vital_track.png";
import ids from "../assets/images/ids.png";
// import dl from "../assets/images/dl.png";
import port from '../assets/images/portfolio.png'
import hack_proj from "../assets/images/hack_proj.png";

export const Project = () => {
    const projects1 = [
        {
            title:"Crazy Bus",
            description: "Crazy Bus is a full-stack project, redefines the LNMIIT travel experience. Tailored for students, it streamlines bus selection, seat reservation, and secure payments. It has user-centric design, emphasizing how Crazy Bus enhances convenience for LNMIIT students. From the intuitive interface to robust functionality, the project showcases a seamless and reliable bus booking platform, addressing the unique needs of the LNMIIT community.",
            imgUrl: cb,
            link: "https://craziest-bus.netlify.app/"
        },
        {
            title:"Cyber Guard",
            description: "Developed Google Chrome extension for real-time phishing detection using HTML/CSS, JavaScript, and manifest JSON v3. Created React-based web app with Express and Node.js for SMS spam and phishing link detection. Implemented JavaScript script for Random Forest method in backend for machine learning-based security.",
            imgUrl: hack_proj,
            link: "https://github.com/devansh19jain/RP_Hacks"
        },
        {
            title:"PortFolio Website",
            description: "Personal Website",
            imgUrl: port,
            link: "https://659566ab4a0bf7006ab98a8e--startling-marzipan-b7e9c1.netlify.app/"
        }
    ];
    const projects2 = [
        {
            title:"Vital-Track",
            description: "This project is a prototype for monitoring different body vital and environmental conditions. The system uses a variety of sensors, including a temperature sensor, an environmental sensor, and a network connection. The data collected from these sensors is then displayed on a web dashboard and uploaded to a cloud platform for further data analysis and real-time monitoring.",
            imgUrl: vt,
            link: "https://github.com/devansh19jain/Vital-Track"
        },
        {
            title:"Student Academic Dropout and Sucess",
            description: "This data science project explores student academic outcomes through exploratory data analysis. We dived into a comprehensive dataset to uncover patterns, identify key factors influencing success and dropout, and develop insights to guide interventions and support student achievement.",
            imgUrl: ids
        }
    ];
    // const projects3 = [
    //     {
    //         title:"Student Academic Dropout and Sucess",
    //         description: "This data science project explores student academic outcomes through exploratory data analysis. We dived into a comprehensive dataset to uncover patterns, identify key factors influencing success and dropout, and develop insights to guide interventions and support student achievement.",
    //         imgUrl: ids
    //     }
    //     // {
    //     //     title:"Street Sign Recognition ",
    //     //     description: "In this project we developed a deep learning model for recognizing street signs using the GTSRB dataset. We employed a Convolutional Neural Network (CNN) architecture to achieve high accuracy in classifying diverse traffic signs. The model achieved outstanding performance, reaching 99.69% accuracy on the validation set and 97.68% on the test set.",
    //     //     imgUrl: dl
    //     // }
    // ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>"Explore my diverse portfolio of projects, each a testament to my passion for problem-solving and creativity. From web development to software engineering, discover the impact of my work."</p>
                    {/* <p className="link-dir">Github Link in Navbar and Footer</p> */}
                    <Tab.Container id="projetcs-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Dev</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">ML / IoT</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="third">ML</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects1.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>       
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <Row>
                                {
                                projects2.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="third">
                        <Row>
                                {
                                projects3.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane> */}
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}