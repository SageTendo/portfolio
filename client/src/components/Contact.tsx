import '../styles/contact.css';
import github_logo from '../assets/icons8-github.gif';
import linkedin_logo from '../assets/icons8-linkedin.gif';
import gmail_logo from '../assets/icons8-gmail.gif';

export function Contact() {
    const email = "nz.zishiri@gmail.com";
    const mailTo = "mailto:" + email;
    const linkedin = "https://www.linkedin.com/in/nyasha-zishiri-a2bb68257/";
    const github = "https://github.com/SageTendo";
    const formSubmit = "https://formsubmit.co/eadfd1c0bf25f87cdf08c5811c5a8865";

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="content">
                    <div className="contact-info">
                        <h2>Contact Me</h2>
                        <h1>Want to Reach Out?</h1>
                        <h3>
                            I am currently looking for opportunities.
                        </h3>
                        <div className="contact-links">
                            <div className="contact-link">
                                <img src={gmail_logo}/>
                                <a href={mailTo}>Email</a>
                            </div>

                            <div className="contact-link">
                                <img src={linkedin_logo}/>
                                <a href={linkedin}>LinkedIn</a>
                            </div>

                            <div className="contact-link">
                                <img src={github_logo}/>
                                <a href={github}>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" method="post"
                          action={formSubmit}>
                        <div className="form-input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="" required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="" required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your message..." required></textarea>
                        </div>
                        <button className="contact-button" type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    );
}