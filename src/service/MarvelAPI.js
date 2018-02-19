import axios from 'axios'
import md5 from 'js-md5'

const PUBLIC_KEY = '9871741527110d469af5a38153aa61e7'
const PRIVATE_KEY = '7deec09f2bb3d44ae11a7fa3bdeb3caa6f50a2f1'

const MarvelAPI = {
  getAll: function() {
    const ts = Number(new Date())
    const hash = md5.create()
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY)

    return axios.get('http://gateway.marvel.com/v1/public/series', {
      params: {
        apikey: PUBLIC_KEY,
        ts: ts,
        hash: hash.hex()
      }
    });
  },
  getById: function(id) {
    const ts = Number(new Date())
    const hash = md5.create()
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY)

    return axios.get(`http://gateway.marvel.com/v1/public/series/${id}`, {
      params: {
        apikey: PUBLIC_KEY,
        ts: ts,
        hash: hash.hex()
      }
    });
  }
}

export default MarvelAPI
