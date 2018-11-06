import React from "react";
import _ from "lodash";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/gh_logo.png";
import formFields from "./machineUnitFormFields";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import CustomSelectInput from "components/Experimental/CustomSelectInput.jsx";
//import CustomSelectInput from "@material-ui/core/es/CustomSelectInput/CustomSelectInput";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontFamily: "Roboto",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto Slab', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function Experimental(props) {
  const { classes } = props;

  // KUNG-FUSION: i18n of form field labels - how to?

  let formState = {};
  const menuItemValues = [
    {
      value: 220,
      text: 220
    },
    {
      value: 380,
      text: 380
    }
  ];

  const changeFormState = fs => {
    formState[fs.id] = fs.value;
    console.log(JSON.stringify(formState));
  };

  const formFieldsRenderer = () => {
    return _.map(formFields, ({ inputProps, itemBreakpoints }) => {
      return (
        <GridItem key={inputProps.name} {...itemBreakpoints}>
          <CustomInput
            onChange={event => changeFormState(event.target)}
            {...inputProps}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
      );
    });
  };

  const saveMachineUnit = unit => {
    axios.post("/api/machine_units", unit);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color={"primary"}>
              <h4 className={classes.cardTitleWhite}>
                {"Паспорт оборудования"}
              </h4>
              <p className={classes.cardCategoryWhite}>
                {"Внесите информацию, чтобы отредактировать"}
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>{formFieldsRenderer()}</GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    error={true}
                    onChange={event => changeFormState(event.target)}
                    labelText={"Описание"}
                    id={"description"}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    endAdornment={
                      <InputAdornment position="end">V</InputAdornment>
                    }
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomSelectInput
                    onChange={event => props.selectOC(event)}
                    labelText={"Напряжение"}
                    helperText={"Выберите значение"}
                    startAdornment={"V"}
                    menuValues={menuItemValues}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "voltage",
                      id: "voltage",
                      value: props.iii
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color={"primary"}
                onClick={() => saveMachineUnit(formState)}
              >
                {"Сохранить изменения"}
              </Button>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} />
              </GridContainer>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#rr">
                <img src={avatar} />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{"ЖУРНАЛ"}</h6>
              <h4 className={classes.cardTitle}>{props.iii}</h4>
              <p className={classes.description}>
                {
                  "--выборка из общего журнала техобслуживания в табличном виде--"
                }
              </p>
              <Button color={"primary"}>{"TEST"}</Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Experimental);
