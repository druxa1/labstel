import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import Menu from './Menu';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundImage: 'url(https://media.giphy.com/media/aFh1oCwUfAHao/giphy.gif)',
        }}
        position="static"
      >
        <Toolbar style={{
          minHeight: 250,
        }}
        >
          <Button component={NavLink} to="/">
            <h2 className={classes.grow}>
              Football
            </h2>
          </Button>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
