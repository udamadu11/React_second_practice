import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Component/home';
import Artist from './Component/arist';


const App = () =>{
  return(
    <BrowserRouter>
      <div>
         <Route exact path="/" component = {Home} />
         <Route path = "artist/:id" component = {Artist} />
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(<App />,document.getElementById('root')
);


