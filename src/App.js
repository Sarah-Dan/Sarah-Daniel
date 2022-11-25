import {
  About,
  Footer,
  Header,
  Projects,
  Skills,
  Testimonial,
} from "./container";
import { NavBar } from "./components";
import "./App.scss";

// create a root component
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
