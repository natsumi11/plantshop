import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="location">
                <h1>Location</h1>
                <div>
                    <div>Tokyoto Toshimaku</div>
                    <div>Ochiaiminaminagasaki</div>
                    <div>Sazancube 304</div>
                </div>
                <div>
                    <div>Monday 13:00 20:00</div>
                </div>
            </div>
            <div className="getintouch">
                <h1>Get in touch</h1>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </div>
    )
}

export default Footer;