import { div } from "three/examples/jsm/nodes/Nodes";
import '../styles/About.css'

const Education = () => {

    const highschool = {name : "Cambridge School of Weston", degree: "NA", address : "45 Georgian Rd, Weston, MA 02493"} ;
    const undergraduate = {name : "Syracuse University", degree: "BS in Applied Mathematics, Minor in Computer Science", address : "900 S Crouse Ave, Syracuse, NY 13244"} ;
    const graduate = {name : "Wentworth Institute of Technology", degree: "MS in Applied Computer Science", address : "550 Huntington Ave, Boston, MA 02115"};

    return (
        <div className="about about-education">
            <h1>
                Education
            </h1>

            <div className="education-graduate">

                <h3 className="graduate">
                    {graduate.name}
                    <h5>
                        {graduate.degree}
                    </h5>
                </h3>

                <p>
                    Studied Applied Computer Science at Wentworth Institute of Technology. Presented my master's thesis on Adversarial
                    Machine Learning in June 2024.
                </p>
            </div>

            <div className="education-undergraduate">
                <h3 className="undergraduate">
                    {undergraduate.name} 
                    <h5> 
                        {undergraduate.degree}
                    </h5>
                </h3>

                <p>
                    Studied Applied Mathematics and Computer Science at Syracuse University. Graduated December 2019.
                </p>
            </div>

            <div className="education-highschool">
                <h3 className="highschool">
                    {highschool.name}
                </h3>

                <p>
                    Completed my highschool education at the Cambridge School of Weston in 2016.
                </p>
            </div>
        </div>
    )
}

export default Education