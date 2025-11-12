import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">We are a team of passionate architects...</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
