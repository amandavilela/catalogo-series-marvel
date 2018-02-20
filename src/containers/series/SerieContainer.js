import React from 'react';
import MarvelAPI from '../../service/marvel-api';
import Serie from '../../components/series/Serie';
import './Series.css';

class SerieContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { serie: {} };
  }

  componentDidMount() {
    MarvelAPI.getById(this.props.match.params.id)
    .then(res => {
      this.setState({ serie: res.data.data.results[0] });
    });
  }

  render() {

    const { serie } = this.state;

    return (
      <div className="serie-info">
        {
          serie.title &&
          <Serie serie={serie} />
        }
        {
          !serie.title && <p>Loading...</p>
        }
      </div>
    )
  }
}

export default SerieContainer;
