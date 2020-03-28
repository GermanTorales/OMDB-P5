import React from "react";
import Film from "./Film";
import { connect } from "react-redux";
import { fetchFilm } from "../../../redux/actions/Films";
import { setFavorite } from "../../../redux/actions/Favorites";

class FilmContainer extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchFilm(this.props.match.params.imdbId);
  }
  render() {
    const { film } = this.props;
    return (
      <div className="container pt-4">
        <Film filmSelected={film} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: state.films.filmSelected.film
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFilm: omdbId => dispatch(fetchFilm(omdbId)),
    addFav: omdbId => dispatch(setFavorite(omdbId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
