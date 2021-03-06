import "./App.css";
import profile from "./assets/profile.jpg";

// const Nav = () => {

// }
const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container-center">
          <blockquote>welcome to my simple portfolio website</blockquote>
        </div>

        <div className="container">
          <h3> My name is </h3>
        </div>

        <div className="container">
          <h1> Dylan </h1>
          <h1>Balagtas</h1>
        </div>

        <ul className="container">
          <li>
            Im a <strong>tech enthusiast</strong>
          </li>
          <li>
            love to <strong>learn new things</strong>
          </li>
          <li>
            love to <strong>constantly improve</strong>
          </li>
          <li>
            and <strong>teaching</strong>
          </li>
        </ul>

        <div className="container-center">
          <button>Contact Me</button>
        </div>
        <div className="container">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <div className="app">
        <nav></nav>
        <Intro />
      </div>
    </>
  );
}

export default App;
