import { Container } from '@material-ui/core';
import MenuComponent from 'component/menu/MenuComponent';
import Index from 'container';
import TodoContainer from 'container/todo/TodoContainer';
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(2, 3),
    },
    content: {
      flexGrow: 1,
      marginTop: '30px',
      padding: theme.spacing(3),
    },
  }),
);

const LayOutContainer: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuComponent />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {[
            {
              path: ['', '/'],
              exact: true,
              Content: () => <Index />,
            },
            {
              path: ['/', '/todo'],
              exact: true,
              Content: () => <TodoContainer />,
            },
          ].map(({ path, exact, Content }) => (
            <Route key={`content-area-${typeof path === 'string' ? path : path.slice(-1)}`} exact={exact} path={path}>
              <Content />
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
};

export default LayOutContainer;
