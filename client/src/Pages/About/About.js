import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <>
        <div className="about-section container  mt-4">
            <div className="about-section--heading">
            <h1>About Our Project</h1>
            <hr />
            </div>

            <div className="about-section--features">
                <div className="about-section--features-heading">
                    <h3>Salient Features</h3>
                </div>
                <ul>
                    <li><strong>CRUD React Application</strong> for all round management of Issues.</li>
                    <li><strong>Customization of Fields</strong> - You can control the display of Issues with less as details or more. Your choice </li>
                    <li><strong>Search Filter</strong> - Search out the Description of the Issues you want.So Time Saved is Time earned.</li>
                    <li><strong>Full Responsive App</strong> - Responsive Application with support for Desktop,Tablet and Phones. </li>
                    <li><strong>Top Viewed Issues</strong> - You can view all the Top Viewed Issues in the Application through the Bar Charts</li>
                </ul>
            </div>

            <div className="about-section--description">
                <div className="about-section--description-heading">
                    <h3>Description</h3>
                </div>
                <div className="about-section--description-para">
                    <p>The Issue Tracker is an app associated for tracking as well as managing the Issues in our Information Technology field.
                       We in our workaround, in our venture do get some of Bugs,Defects and Issues that we need to share with our teams so that 
                       our team will acknowledge those entities and work on them. Its kind of being in sync with the Team on the associated
                       project issues.
                    </p>
                    <p>
                        So Our Issue Tracker will come to rescue! This revolutionary app will take care of the issues you face in your daily 
                        corporate life, so your priorities will be clear down to each step. 
                    </p>
                    <p>
                        This Application will allow you to Add, Update and Delete the Issues as you go along with your Venture.Also,you can Customize
                        the details you need in the Home Section, So all the control over to you. The Issues can also be Searched across the description 
                        so your search will be less time consuming. You can view all the Top Viewed Issues in the Application through the Bar Charts
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;