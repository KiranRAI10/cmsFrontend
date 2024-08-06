import './Contact.css'

const Contact = () => {
  return (
    <div>
        <header>
        <h1>Contact Us</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="contact-details">
            <h2>Get in Touch</h2>
            <p>If you have any questions or would like to reach out, please use the form below or contact us via email or phone.</p>
            <ul>
                <li>Email: contact@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
        </section>
        
        <section className="contact-form">
            <h2>Contact Form</h2>
            <form action="#" method="post">
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Simple Homepage. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Contact