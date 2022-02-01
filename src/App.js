import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  const user = "mohammed";
  const person = { firstName: "houcine", lastName: "bouatour" };

  return (
    <div className="s">
      <Navbar />
      <h1 /* style={{ backgroundColor: "red" }} */ className="title">hello</h1>
      <h1>hello</h1>
      <form>
        <input />
      </form>
      <h1>{user}</h1>
      <p>{person.firstName}</p>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
