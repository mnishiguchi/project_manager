import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';
// import RegistrationsNew       from '../views/registrations/new';

// Here, we create the MainLayout component that wraps our application inside,
// and define routes.
export default (
  <Route component={MainLayout}>
    // <Route path="/" component={RegistrationsNew} />
  </Route>
);
