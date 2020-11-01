import react from 'react';
import '../App.css';

function Contact() {
    return (
        <section id="contact-me">
            <div className="contact">
                <div style={{ textAlign: "center" }} className="contact-details">
                    <h2 style={{ color: "#1e1e1e" }}>Contact me</h2>
                    <p style={{ color: "#1e1e1e" }}>hello if you have any opportunity, please contact me!</p>
                    <ul style={{ color: "#1e1e1e" }}>
                        <li>
                            <i className="fa fa-phone"> </i>
                            +212 (0) 6 54 17 35 53
                        </li>
                        <li>
                            <i className="fa fa-envelope">  </i>
                            contact@ilyasstrh.tech
                        </li>
                        <li>
                            <i className="fa fa-map-marker"></i>
                              Rabat, Morocco
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name*" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your email*" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message*" className="form-control" rows="4"></textarea>
                        </div>
                        <button style={{ background: "linear-gradient(180deg, #1e3c72, #2a5298)", color: "white" }} type="submit" className="btn">Submit message</button>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;