import React from 'react';
import { Link } from 'react-router-dom';

const SeriesList = ({ series }) => (
  <ul className="series">
    {
      series.map(serie => (
        <li key={serie.id} style={{ backgroundImage: `url(${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension})` }}>
          <Link to={`/series/${serie.id}`}><span>{serie.title}</span></Link>
        </li>
      ))
    }
  </ul>
)

export default SeriesList;
