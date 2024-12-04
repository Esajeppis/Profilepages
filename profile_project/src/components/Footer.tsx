import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="contact-info">
          <p>Email: <a href="mailto:espekki@hotmail.com" className="text-white">espekki@hotmail.com</a></p>
          <p>
            <a 
              href="https://www.linkedin.com/in/esa-heikkilä-b3b58a225" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white"
            >
              LinkedIn
            </a> | 
            <a 
              href="https://github.com/Esajeppis?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white"
            >
              GitHub
            </a>
          </p>
        </div>
        <p>&copy; {currentYear} Esa Heikkilä. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
