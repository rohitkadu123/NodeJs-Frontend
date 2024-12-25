import { useEffect, useState } from 'react';
import 'ckeditor5/ckeditor5.css';
import './App.css';
import axios from 'axios';
import 'jodit/es5/jodit.min.css'; 
function App() {

const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Assuming axios instance and proxy are configured properly
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>create react app using command - npx create-react-app my-app</h1>
        <p>Jokes: {jokes.length}</p>
        {
          jokes.map((joke, index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h3>{joke.description}</h3>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
