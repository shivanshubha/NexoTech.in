import "./cont.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact({ setShow }) {
  return (
    <>
      <div className="contact-main-main-cont">
        <div className="flo-container">
          <div className="flo-content">
            <div className="flo-left-side">
              {/* <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div> */}
              <div className="flo-details">
                <AddIcCallIcon />
                <div className="flo-topic">Phone</div>
                <div className="flo-text-one">
    <a href="tel:+919648518841">+91 9648518841</a>
</div>

                {/* <div className="text-two">+0096 3434 5678</div> */}
              </div>
              <div className="flo-details">
                <MailOutlineIcon />
                <div className="flo-topic">Email</div>
                <div className="flo-text-one">
    <a href="mailto:info@nexotech.in">info@nexotech.in</a>
</div>

                {/* <div className="text-two">info.@gmail.com</div> */}
              </div>
            </div>
            <div className="flo-right-side">
              <div className="flo-topic-text">Send us a message</div>
              <p>
                If you have any work from me or any types of queries related to
                my tutorial, you can send me a message from here. It's my
                pleasure to help you.
              </p>
              <form action="#">
                <div className="flo-input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="flo-input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="flo-input-box message-box">
                  <textarea placeholder="Enter your message"></textarea>
                </div>
                <div className="flo-button">
                  <button>Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
