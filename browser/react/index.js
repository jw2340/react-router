import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album.js';
import Artists from './components/Artists.js';
import Artist from './components/Artist.js';
import Songs from './components/Songs.js';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="/artists" component={Artists} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      <Route path='/albums' component={Albums} />
      <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);
