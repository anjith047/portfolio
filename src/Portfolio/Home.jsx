import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css';
import axios from 'axios';
import proj1 from './img/ecog.png';
import proj2 from './img/infogather.png';
import proj3 from './img/COming soon.png';
import profilepic from './img/profile1.png'
import { useMediaQuery } from '@mui/material';
import { AiFillAlert } from "react-icons/ai";
import { FaKey,  FaBomb , FaDatabase} from 'react-icons/fa';
import { AiOutlineWarning } from 'react-icons/ai';
import { MdAutorenew ,MdSecurity } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { AiOutlineSolution } from 'react-icons/ai';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const botToken = '7316793067:AAGIvqne0jTHv-jWXOluDWc_-4Rz1oN71aQ';
  const chatId = '2032562417';

  const Sendm = () => {
    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${name}\nEmail: ${email}\n\nFeedback: ${message}`,
      })
      .then((response) => {
        setSubmitted(true);
        setLoading(false);
        console.log('Message sent successfully');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error sending message:', error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitted) {
      alert('You have already submitted your feedback');
      return;
    }
    setLoading(true);
    Sendm();
  };

  return (
    <div>
      <header>
        <div className="container" style={isMobile? {marginLeft:'-10px' }:{}}>
          {!isMobile&&<div className="logo">AKJ</div>}
          <nav>
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div>
          <div className="container">
            <h1>Cyber Security</h1>
            <p>Securing the digital world, one byte at a time</p>
            <a href="#about" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container ">
        
        
       
          <h2>About <span className='h3col'>Me</span></h2>
          <br></br>
           <h1><img className='profilepic' src={profilepic} alt='not found'/>Hi There I'm &nbsp;<span className='h3col'>Anjith K J</span>  </h1>
          <br></br>
          
          <p className='para'>Dedicated pentester with focus on identifying and mitigating security vulnerabilities.
            I excel in safeguarding systems and networks against potential threats using advanced tools and techniques for vulnerability assessment,
            and exploiting security weaknesses to enhance organization defenses. My commitment to continuous learning and staying updated with the latest industry trends.</p>
        </div>
        
         
      
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>My <span className='h3col'>Services</span></h2>
          <div className="services-grid">
            <div className="service" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3>Vulnerability Assessment (VA)</h3>
              <p>  identifying and mitigating security weaknesses in systems and networks</p>
            </div>
            <div className="service" style={isMobile?{flexBasis:'100%'}:{}}>
              <i className="fas fa-lock"></i>
              <h3>Penetration Testing</h3>
              <p> identify and exploit vulnerabilities in systems and networks</p>
            </div>
            <div className="service" style={isMobile?{flexBasis:'100%'}:{}}>
              <i className="fas fa-network-wired"></i>
              <h3>Network Security</h3>
              <p>Ensuring secure and resilient network infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>My <span className='h3col'>Skills</span></h2>
          <div className="skills-grid">
            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <AiFillAlert  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Incident response</span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}>   quickly responding when security incidents do occur is critical to minimize damage.</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <MdSecurity  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Network security</span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}>  Detect and monitor unauthorized access or misuse of a network</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <MdAutorenew  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Adaptability </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}> Adapt quickly to changing environments and challenges</p>
            </div>
           
            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <AiOutlineWarning  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Risk analysis </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}> Evaluate and assess potential risks to identify and mitigate threats</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <FaBomb style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Penetration Testing </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}> Simulate attacks to identify and exploit system vulnerabilities</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <FaKey  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'>  Access Management (IAM) </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}> Control and monitor user access to resources and systems</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <FaDatabase  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Data Management  </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}>Organize and maintain data effectively to ensure its accuracy and availability</p>
            </div>

            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <MdComputer  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Computer network & system administration </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}> Manage and maintain network infrastructure and system operations to ensure reliability and performance</p>
            </div>

            
            <div className="skills" style={isMobile?{flexBasis:'100%'}:{}}>
              <h3> <AiOutlineSolution  style={{ color: 'white', fontSize: '24px' }}/> &nbsp;<span className='h3col'> Problem solving </span></h3>
              <p style={{ color: 'grey', fontSize: '14px' }}>Identify and resolve issues effectively</p>
            </div>

          </div>
        </div>
      </section>  



      <section id="projects" className="section">
        <div className="container" style={isMobile?{marginLeft:'20px'}:{}}>
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project">
              <a href='https://github.com/htijna/Ecogfront'>
              <img className="projectbg" src={proj1} alt="Project 1" /></a>
              <h3 className='h3col'>ECO-G</h3>
              <p className='ptext'> Farmer-Consumer Marketplace</p>
            </div>
            <div className="project">
              <a href='https://github.com/htijna/Infogather'>
              <img className='projectbg' src={proj2} alt="Project 2"  /></a>
              <h3 className='h3col'>INFOGATHER</h3>
              <p className='ptext'>OSINT Analysis and Reporting Tool</p>
            </div>
            <div className="project">
              <img className='projectbg' src={proj3} alt="Project 3" />
              <h3 className='h3col'>Project 3</h3>
              <p className='ptext'>Description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact <span className='h3col'>Me</span></h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              className="textfield"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />&nbsp;
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              className="textfield"
              value={email}
              onChange={handleEmailChange}
              error={!isEmailValid}
            />&nbsp;
            <TextField
              id="outlined-message"
              label="Message"
              variant="outlined"
              className="textfield"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />&nbsp;
            <Button type="submit" variant="contained" color={submitted ? "success" : "primary"}>
              {loading ? <CircularProgress size={24} /> : (submitted ? 'Submited' : 'Send')}
            </Button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Cybersecurity Portfolio</p>
        </div>
      </footer>

      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default Home;
