import React from 'react';
import teamcalAiAward from '../images/TeamcalAiAward.jpg'

function Content(props) {
   switch(props.navActiveItem){
       case "About":
           return(
            <React.Fragment>
            <div className="content">
            <h1 className="mb-4">Who am I?</h1>
            <p>
                I am a college student studying Computer Science. I am currently looking for a Software Engineering Internship.<br/><br/>

I am proficient in several programming and layout languages including C++, Python, Javascript, PHP, HTML, and CSS. I am also able to learn new ones if necessary. I have a good understanding of Data Structures and Algorithms and am able to apply it within a program.

<br/><br/> Additionally, I also have IT skills which I have acquired through the Google IT Support Certification, helping maintain a family-owned internet cafe, and my job as an IT Project Lead.

<br/><br/> I am an analytical thinker who always wants to develop a solution for each problem that I face. I am able to work efficiently on my own but I love the idea of working with a team even more. I think the culmination of different minds leads to the most creative and wonderful ideas.

<br/><br/> Currently, I am aspiring to be a Full-Stack Web Developer. I spend my time doing side projects and learning libraries and frameworks like React and Django that are commonly used within the industry.
            </p>
            </div>
            </React.Fragment>
           );
        case "Technologies":
            return(
                <div className="content ls-left">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-4">
                                <h6><i class="fas fa-laptop-code"></i> Programming Languages: </h6>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <div>• C#</div>
                                        <div>• C++</div>
                                        <div>• Javascript</div>
                                    </div>
                                    <div>
                                        <div>• PHP</div>
                                        <div>• Python</div>
                                        <div>• HTML</div>
                                    </div>
                                    <div>
                                        <div>• CSS</div>
                                        <div>• SQL</div>
                                        <div>• Racket</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <h6><i class="fas fa-cogs"></i> Libraries and Frameworks: </h6>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <div>• React</div>
                                        <div>• JQuery</div>
                                        <div>• Bootstrap</div>
                                    </div>
                                    <div>
                                        <div>• CodeIgniter</div>
                                        <div>• Apache</div>
                                        <div>• MySQL</div>
                                    </div>
                                    <div>
                                        <div>• Django</div>
                                        <div>• Arduino</div>
                                        <div>• Unity</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <h6><i class="fas fa-tools"></i> Tools: </h6>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <div>• Linux</div>
                                        <div>• Git</div>
                                        <div>• Jira</div>
                                    </div>
                                    <div>
                                        <div>• Powershell</div>
                                        <div>• Bash</div>
                                        <div>• Procreate</div>
                                    </div>
                                    <div>
                                        <div>• Adobe XD</div>
                                        <div>• Adobe Photoshop</div>
                                        <div>• Invision Freehand</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "Experience":
            return(
                <div className="content ls-left">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="d-flex justify-content-between border-bottom border-light">
                                    <div className="d-flex flex-column">
                                        <span><i class="fas fa-briefcase"></i> XR/VR Research</span>
                                        <span><i class="fas fa-user"></i> Tech Lead </span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span><i class="far fa-calendar-alt"></i> Aug 2021 - Present</span>
                                        <span><i class="fas fa-map-marker-alt"></i> CSU - East Bay</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <p className="mt-4">
                                    • Developed Virtual Reality Applications with Unity and Unreal Engine<br/><br/>
                                    • Tested features and boundaries of HTC Vive VR headset and studied ways to improve it<br/><br/>
                                    • Communicated with Project Manager and the rest of the team to track research progress<br/><br/>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="d-flex justify-content-between border-bottom border-light">
                                    <div className="d-flex flex-column">
                                        <span><i class="fas fa-briefcase"></i> Teamcal Ai</span>
                                        <span><i class="fas fa-user"></i> Software Engineer Intern </span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span><i class="far fa-calendar-alt"></i> May 2021 - Aug 2021</span>
                                        <span><i class="fas fa-map-marker-alt"></i> Mountain View, CA</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <p className="mt-4">
                                    • Rearchitected company website into a user-friendly CMS which enabled users to dynamically change website content<br/><br/>
                                    • Integrated a blog/newsletter into the company website which improved SEO quality<br/><br/>
                                    • Developed a core product feature that automated meeting scheduling for managers and CEOs of large companies<br/><br/>
                                    • Tested and improved existing web application features to ensure continuity of operation<br/><br/>
                                    • Practiced AGILE methodologies to brainstorm, design, and develop new product features.<br/><br/>

                                    </p>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="d-flex justify-content-between border-bottom border-light">
                                    <div className="d-flex flex-column">
                                        <span><i class="fas fa-briefcase"></i> Dev/Mission</span>
                                        <span><i class="fas fa-user"></i> Pre-Apprenticeship Intern </span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span><i class="far fa-calendar-alt"></i> Feb 2021 - May 2021</span>
                                        <span><i class="fas fa-map-marker-alt"></i> San Francisco, CA</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <p className="mt-4">
                                    • Demonstrated knowledge of IT Fundamentals(Hardware, Software, OS)	<br/><br/>
                                    • Enhanced and applied programming skills by creating web applications ( HTML, CSS, JavaScript, jQuery, Bootstrap)<br/><br/>
                                    • Programmed and constructed IoT(Internet of Things) devices (C++, Arduino, TinkerCAD)<br/><br/>
                                    • Collaborated with other pre-apprentices to launch successful projects<br/><br/>
                                    </p>
                                </div>
                            </div><div className="col-12 mt-4">
                                <div className="d-flex justify-content-between border-bottom border-light">
                                    <div className="d-flex flex-column">
                                        <span><i class="fas fa-briefcase"></i> Teamcal Ai</span>
                                        <span><i class="fas fa-user"></i> Software Engineer Intern </span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span><i class="far fa-calendar-alt"></i> May 2021 - Aug 2021</span>
                                        <span><i class="fas fa-map-marker-alt"></i> Mountain View, CA</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <p className="mt-4">
                                    • Rearchitected company website into a user-friendly CMS which enabled users to dynamically change website content<br/><br/>
                                    • Integrated a blog/newsletter into the company website which improved SEO quality<br/><br/>
                                    • Developed a core product feature that automated meeting scheduling for managers and CEOs of large companies<br/><br/>
                                    • Tested and improved existing web application features to ensure continuity of operation<br/><br/>
                                    • Practiced AGILE methodologies to brainstorm, design, and develop new product features.<br/><br/>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "Projects":
            return(
                <div className="content ls-left">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="d-flex flex-column border-bottom border-light">
                                    <span><i class="fas fa-car-side"></i> Carple </span>
                                    <span><i class="fas fa-globe"></i> Carpooling Website </span>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <p className="mt-4">
                                    • Developed an interactive website with  Javascript, HTML, CSS, and Bootstrap framework	<br/><br/>
                                    • Processed and communicated data with Airtable REST API<br/><br/>
                                    • Implemented user authentication(login and signup) with local and session storage.<br/><br/>
                                    • Designed a visually appealing and user friendly website<br/><br/>
                                    </p>
                                    <iframe className="mb-4 ytb-vid" width="560" height="315" src="https://www.youtube.com/embed/kyMWYbSnaN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="d-flex flex-column border-bottom border-light">
                                    <span><i class="fas fa-wallet"></i> NextPlay</span>
                                    <span><i class="fas fa-search-dollar"></i> Reddit Stock Scanner </span>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <p className="mt-4">
                                    • Programmed a Discord stock bot with Python<br/><br/>
                                    • Scanned Stock Tickers from subreddit inputted by user<br/><br/>
                                    • Used by members of the Discord Server<br/><br/>
                                    • Displayed a graph of the stock trend and a statistical table of price movement<br/><br/>
                                    </p>
                                    <iframe className="mb-4 ytb-vid" width="560" height="315" src="https://www.youtube.com/embed/po-j5Hj8Ujo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="d-flex flex-column border-bottom border-light">
                                    <span><i class="far fa-lightbulb"></i> Dancing Lights</span>
                                    <span><i class="fas fa-music"></i> Music Reactive Neopixels </span>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <p className="mt-4">
                                    • Constructed an Arduino circuit to receive sound input<br/><br/>
                                    • Processed and cleaned input data to programmatically display it as an LED light show <br/><br/>
                                    </p>
                                    <iframe className="mb-4 ytb-vid" width="560" height="315" src="https://www.youtube.com/embed/EE8u1CRbSgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="d-flex flex-column border-bottom border-light">
                                    <span><i class="fas fa-laptop-code"></i> Codeswitch Hackathon </span>
                                    <span><i class="far fa-handshake"></i> Bridges </span>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <p className="mt-4">
                                    • Collaborated and brainstormed ideas in a team of three<br/><br/>
                                    • Designed and programmed a web app that connected low-income students to non-profit organizations.<br/><br/>
                                    • Enabled students from under-represented communities to connect with mentors and other out-of-reach resources <br/><br/>
                                    </p>
                                    <iframe className="mb-4 ytb-vid" width="560" height="315" src="https://www.youtube.com/embed/GTLTcXZRZ5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "Extra":
            return(
                <div className="content">
                    <div className="container-fluid">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className="mb-4">Teamcal Ai Award for being an outstanding Software Engineer Intern</h2>
                            <img className="small-img" src={teamcalAiAward} alt="Teamcal Ai Award"/>
                        </div>
                    </div>
                </div>
            );
        default:
            return(
                <div className="content">
                    <h1 className="text-danger">Something went wrong :O</h1>
                </div>
            );
        
   }
}

export default Content;