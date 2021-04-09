import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TodoListComponent from 'component/todo/TodoListComponent';
import TodoNowListComponent from 'component/todo/TodoNowListComponent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }),
);

const TodoContainer: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h5>테스트</h5>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoContainer;
