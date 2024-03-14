import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { projects } from "../helpers/projectsList";
import { useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    console.log(project);

    return (  
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                  
                    <img src={project.imgBig} alt="{project.title}-img" className="project-details__cover" />
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.githubLink && (
                        <BtnGitHub link="https://github.com/Gla3nata" />
                    )}

                    
                </div>
            </div> 
        </main> 
    );
}
 
export default Project;