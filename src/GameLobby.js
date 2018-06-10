import React from "react";

class GameLobby extends React.Component {
    render() {
        const {id} = this.props.match.params;
        console.log(this);

        return (
            <p>Game with id - {id}</p>
        );
    }
}

export default GameLobby;