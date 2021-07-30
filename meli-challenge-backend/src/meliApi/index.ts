import axios from 'axios';

const baseURL = 'https://api.mercadolibre.com/';

const meliApi= axios.create({baseURL});


export default meliApi;