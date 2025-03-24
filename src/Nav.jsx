import { Link, useLocation } from "react-router-dom";
import aboutIcon from "./assets/icons8-about-50.png";
import blogIcon from "./assets/icons8-contact-50.png";
import homeIcon from "./assets/icons8-home-50.png";
import projectIcon from "./assets/icons8-project-50.png";
import './styles/Nav.css';

const Nav = () => {

    const location = useLocation();

    const getNavPosition = () => {
        switch (location.pathname) {
            case "/":
                return "nav-home";
            case "/projects":
                return "nav-projects";
            case "/about":
                return "nav-about";
            case "/blog":
                return "nav-blog";
            default:
                return ""
        }
    };

    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "HOME";
            case "/projects":
                return "PROJECTS";
            case "/about":
                return "ABOUT";
            case "/blog":
                return "BLOG";
            default:
                return ""
        }
    };

    const title = getTitle();
    const navPosition = getNavPosition();

    const isCurrentPage = (navClass) => {
        return navClass == navPosition
    };

    const renderLink = (navClass, to, imgSrc, altText) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current": "nav-link";

        return (
            <Link to = {to} className={linkClass} >
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 className="page-title"> {title}</h1>}
            </Link>
        )
    }

    return(
      <nav className={`nav ${navPosition}`}>
        {renderLink("nav-home", "/", homeIcon, "home icon")}
        {renderLink("nav-projects", "/projects", projectIcon, "projects icon")}
        {renderLink("nav-about", "/about", aboutIcon, "about icon")}
        {renderLink("nav-blog", "/blog", blogIcon, "blog icon")}
      </nav>
    )
  }
  
  export default Nav;