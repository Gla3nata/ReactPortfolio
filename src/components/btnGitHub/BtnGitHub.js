import gitHubIcon from './gitHub-black.svg'
import './style.css'

const BtnGitHub = ({link}) => {
    return ( 
        <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
            <img src={gitHubIcon} alt="gitHubIcon" />
            GitHub repo
        </a>
     );
}
 
export default BtnGitHub;