import React, { component } from 'react'
import '../css/styling.css'
class ContactCard extends React.Component {
    render() {
        return (
            <div>
                <section className="colorlib-about"  data-section="contactcard">
                    <div className="colorlib-narrow-content">
                        <div className="heading-meta">
                            <h1>Contact Card</h1>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-business-card" />
                                    </span>
                                    <div className="desc">
                                        <h3>Mangena Pavan Kumar</h3>
                                        <p><b>Full Name: </b>Mangena Giri Naga Pavan Kumar</p>
                                        <p><b>DOB: </b>18 May 1998</p>
                                        <p><b>Profession: </b>Developer</p>
                                        <p><b>Company: </b>L&T Technology Services</p>
                                        <p><b>Contact: </b>7730906818</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ContactCard