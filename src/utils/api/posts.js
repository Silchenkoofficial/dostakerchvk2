import axios from 'axios';

export default {
    get: axios.get('http://localhost:9999/posts')
}