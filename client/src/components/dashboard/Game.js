import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteGame } from '../../actions/profile';

const Game = ({ games, deleteGame }) => {
  const gameTable =
    games.length > 0 ? (
      games.map((game) => (
        <tr key={game._id}>
          <td>{game.title}</td>
          <td className="hide-sm">{game.status}</td>
          <td className="hide-sm" width="150">
            <img src={game.imageUrl} alt={game.title} />
          </td>
          <td className="hide-sm">{game.notes}</td>
          <td>
            <button
              onClick={() => deleteGame(game._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <>No games to list</>
    );

  return (
    <Fragment>
      <h2 className="my-2">Game List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="hide-sm">Status</th>
            <th className="hide-sm">Image</th>
            <th className="hide-sm">Notes</th>
            <th />
          </tr>
        </thead>
        <tbody>{gameTable}</tbody>
      </table>
    </Fragment>
  );
};

Game.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default connect(null, { deleteGame: deleteGame })(Game);
