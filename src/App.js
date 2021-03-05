import "./App.css";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <blockquote>welcome to my simple portfolio website</blockquote>
        <h3> My name is </h3>
        <h1> Dylan </h1>
        <h1>Balagtas</h1>
        <p>
          Im a <strong>tech enthusiast</strong>
        </p>
        <p>
          love to <strong>learn new things</strong>
        </p>
        <p>
          love to <strong>constantly improve</strong>
        </p>
        <p>
          and <strong>teaching</strong>
        </p>
        <button>Contact Me</button>
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
