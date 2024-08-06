import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Button title="Login" color ="teal"  subTitle = "Hello world"/>
        <Button title="Register" color = "red" subTitle = "Hello world"/>

    
    
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