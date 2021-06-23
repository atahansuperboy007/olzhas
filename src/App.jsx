import MovieList from "./comp/MovieList";
import "./style.css";
import Upcoming from "./comp/Upcoming";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Movie from "./Movie";
import Search from "./comp/Search";
import Form from "./comp/Form";
import Welcome from "./comp/Welcome";
import Carousel from "./comp/Carousel"
import Footer from "./comp/Foot";
import Search1 from "./comp/Search-1"

function App() {
  //   const [num, setNum] = useState(2)
  //  function rise(){
  //    setNum(num + 2)
  //  }
  return (
    <div className="main">
      
        <BrowserRouter>
          <header>
            <div className="container">
            <Link to="/" className="logo">
              owerx
            </Link>
            <div className="links">
              <NavLink  to="/" ><a href="#" id="first-link">главная</a> </NavLink>
              <NavLink to="/movie" ><a href="#"id="second-link">фильмы&nbsp;в&nbsp;кино</a> </NavLink>
              <NavLink to="/hello"><a href="#"id="thirtys-link">скоро&nbsp;выйдут</a> </NavLink>
            </div>
            </div>
            
            
          </header>
          <div className="container">
          <div className="search">
              <Form />
            </div>
          </div>
          
         <div className="container">
         <Switch>
          <Route exact path="/">
                <Welcome />
              </Route>
            <Route path="/hello">
              <Upcoming />
            </Route>
            <Route exact path="/movie">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
            <Route path="/search/">
<Search1/>
            </Route>
          </Switch>
           </div>   
          
         <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
