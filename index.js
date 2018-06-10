import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFrameworks from './src/frameworks';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');

const app = express();

app.get('**', (req, res) => {
    // getFrameworks().then(frameworks => {
       const html = renderToString(<App frameworks={getFrameworks()} />);
       const finalHtml = index.replace('<!--::APP::-->', html);
       res.set('Cache-control', 'public', 'max-time=600', 's-maxtime=1200');
       res.send(finalHtml);
    // });
});

export let ssrapp = functions.https.onRequest(app);