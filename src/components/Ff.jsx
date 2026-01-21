import React from 'react';
import { Link } from 'react-router-dom';
import "./Ff.scss";

const Ff = () => {
  return (
    <div id='footer'>
      <Link to="/github" className="icon">
        <img src={`${import.meta.env.BASE_URL}GitHub-Icon-White-Dark-Background-Logo.wine.svg`} alt="Github" />
      </Link>

      <Link to="/note" className="icon">
        <img src={`${import.meta.env.BASE_URL}493153.webp`} alt="Note" />
      </Link>

      <Link to="/pdf" className="icon">
        <img className='pdf' src={`${import.meta.env.BASE_URL}pdf.png`} alt="PDF" />
      </Link>

      <a href="https://calendar.google.com/calendar/u/0/r?pli=1" target="_blank" className="icon">
        <img src={`${import.meta.env.BASE_URL}calendar.png`} alt="Calendar" />
      </a>

      <Link to="/spotify" className="icon">
        <img src={`${import.meta.env.BASE_URL}spotify.png`} alt="Spotify" />
      </Link>

      <a href="https://www.linkedin.com/in/sarthak-agrawal-830b33283/" target="_blank" className="icon">
        <img src={`${import.meta.env.BASE_URL}link.png`} alt="LinkedIn" />
      </a>

      <a href="mailto:sarthakagrawal213@gmail.com" className="icon">
        <img className='mail' src={`${import.meta.env.BASE_URL}gmail.png`} alt="Mail" />
      </a>

      <Link to="/cli" className="icon">
        <img className='cli' src={`${import.meta.env.BASE_URL}command-line.png`} alt="CLI" />
      </Link>
    </div>
  );
};

export default Ff;
