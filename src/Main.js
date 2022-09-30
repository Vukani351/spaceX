import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";

function Main (){
  return(
    <main className="mx-auto text-center">
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
    </main>
  );
} 

export default Main;
