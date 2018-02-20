import React from 'react';
import MarvelAPI from '../../service/marvel-api';
import SeriesList from '../../components/series/SeriesList';
import './Series.css';

class SeriesListContainer extends React.Component {

  constructor() {
    super();

    this.state = { series: [] };
  }

  componentDidMount() {
    MarvelAPI.getAll()
    .then(res => {
      this.setState({ series: res.data.data.results });
    });
  }

  render() {

    const { series } = this.state;

    return (
      <div>
        {
          series.length > 0 && <SeriesList series={series} />
        }
        {
          !series.length > 0 && <p>Loading...</p>
        }
      </div>
    )
  }

}
export default SeriesListContainer
