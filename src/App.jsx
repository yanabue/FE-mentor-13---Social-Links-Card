/* eslint-disable react/no-unescaped-entities */
import './App.css'
import profilePic from './assets/images/avatar-jessica.jpeg'

function Link(){
  return <a href="#">link</a>
}

function App() {

  return (
    <main className="main">
      <div className="profile-title">
        <img src={profilePic} alt="avatar image" />
        <h3 className='name'>Jessica Randall</h3>
        <p className="location">London, United Kingdom</p>
        <p className="description">"Front-end developer and avid reader."</p>
      </div>
      <div className="links">
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
      </div>
    </main>
  )
}


export default App
