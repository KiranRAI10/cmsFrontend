import './Home.css'

const Home = () => {
  return (
    <div>
        <header>
        <h1>Welcome to My Homepage</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This is the homepage section where you can introduce your site.</p>
        </section>
        
        <section id="about">
            <h2>About</h2>
            <p>Here you can provide information about yourself or your website.</p>
        </section>
        
        <section id="services">
            <h2>Services</h2>
            <p>Describe the services you offer here.</p>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>Provide your contact information or a contact form here.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Simple Homepage. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Home