import "./App.css";
import profile from "./assets/profile.jpg";

// const Nav = () => {

// }
const Intro = () => {
  return (
    <>
      <div className="intro container-v">
        <div className="container-center">
          <blockquote>welcome to my simple portfolio website</blockquote>
        </div>

        <div className="container">
          <h3> My name is </h3>
        </div>

        <div className="grid-container">
          <h1>
            {" "}
            Dylan <br />
            Balagtas
          </h1>

          <img src={profile} alt="" />
        </div>

        <ul className="container-v">
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
