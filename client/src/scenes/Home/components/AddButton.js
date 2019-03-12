import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//import lime from '@material-ui/core/colors/lime';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

//const primary = lime['A400']; // #8bc34a


function AddButton(props) {
  const { classes } = props;

  return (

    <div>
      <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
    </div>

  );
}

    AddButton.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(AddButton);
