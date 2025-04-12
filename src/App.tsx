import React, { useState } from 'react';
import RSVPForm from './components/RSVPForm';
import ConfirmationMessage from './components/ConfirmationMessage';
import { Link, Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import './App.scss';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVPSubmit = (formData: any) => {

    emailjs
    .send(
      'your_service_id', // Replace with your EmailJS service ID
      'your_template_id', // Replace with your EmailJS template ID
      formData,
      'your_public_key' // Replace with your EmailJS public key
  )
    .then(
        (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Thank you for your RSVP!');
            setIsSubmitted(true);
        },
        (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send RSVP. Please try again.');
        }
    );

  };

  if (isSubmitted) {
    return <ConfirmationMessage />;
  }

  return (
    <div className="app">
                  {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="reception" smooth={true} duration={500}>
                    Reception
                </Link>
            </li>
            <li>
                <Link to="church" smooth={true} duration={500}>
                    Church
                </Link>
            </li>
            <li>
                <Link to="attire" smooth={true} duration={500}>
                    Attire
                </Link>
            </li>
            <li>
                <Link to="rsvp" smooth={true} duration={500}>
                    RSVP
                </Link>
            </li>
        </ul>
      </nav>

      {/* Sections */}
      <Element name="home" className="section">
          <h1>Welcome to Our Wedding</h1>
      </Element>

      <Element name="reception" className="section">
          <h1>Reception Details</h1>
          <p>Join us for a wonderful evening of celebration at [Reception Venue].</p>
      </Element>

      <Element name="church" className="section">
          <h1>Church Ceremony</h1>
          <p>The ceremony will take place at [Church Name].</p>
      </Element>

      <Element name="attire" className="section">
          <h1>Wedding Attire</h1>
          <p>Dress Code: Formal. Please wear your best to celebrate with us!</p>
      </Element>

      <Element name="rsvp" className="section">
          <RSVPForm submitClicked={handleRSVPSubmit} />
      </Element>
    </div>
  );
};

export default App;