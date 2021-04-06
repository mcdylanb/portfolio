import "./App.css";

function App() {
  return (
    <div className="intro">
      <h3>&#128075; Hi, Im</h3>
      <h1>Dylan Balagtas</h1>
      <div className="tag-container">
        <div className="tag">Front-end Developer</div>
        <div className="tag">Builder</div>
        <div className="tag">Student</div>
      </div>
      <a
        href="https://twitter.com/messages/compose?recipient_id=706870613571338240"
        class="twitter-dm-button"
        data-screen-name="@dylan_balagtas"
      >
        <div className="contact-btn">Let's Chat</div>
      </a>
    </div>
  );
}

export default App;
