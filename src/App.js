import React from "react";
import Nav from "./Nav";
import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Main />
            </div>
        );
    }
}

export default App;