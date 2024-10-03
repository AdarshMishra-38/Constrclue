// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import HowItWorks from './components/HowItWorks/howitworks';
import Feature from './components/Feature/feature';
// import Builder from './components/Builder/builder';
// import Testimonials from './components/Testimonials/testimonial';
// import Pricing from './components/Pricing-Section/pricing';
import FAQ from './components/FAQ-Section/FAQ';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero/>
    <HowItWorks/>
    <Feature/>
    {/* <Builder/> */}
    {/* <Pricing/> */}
    <FAQ/>
    {/* <Testimonials/> */}
    <Footer/>


    <main>
        {/* Other content for your website */}
    </main>
</div>
  );
}

export default App;
