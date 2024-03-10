/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import profilePic from "./assets/images/avatar-jessica.jpeg";

function Link({ linkName }) {
  return (
    <a href="#" className="main-link">
      {linkName}
    </a>
  );
}

function App() {
  return (
    <main className="main">
      <div className="profile-title">
        <img className="profile-img" src={profilePic} alt="avatar image" />
        <h3 className="name">Jessica Randall</h3>
        <p className="location">London, United Kingdom</p>
        <p className="description">"Front-end developer and avid reader."</p>
      </div>
      <div className="links">
        <Link linkName={"GitHub"} />
        <Link linkName={"Frontend Mentor"} />
        <Link linkName={"LinkedIn"} />
        <Link linkName={"Twitter"} />
        <Link linkName={"Instagram"} />
      </div>
    </main>
  );
}

export default App;
