import React from 'react';
import { Form } from 'react-bootstrap';
import './components.css';

function Contact() {
    return (
        <main id="contact-page" className="container">
            <br></br>
                <section className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 about bounce-right mb-4">
                        <section className="row mt-3">
                            <div className="col-lg-12">
                                <span className="h1">Contact</span>
                            </div>
                        </section>
                        <section className="row">
                            <div className="w-100 mx-1"><hr></hr></div>
                        </section>
                        <section className="container">
                            <Form id="contact-form" name="contact-form" action="mail.php" method="POST" role="form">
                                <div className="row form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="John Smith"></input>
                                </div>
                                <div className="row form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="example@gmail.com"></input>
                                </div>
                                <div className="row form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control"></input>
                                </div>
                                <div className="row form-group">
                                    <label for="message">Message</label>
                                    <textarea type="text" id="message" name="message" className="form-control" rows="4"></textarea>
                                </div>
                                <button className="btn button-color mb-3" onclick="document.getElementById('contact-form').submit();">Send</button>
                            </Form>
                        </section>
                    </div>
                </section>
            <br></br>
        </main>
    );
}

export default Contact;