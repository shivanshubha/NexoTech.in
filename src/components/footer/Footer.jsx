import './Foot.css'
import Logo from './footerLogo.png'

function Footer() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" id="company">
            <img src={Logo} alt="" className="logo" />
            <p>
              We are specialised in manufacturing different wire mesh in accordance with the clients requirements.
            </p>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col" id="services">
            <h3>Services</h3>
            <div className="links">
              <a href="#">Automobile Solution</a>
              <a href="#">Anti Vandalism Products</a>
              <a href="#">Other Wire-Mesh</a>
            </div>
          </div>

          <div className="col" id="useful-links">
            <h3>Links</h3>
            <div className="links">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Our Policy</a>
              <a href="#">Help</a>
            </div>
          </div>

          <div className="col" id="contact">
            <h3>Contact</h3>
            <div className="contact-details">
              <i className="fa fa-location"></i>
              <p>Email:-info@nexotech.in</p>
            </div>
            <div style={{marginTop: '7px'}} className="contact-details">
              <i className="fa fa-phone"></i>
              <p>+91 9648518841</p>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="form">
            <form action="">
              <input type="text" placeholder="Email here..." />
              <button><TelegramIcon/></button>
            </form>
          </div>
        </div> */}
      </div>
    </footer>
  
    </>
  )
}

export default Footer