import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios, { AxiosResponse } from "axios";

const baseUrl: String = 'https://localhost:8080';

interface User {
  name: String;
  age: Number;
}

let user1: User = {
  name: 'zf',
  age: 10
}

axios({
  method: 'get',
  url: baseUrl + '/get',
  params: user1
}).then((respoense: AxiosResponse) => {
console.log(respoense);
return respoense.data;

}).catch(()=>{
  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
