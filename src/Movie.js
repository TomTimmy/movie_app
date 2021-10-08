import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"; //? CSS 파일은 이렇게 import만 하면 된다. 끝!

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="moive">
      <img src={poster} alt={title} title={title} />
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
