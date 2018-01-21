import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: '#7b675a',
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: '#ffffff',
    },
    width: '230px',
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
});

function SignupInput(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          Enter your email
        </InputLabel>
        <Input
          classes={{
            inkbar: classes.inputInkbar,
          }}
          id="custom-color-input"
          type="email"
          onChange={event => {
            props.onEmailInputChange(event);
          }}
        />
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(SignupInput);
