import React from 'react';
import ReactDOM from 'react-dom';
import QuickFields from './molecules/quick_fields.js'
import './index.css';
import myFormConfig from './data/Standard/MailingAddress.js';
import promisePollyfill from './utils/promisePollyfill'


promisePollyfill()
const root =  document.getElementById('root')


ReactDOM.render(<QuickFields config={myFormConfig}/>,root)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

