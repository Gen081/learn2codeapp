import bg from './images/bg-intro-desktop.png'
import './App.css';

function App() {

  return (
    <>

      <main>
        <div className="left-content">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </p>
        </div>

        <div className="right-content">
          <div className="top-button">
            <button className="blue-button"><strong>Try it free 7 days</strong>
            then $20/mo thereafter</button>
          </div>

          <form className="form-wrap">
            <input type="text" className="input" placeholder="Jonathan |" />
            <input type="text" className="input" placeholder="Last Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <button id="free">CLAIM YOUR FREE TRIAL</button>
            <p>By Clicking the button, you are agreeing with to our <a href="#" className="terms">Terms and Services</a></p>
          </form>

        </div>

      </main>
      
    </>
  );
}

export default App;
