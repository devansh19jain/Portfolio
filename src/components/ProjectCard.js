import { Col } from "react-bootstrap";

export const ProjectCard = ({title,description,imgUrl,link}) => {
    return (
        
            <Col sm={6} md= {4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="related visual" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="tit">{description}</span>
                    <div className="project-tooltip">
                        <a href={link}>Project Link</a>
                    </div>
                </div>
            </div>
            
            </Col>
        
    )
}