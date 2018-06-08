import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFrameworks from './src/frameworks';
import express from 'express';

const app = express();

app.get('**', (req, res) => {
    getFrameworks().then(frameworks => {
       const html = renderToString(<App frameworks={frameworks} />);
       res.set('Cache-control', 'public', 'max-time=600', 's-maxtime=1200');
       res.send(html);
    });
});

export let ssrapp = functions.https.onRequest(app);