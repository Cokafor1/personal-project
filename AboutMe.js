import React from 'react';
import profileImage from './images/IMG_5497.jpeg';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profileImage} alt="My Profile" style={{ width: '300px', height: 'auto' }} />
      <p> Welcome to my portfolio.</p>
    </div>
  );
};

export default AboutMe;
