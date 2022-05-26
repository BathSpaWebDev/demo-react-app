import logo from './logo.svg';
import './App.css';
import Section from './components/section';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [user, setUser] = useState('new user');
  const [messageShowing, setMS] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const message = `Welcome, ${user}, to this website`
  
  const submitForm = (e) => {
    e.preventDefault();
    setMS(true);
  }
  
  return (
    <div className="App">
      <div className="container">

        <button onClick={toggleDarkMode}>{darkMode ?' Switch to light mode' : 'Switch to dark mode' }</button>
        

        <form onSubmit={submitForm}>
          <input type="text" name="userName" id="userName" value={user} onChange={(event) => setUser(event.target.value)}/>
          <button type="submit">Log in</button>
        </form>

        {messageShowing ? message : ''}

        <Section 
          title="This is our demo app"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo repudiandae asperiores quae amet voluptatum iste laboriosam, eligendi blanditiis eius quis fuga deleniti esse, fugiat maxime necessitatibus obcaecati distinctio ipsum officia?"
          bgColour={darkMode ? '#000' : 'red'}
          colour={darkMode ? '#fff' : '#000'}
        />

        <Section 
          title="section section"
          description="Some other text"
          bgColour={darkMode ? '#000' : 'green'}
          colour={darkMode ? '#fff' : '#000'}
        />
      </div>  
    </div>
  );
}

export default App;
