import { useState, useEffect}  from 'react'
import Movieİtem from './Movieİtem.jsx'

// import movies from  '../movies.json';

function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
.then(res => res.json())    
.then(data => {
    setMovies(data.results)
    
})
},[])
  
  if(movies){
    return (
      
        <div className="movie-list">
            {
            movies.map(İtem =>(
                <Movieİtem data={İtem}/>
            ))
            }
        </div>
      );
  } else{
      return(
          <h1>Загрузка</h1>
      )
  }
//   return (
      
//     <div className="movie-list">
//         {
//         movies.map(İtem =>(
//             <Movieİtem data={İtem}/>
//         ))
//         }
//     </div>
//   );
}

export default MovieList;
