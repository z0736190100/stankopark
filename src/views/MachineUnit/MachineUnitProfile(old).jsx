import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
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

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function MachineUnitProfile(props) {
  const { classes } = props;


  // KUNG-FUSION: i18n of form field labels - how to?
  // should i make a model class for form?
  // here we define order of form fields appearance

  const formIds = {
    inventoryNumber: "inventoryNumber",
    usage: "usage",
    producerBrand: "producerBrand",
    model: "model",
    serialNumber: "serialNumber",
    voltage: "voltage",
    power: "power",
    description: "description"
  };

  const formInputIdLabelMap = {};

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color={"primary"}>
              <h4
                className={classes.cardTitleWhite}
                style={{ "font-family": "Roboto Slab" }}
              >
                {"Паспорт оборудования"}
              </h4>
              <p
                className={classes.cardCategoryWhite}
                style={{ "font-family": "Roboto" }}
              >
                {"Внесите информацию, чтобы отредактировать"}
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText={"Инвент. номер"}
                    id={"inventoryNumber"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                  <CustomInput
                    labelText={"Назначение"}
                    id={"usage"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={"Производитель"}
                    id={"producerBrand"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={"Модель"}
                    id={"model"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={"Серийный номер"}
                    id={"serialNumber"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText={"Вольтаж"}
                    id={"voltage"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText={"Мощность"}
                    id={"power"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText={"Документация (ссылка на файл)"}
                    id={"documentation"}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {/*<InputLabel style={{ color: "#AAAAAA" }}></InputLabel>*/}
                  <CustomInput
                    labelText={"Описание"}
                    id={"description"}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color={"primary"}>Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href={"#pablo"} onClick={e => e.preventDefault()}>
                <img src={avatar} alt={"...."} />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{"ЖУРНАЛ"}</h6>
              <h4 className={classes.cardTitle}>
                {"(перечень проведенных мероприятий)"}
              </h4>
              <p className={classes.description}>
                {
                  "--выборка из общего журнала техобслуживания в табличном виде--"
                }
              </p>
              <Button color={"primary"} round>
                {"ПЕРЕЙТИ"}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(MachineUnitProfile);
