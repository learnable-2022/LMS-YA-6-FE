import Navbar from '../../components/reusable/Navbar';
import Hero from './components/Hero'
import Offer from './components/Offer'
import About from './components/About'
import LiveTutor from './components/LiveTutor'
import Testimonial from './components/Testimonial'
import Partners from './components/Partners'
import EndSection from './components/EndSection'
import Footer from '../../components/reusable/Footer';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offer />
      <About />
      <LiveTutor />
      <Testimonial />
      <Partners />
      <EndSection />
      <Footer/>
    </main>
  );
};

export default Home;
