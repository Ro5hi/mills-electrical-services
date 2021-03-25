import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Motto from './Motto'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="justify-center justify-items-center">
            <div className="flex flex-col">
                <Nav />
                    <Hero />
                        <About />
                        <Motto />
                    <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home;