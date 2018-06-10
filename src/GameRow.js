import React from "react";
import PropTypes from 'prop-types';
import Game from "./Game";
import {withRouter} from "react-router-dom";

class GameRow extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        game: PropTypes.instanceOf(Game).isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        let {number, game, history} = this.props;

        return (
            <tr onClick={() => { history.push(`/lobby/${game.id}`) }}>
                <td>{number}</td>
                <td>{game.name}</td>
                <td>{game.owner}</td>
            </tr>
        );
    }
}

export default withRouter(GameRow);