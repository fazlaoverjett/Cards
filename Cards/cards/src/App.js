import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      {/* <img src={Angular} alt="" /> */}
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, vel?"
              />
            </div>
            <div className="column">
              <Course
                image={bootstrap5}
                title="bootstrap5"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, vel?"
              />
            </div>
            <div className="column">
              <Course
                image={CCsharp}
                title="CCsharp"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, vel?"
              />
            </div>
            <div className="column">
              <Course
                image={kompleweb}
                title="Overjett"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, vel?"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
