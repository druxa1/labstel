import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Sidebar = ({ classes }) => (
  <Fragment>
    <Button component={NavLink} to="/news" activeClassName={classes.selected}>
        Новости
    </Button>
    <Button component={NavLink} to="/photo" activeClassName={classes.selected}>
        Фотогалерея
    </Button>
    <Button component={NavLink} to="/videos" activeClassName={classes.selected}>
        Видеогалерея
    </Button>
    <Button component={NavLink} to="/сontacts" activeClassName={classes.selected}>
      Контакты
    </Button>
    <Button component={NavLink} to="/footballdevelopment" activeClassName={classes.selected}>
      Развитие футбола
    </Button>
  </Fragment>
);

export default withStyles(() => ({
  paper: {
    position: 'relative',
  },
  selected: {
    border: '1px solid black',
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
  },

}))(Sidebar);
