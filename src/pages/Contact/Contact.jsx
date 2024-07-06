import React from 'react'

const Contact = () =>{
    return(
        <section className='contact'>
            <header>
                <h2 className='h2 article-title'>Contact</h2>
            </header>
            <section className='mapbox'>
                <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9403.817580169609!2d84.98329160709751!3d25.13465227340772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cbbc8da11fbd%3A0x45d38015b2a1fad4!2sJama%20Masjid%20Bagwar!5e0!3m2!1sen!2sin!4v1720285348315!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>
            <section className='contact-form'>
                <h3 className='h3 form-title'>Contact Form</h3>
                <form action="#" className='form'>
                    <div className='input-wrapper'>
                        <input type="text" name='fullname' id='fullname' className='form-input' placeholder='Full Name' />

                        <input type="email" name='email' id='email' className='form-input' placeholder='Email Address'/>
                    </div>
                    <textarea name="message" className='form-input' placeholder='Your Message'></textarea>
                    <button className='form-btn' type='submit'>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </section>

    )
}

export default Contact