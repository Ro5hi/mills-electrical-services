import Nav from './Nav'
import Logo from './Logo'
import About from './About'
import Motto from './Motto'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="justify-center justify-items-center">
            <div className="py-10">
                <Nav />
                    <Logo />
                        <About />
                        <Motto />
                    <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home;