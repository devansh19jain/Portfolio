import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import bannerimg from "../assets/images/banner-img2.png";

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Web-Developer", " Tech-Enthusiast", " Student"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(
        ()=>{
            let ticker = setInterval(()=>{
                tick();
            },delta);
            return () => {clearInterval(ticker)};
        },[text])
    
    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0,text.length -1) : fullText.substring(0,text.length + 1);

        setText(updatedText);
        if(isDeleting)
        {
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
        {/* <Particle/> */}
            <Container>

                {/* <Row className="align-item-center">
                    <Col xs ={12} md={6} xl={7} className="txt"> */}
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi! I'm Devansh`}
                        <br/>
                        <span className="wrap">A{text}</span></h1>
                        <p>My name is Devansh Jain. </p>
                        <p>With a robust Computer Science education, I adeptly apply theoretical knowledge to practical projects, fostering problem-solving skills. Quick to grasp new concepts, I stay updated on industry trends, showcasing responsibility, drive, and leadership prowess.</p>
                        
                    {/* </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src= {bannerimg} alt="Header Img"/>
                    </Col>
                </Row> */}
            </Container>

        </section>
    )
}