import react from 'react';
import '../App.css';

function Contact() {
    return (
        <section id="contact-me">
            <div className="contact">
                <div style={{textAlign: "center"}} className="contact-details">
                    <h2>Contact me</h2>
                    <p>hello if you have any opportunity, please contact me!</p>
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
                        <button type="submit" className="btn btn-primary">Submit message</button>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;