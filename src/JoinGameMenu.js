import React from "react";
import GameRow from "./GameRow";
import Game from "./Game";
import Loading from "react-loading-animation"
import axios from 'axios'

class JoinGameMenu extends React.Component {
    state = {
        loading: true,
        games: []
    };

    componentDidMount() {
        axios.get("/game")
            .then(response => response.data)
            .then(gamesJson =>
                gamesJson.map(gameJson =>
                    Game.fromJson(gameJson)
                )
            )
            .then(games => {
                this.setState({
                    loading: false,
                    games
                })
            });
    }

    render() {
        const {games, loading} = this.state;

        return (
            <Loading isLoading={loading}>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Owner</th>
                    </tr>
                    </thead>
                    <tbody>
                    {games.map((game, number) => (
                        <GameRow
                            key={game.id}
                            number={number + 1}
                            game={game}
                        />
                    ))}
                    </tbody>
                </table>
            </Loading>
        );
    }
}

export default JoinGameMenu;