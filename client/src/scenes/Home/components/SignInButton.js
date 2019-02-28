import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import lime from '@material-ui/core/colors/lime';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  palette: {
    primary: lime['A400'],
  },
});

// TODO link to sign in page

function ButtonSizes(props) {
  const { classes } = props;

  return (

    <div>
    <Button
    variant="contained"
    size="medium"
    color="primary"
    className={classes.button}
    >
          Sign In
        </Button>

        </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
