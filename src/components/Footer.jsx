import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    position: 'static',
    width: '100%',
    bottom: 0,
    flexGrow: 1,
  },
};

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#9E9E9E' }} position="static">
        <Toolbar>
          2018
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
