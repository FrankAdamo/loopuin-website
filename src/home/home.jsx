import React from 'react'

export class Homepage extends React.Component{
    render(){
        return(
            <div className="main-container">
        <nav>
            <div className="max-width">
                <div className="nav-wrapper">
                    <a href="https://www.loopuin.com" className="logo-wrapper">
                        <img src="./media//loop-u-in-mark-color.svg" alt="Loop U In Logo to homepage" className="logo"/>
                    </a>
                    <div className="nav-items-wrapper">
                        <button className="nav-item button secondary-button">
                            Join Focus Group
                        </button>
                        <button className="nav-item button primary-button">
                            Early Access
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <section className="page-header" style={{backgroundImage: "url('media/crm-for-user-experience.png')"}}>
            <div className="max-width">
                <div className="content">
                    <h1 className="title">
                        Made for User Experience.
                    </h1>
                    <div className="form">
                        <form id="subscribe-form-1">
                            <input className="input-textbox" type="text" name="email" placeholder="Email"/>
                            <input className="button primary-button g-recaptcha"
                                dataSitekey="6LcJv8IUAAAAAGwTas0JBwob7Kug-lF6yAZwze3o" dataCallback='onSubmit'
                                type="submit" value="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="feature-section">
            <div className="max-width">
                <div className="content">
                    <h2>
                        Say hello to your users. 👋 Loop U In allows you to manage all your user research in one place.
                    </h2>
                    <div className="feature-image-container">
                        <img src="" alt="" className="feature-image"/>
                    </div>
                </div>
                <div className="content">
                    <h2>
                        Aggrogate your users into personas. Track user interviews and testing by personas or individual
                        users.
                    </h2>
                    <div className="feature-image-container">
                        <img src="" alt="" className="feature-image"/>
                    </div>
                </div>
                <div className="full-container-image-wrapper">
                    <img src="./media/listening-and-connecting-with-users.png"
                        alt="Tune in and listening to your users every step of the UX process"
                        className="full-container-image"/>
                </div>
            </div>
        </section>

        <section className="full-width-callout">
            <div className="max-width">
                <h2>
                    Have suggestions? We want to hear them. Join our upcoming focus groups.
                    We want to know how Loop U In can best help you!
                </h2>
                <div className="form">
                    <form id="subscribe-form-2">
                        <input className="input-textbox" type="text" name="email" placeholder="Email"/>
                        <input className="button primary-button g-recaptcha"
                            data-sitekey="6LcJv8IUAAAAAGwTas0JBwob7Kug-lF6yAZwze3o" data-callback='onSubmit'
                            type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </section>
        <section className="footer">
            <div className="max-width">
                <div className="footer-wrapper">

                    <div className="nav-wrapper">
                        <div className="nav-items-wrapper">
                            <div className="contact-info">
                                <span>
                                    <a className="text-white text-button" href="">hello@loopuin.com</a>
                                </span>

                                <span>
                                    <a href="https://www.instagram.com/loopuin/">
                                        <img src="./media/2016_instagram_logo.svg" alt="Visit Loop U In instagram"
                                            className="social-media-icon"/>
                                    </a>
                                </span>
                            </div>
                            <span className="text-primary">
                                Community
                            </span>
                            <button className="nav-item button text-button text-white text-align-left">
                                Join Focus Group
                            </button>
                            <button className="nav-item button text-button text-white text-align-left">
                                Early Access
                            </button>
                        </div>
                        <a href="https://www.loopuin.com" className="logo-wrapper">
                            <img src="./media//loop-u-in-logo-color.svg" alt="Loop U In Logo to homepage"
                                className="full-logo"/>
                        </a>
                    </div>
                    <div className="contact-form-container">
                        <div className="contact-form-wrapper">
                            <h3 className="text-white">have any questions?</h3>
                            <form id="contact-form">
                                <input className="input-textbox variant-1" type="text" name="name" placeholder="Name"/>
                                <input className="input-textbox variant-1" type="text" name="email" placeholder="Email"/>
                                <textarea className="input-textbox variant-1" rows="4" placeholder="Message"></textarea>
                                <div className="button-container">
                                    <input className="button primary-button-variant g-recaptcha"
                                        data-sitekey="6LcJv8IUAAAAAGwTas0JBwob7Kug-lF6yAZwze3o" data-callback='onSubmit'
                                        type="submit" value="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <a className="back-to-top" href="">
                    <div className="arrow-up"></div>
                    <div className="arrow-stem"></div>
                </a>
        </section>
    </div>
        )
    }
}