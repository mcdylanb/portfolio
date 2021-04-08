import "./App.css";

function App() {
  return (
    <div className="intro">
      <div className="text">
        <h3>Dylan Balagtas</h3>
        <h1>
          A Web Developer focused on <br /> bringing your ideas to reality.
        </h1>
      </div>
      <div className="bg-banner"></div>
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
