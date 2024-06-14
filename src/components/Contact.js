import React from 'react';


const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section-heading">Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" className="contact-input"></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
