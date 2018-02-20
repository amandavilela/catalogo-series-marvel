import React from 'react';

const Serie = ({ serie }) => (
  <div>
    <img src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`} alt={serie.title} />
    <h1>{serie.title}</h1>
    <p>{serie.startYear} - {serie.endYear}</p>
    <p>{serie.description}</p>
  </div>
)

export default Serie;
