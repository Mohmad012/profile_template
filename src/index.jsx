import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
	<BrowserRouter basename="profile_template">
		<App />
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
