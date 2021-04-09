import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from 'container';
import TodoContainer from 'container/todo/TodoContainer';
import LayOutContainer from 'container/layout/LayOutContainer';

interface IUser {
  userName: string;
  userAge: number;
  active: boolean;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/todo']}>
          <LayOutContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
