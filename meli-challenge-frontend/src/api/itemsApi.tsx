import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';

const itemsApi= axios.create({baseURL});

export default itemsApi;