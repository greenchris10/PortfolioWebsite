import selfie from "./assets/selfie.png";
import "./styles/ContactBar.css";

const ContactBar = () => {
    return (
        <div className="contact-bar">
            <div className="contact-box">
                <div>
                    <img className="selfie" src={selfie} alt="profile picture" />
                    <h1 className="profile-title">Christian Green</h1>
                    <h4 className="profile-desc">Machine Learning & Software Developer Enthusiast</h4>
                    <h5 className="profile-location">Boston, MA</h5>
                </div>
                <div className="contact-links">
                    <a className="contact-item email" href="mailto:cbg654@gmail.com">Email</a> |
                    <a className="contact-item linkedin" href="https://www.linkedin.com/in/christian-green-a10443170">LinkedIn</a> |
                    <a className="contact-item youtube" href="https://www.youtube.com/@bernard_life">YouTube</a> |
                    <a className="contact-item github" href="https://www.github.com/greenchris10">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ContactBar;