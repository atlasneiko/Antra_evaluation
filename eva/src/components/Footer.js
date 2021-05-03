import { Link, useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="media-links">
              <div className="col-sm-1 col-md-1 ">
                <div className="facebook">
                  <Link to={location}>
                    <img className="img-responsive" src="./images/facebook.svg" alt="footer-icon" />
                    {/* <FontAwesomeIcon icon={faFacebook} classNameName="footer-icon" /> */}
                  </Link>
                </div>
              </div>

              <div className="col-sm-1 col-md-1">
                <div className="linkedin">
                  <Link to={location}>
                    <img className="img-responsive" src="./images/linkedin.svg" alt="footer-icon" />
                    {/* <FontAwesomeIcon icon={faLinkedin} classNameName="footer-icon" /> */}
                  </Link>
                </div>
              </div>

              <div className="col-sm-1 col-md-1">
                <div className="pinterest">
                  <Link to={location}>
                    {/* <FontAwesomeIcon icon={faPinterest} classNameName="footer-icon" /> */}
                    <img className="img-responsive" src="./images/pinterest.svg" alt="footer-icon" />
                  </Link>
                </div>
              </div>

              <div className="col-sm-1 col-md-1">
                <div className="email-icon">
                  <Link to={location}>
                    <img className="img-responsive" src="./images/email.svg" alt="footer-icon" />
                    {/* <FontAwesomeIcon icon={faEnvelope} classNameName="footer-icon" /> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div className="personal-contact phone">
                <h4>Phone: XXXXXX</h4>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 text-left">
              <div className="personal-contact email-personal-contact">
                <h4>Email: XXXXX@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 col-md-4 text-center">
              <div className="company-information">
                <h3>XXXX</h3>
                <h4>Copyright &copy; 2021</h4>
                <h4>NY</h4>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="home-footer">
                <h4><Link to="/">Home</Link></h4>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="portfolio-footer">
                <h4><Link to={location}>Portfolio</Link></h4>
                <ul>
                  <li><Link to={location}>Project1</Link></li>
                  <li><Link to={location}>Project2</Link></li>
                  <li><Link to={location}>Project3</Link></li>
                  <li><Link to={location}>See All</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="resume-footer">
                <h4><Link to={location}>Resume</Link></h4>
                <ul>
                  <li><Link to={location}>Download</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="contact-footer">
                <h4><Link to={location}>Contact</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
export default Footer;