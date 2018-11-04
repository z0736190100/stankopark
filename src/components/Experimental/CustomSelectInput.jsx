import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";

import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "@material-ui/core/es/Select/Select";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";

//FIXME:
function CustomSelectInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    labelProps,
    selectProps,
    inputProps,
    id,
    error,
    success,
    startAdornment,
    menuValues,
    helperText
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });

  //FIXME:
  const menuItemRenderHelper = () => {
    return menuValues ? (
      menuValues.map(element => (
        <MenuItem key={element.value} value={element.value}>
          {element.text}
        </MenuItem>
      ))
    ) : (
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
    );
  };

  //FIXME:
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        {...selectProps}
        id={"select-" + id}
        onChange={event => props.onChange(event)}
        className={classes.textField}
        margin={"none"}
        value={inputProps.value}
        input={
          <Input
            classes={{
              root: marginTop,
              disabled: classes.disabled,
              underline: underlineClasses
            }}
            {...inputProps}
            startAdornment={
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            }
          />
        }
      >
        {menuItemRenderHelper()}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomSelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomSelectInput);
