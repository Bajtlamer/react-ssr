import fetch from "isomorphic-fetch";

const FETCH_URL = 'https://intro-data-2018.firebaseapp.com/frameworks.json';
// const FETCH_URL = 'https://ssr-react.firebaseio.com/facts.json';

export default function getFrameworks() {
    return fetch(FETCH_URL).then(frameworks => frameworks.json());
}