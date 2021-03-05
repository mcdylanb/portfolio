import "./App.css";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="container">
          <blockquote>welcome to my simple portfolio website</blockquote>
        </div>

        <div className="container">
          <h3> My name is </h3>
        </div>

        <div className="container">
          <h1> Dylan </h1>
          <h1>Balagtas</h1>
        </div>

        <div className="container">
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
        </div>

        <div className="container-center">
          <button>Contact Me</button>
        </div>
      </div>
    </div>
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
