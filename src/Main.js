import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import QuickGameMenu from "./QuickGameMenu";
import JoinGameMenu from "./JoinGameMenu";
import GameLobby from "./GameLobby";

class Main extends React.Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/quick" component={QuickGameMenu}/>
                    <Route path="/join" component={JoinGameMenu}/>
                    <Route path="/lobby/:id" component={GameLobby}/>
                </Switch>
            </main>
        );
    }
}

export default Main;