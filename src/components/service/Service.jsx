
import './Serv.css'
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Service({setShow}) {

  return (
    <>
    
        {/* sevice  */}
        <div onClick={() => setShow(false)} >
        <div className="service-main-maincont">
          <h1>Service</h1>
        </div>
        <div className="card-list">
          <div className="card-item" >
            <img
              src="https://www.dosseroilfieldservicesandgarage.com/wp-content/uploads/2021/03/mechanic-auto-repair_1_2000x1335.jpg"
              alt="Card Image"
            />
            <span className="developer">Automobile solutions</span>
            <h3>Automobile solutions</h3>
            <div className="arrow">
              <ArrowOutwardIcon />{" "}
            </div>
          </div>
          <div className="card-item" >
            <img
              src="https://media.licdn.com/dms/image/D4D12AQEX7UIsfWeeSQ/article-cover_image-shrink_720_1280/0/1676291348686?e=2147483647&v=beta&t=FAXQPYUkYNuOSaEJ3NQlGFBv70T7mIv87zWKQvq6ONw"
              alt="Card Image"
            />
            <span className="designer">Anti vandalism products</span>
            <h3>Anti vandalism products</h3>
            <div className="arrow">
              <ArrowOutwardIcon />
            </div>
          </div>
          <div className="card-item" >
            <img
              src="https://th.bing.com/th/id/OIP.x8El4tWioz_A5RINxJhvEQHaHa?rs=1&pid=ImgDetMain"
              alt="Card Image"
            />
            <span className="editor">Other Wire-Mesh</span>
            <h3>other wire-mesh</h3>
            <div className="arrow">
              <ArrowOutwardIcon />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Service