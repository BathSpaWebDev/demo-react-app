import './App.css';
import { useState, useEffect  } from 'react';

function App() {

    const [movies, setMovies] = useState(null);
  
    useEffect(()=>{
        fetch('https://showtimes.everyday.in.th/api/v2/movie/')
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setMovies(data.results))
            .catch( err => console.error(`Fetch problem: ${err.message}`) );
       
    },[])

    return (
        <div className="App">
            <div className="container">
                <h2>Historical events</h2>

                {movies !== null && movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            {movie.title}
                            {movie.id}
                        </div>
                    )
                })}

            </div>  
        </div>
    );
}

export default App;
