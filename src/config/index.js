const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://lariflix-api.herokuapp.com';

export default {
    URL,
};