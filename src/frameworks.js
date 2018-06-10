import fetch from "isomorphic-fetch";

// const FETCH_URL = 'https://intro-data-2018.firebaseapp.com/frameworks.json';
// const FETCH_URL = 'https://ssr-react.firebaseio.com/facts.json';

const data = [
    {
        "descriptions": "One framework. Mobile & desktop.",
        "name": "Angular",
        "url": "https://angular.io/"
    },
    {
        "descriptions": "A JavaScript library for building user interfaces.",
        "name": "React.js",
        "url": "https://reactjs.org/"
    },
    {
        "descriptions": "A different kind of library.",
        "name": "Preact.js",
        "url": "https://preactjs.com/"
    },
    {
        "descriptions": "The Progressive JavaScript Framework.",
        "name": "Vue.js",
        "url": "https://vuejs.org/"
    },
    {
        "descriptions": "React Applications Made Simple.",
        "name": "Next.js",
        "url": "https://nextjs.org/"
    },
    {
        "descriptions": "A framework for ambitious web developers.",
        "name": "Ember.js",
        "url": "https://www.emberjs.com/"
    }
]


export default function getFrameworks() {
    // return fetch(FETCH_URL).then(frameworks => frameworks.json());
    return data;
}