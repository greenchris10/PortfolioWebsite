import { div } from "three/examples/jsm/nodes/Nodes";
import "../styles/About.css"

const Experience = () => {
    const Wentworth = {org: "Wentworth Institute of Technology", title: "Resarch Assistant", years: "August 2023 - Present", location: "Boston, MA"};
    const BCBS = {org: "Blue Cross Blue Shield of Massachusetts", title1: "Actuarial Analyst", years1: "August 2020 - July 2022", title2: "Actuarial Intern", years2: "June 2020 - August 2020", location: "Boston, MA"};

    return (
        

        <div className="about about-experience">
            
            <h1>
                Experience
            </h1>

            <div className="wentworth-RA">
                <h3>
                    {Wentworth.org}
                    <h5>
                        {Wentworth.title} | {Wentworth.location}
                    </h5>
                </h3>

                <h6>
                    {Wentworth.years}
                </h6>

                <p>
                    Currently developing universal adversarial attack which generates single noise pattern 
                    applicable to a robust amount of view points. I've used Blender to create pipelines to 
                    capture multiple view points of 3D rendered objects. I am also evaluating the universal attack by
                    comparing its performance against other popular adversarial methods.
                </p>
            </div>

            <div className="bcbs-analyst">
                <h3>
                    {BCBS.org}
                    <h5>
                        {BCBS.title1} | {BCBS.location}
                    </h5>
                </h3>

                <h6>
                    {BCBS.years1}
                </h6>
                <p>
                    I was responsible for developing retentions portion of health insurance premium that gets charged to BCBSMA members 
                    each quarter. A lot of my time was spent consulting with the Department of Insurance (DOI) to determine acceptable 
                    year-over-year rate increases for BCBSMA premiums. I also managed large quantities of membership data stored in 
                    Cognos TM1 database by working with the engineering team to log defects and develop improvements to the TM1 production environment.

                </p>
            </div>

            <div className="bcbs-intern">
                <h3>
                    {BCBS.org}
                    <h5>
                        {BCBS.title2} | {BCBS.location}
                    </h5>
                </h3>

                <h6>
                    {BCBS.years2}
                </h6>
                <p>
                    I spent my summer internship analyzing ICD-10 diagnosis codes that fell under various chronic conditions. I was tasked with researching 
                    each chronic condition to determine which diagnosis codes should be included or withheld from the condition. I also identified the Episode Treatment Group (ETG) 
                    that corresponds with the chronic condition by using SQL to retrieve information from both the ETG and my diagnosis list. At the end of the internship I 
                    presented my findings to the entire actuarial department.

                </p>
            </div>

        </div>
    )
}

export default Experience