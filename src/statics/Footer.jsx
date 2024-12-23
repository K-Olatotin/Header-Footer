
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-heading">SKILLBRIDGE</h3>
        <p>
          The Artisan App aims to connect skilled artisans with clients in need
          of their services. The platform offers a streamlined process for
          showcasing talent, booking appointments, and fostering trust through
          ratings and reviews.
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Quicklink</h3>
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#artisans">Artisans</a>
          </li>
          <li>
            <a href="#collabo">Collabo</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Contact</h3>
        <address>
          Industrial Training Fund – Along Miango Road, P.M.B 2199 Jos, Plateau
          State, Nigeria. 930272
        </address>
        <p className="b-link">
          <a href="Bcollar507@gmail.com">Bcollar507@gmail.com</a>
        </p>
        <p>
          +2348134963534, +2349012130382
        </p>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2024 BCOLLAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
