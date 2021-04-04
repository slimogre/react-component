import Imagee from './component/profile/ProfilPhoto';
import Name from './component/profile/FullName';
import Address from './component/profile/Address';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
<>
<Name />
<Imagee />
<Address/>
</>
,rootElement);
