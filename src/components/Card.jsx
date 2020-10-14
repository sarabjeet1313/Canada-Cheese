import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class CheeseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cheeseId: this.props.cheeseId,
      cheeseName: this.props.cheeseName,
      langauge: this.props.language,
    };
  }
  render() {
    let cheeseName =
      this.props.language === "English"
        ? this.props.cheese.CheeseNameEn
        : this.props.cheese.CheeseNameFr;

    cheeseName = cheeseName === "" ? "Not Available/ indisponible" : cheeseName;

    let manufacturerName =
      this.props.language === "English"
        ? this.props.cheese.ManufacturerNameEn
        : this.props.cheese.ManufacturerNameFr;

    manufacturerName =
      manufacturerName === "" ? "Not Available/ indisponible" : manufacturerName;

    let manufacturingType =
      this.props.language === "English"
        ? this.props.cheese.ManufacturingTypeEn
        : this.props.cheese.ManufacturingTypeFr;

    let website =
      this.props.language === "English"
        ? this.props.cheese.WebSiteEn
        : this.props.cheese.WebSiteFr;

    website = website === "" ? "Not Available/ indisponible" : website;

    let particulars =
      this.props.language === "English"
        ? this.props.cheese.ParticularitiesEn
        : this.props.cheese.ParticularitiesFr;

    particulars =
      particulars === "" ? "Not Available/ indisponible" : particulars;

    let flavors =
      this.props.language === "English"
        ? this.props.cheese.FlavourEn
        : this.props.cheese.FlavourFr;

    flavors = flavors === "" ? "Not Available/ indisponible" : flavors;

    let characteristics =
      this.props.language === "English"
        ? this.props.cheese.CharacteristicsEn
        : this.props.cheese.CharacteristicsFr;

    characteristics =
      characteristics === "" ? "Not Available/ indisponible" : characteristics;

    let ripening =
      this.props.language === "English"
        ? this.props.cheese.RipeningEn
        : this.props.cheese.RipeningFr;

    ripening = ripening === "" ? "Not Available/ indisponible" : ripening;

    let categoryType =
      this.props.language === "English"
        ? this.props.cheese.CategoryTypeEn
        : this.props.cheese.CategoryTypeFr;

    categoryType =
      categoryType === "" ? "Not Available/ indisponible" : categoryType;

    let milkType =
      this.props.language === "English"
        ? this.props.cheese.MilkTypeEn
        : this.props.cheese.MilkTypeFr;

    milkType = milkType === "" ? "Not Available/ indisponible" : milkType;

    let milkTreatmentType =
      this.props.language === "English"
        ? this.props.cheese.MilkTreatmentTypeEn
        : this.props.cheese.MilkTreatmentTypeFr;

    milkTreatmentType =
      milkTreatmentType === ""
        ? "Not Available/ indisponible"
        : milkTreatmentType;

    let rindType =
      this.props.language === "English"
        ? this.props.cheese.RindTypeEn
        : this.props.cheese.RindTypeFr;

    rindType = rindType === "" ? "Not Available/ indisponible" : rindType;

    return (
      <Card border="primary" style={{ width: "100%" }} className="text-center">
        <Card.Header>{this.props.cheese.CheeseId}</Card.Header>
        <Card.Body>
          <Card.Title>{cheeseName}</Card.Title>

          <ListGroup variant="Details">
            <ListGroup.Item>
              Manufacturer Name - {manufacturerName}
            </ListGroup.Item>
            <ListGroup.Item>
              Manufacturer Provincial Code -{" "}
              {this.props.cheese.ManufacturerProvCode}
            </ListGroup.Item>
            <ListGroup.Item>
              Manufacturing Type - {manufacturingType}
            </ListGroup.Item>
            <ListGroup.Item>Website - {website}</ListGroup.Item>

            <ListGroup.Item>
              Fat Content Percentage - {this.props.cheese.FatContentPercent}
            </ListGroup.Item>
            <ListGroup.Item>
              Moisture Percentage - {this.props.cheese.MoisturePercent}
            </ListGroup.Item>
            <ListGroup.Item>Particularities - {particulars}</ListGroup.Item>
            <ListGroup.Item>Flavours - {flavors}</ListGroup.Item>
            <ListGroup.Item>Characteristics - {characteristics}</ListGroup.Item>
            <ListGroup.Item>Ripening - {ripening}</ListGroup.Item>
            <ListGroup.Item>
              Organic - {this.props.cheese.Organic}
            </ListGroup.Item>
            <ListGroup.Item>Category Type - {categoryType}</ListGroup.Item>
            <ListGroup.Item>Milk Type - {milkType}</ListGroup.Item>
            <ListGroup.Item>
              Milk Treatment Type - {milkTreatmentType}
            </ListGroup.Item>
            <ListGroup.Item>Rind Type - {rindType}</ListGroup.Item>
            <ListGroup.Item>
              Last Updated On - {this.props.cheese.LastUpdateDate}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>{this.props.language}</Card.Footer>
      </Card>
    );
  }
}

export default CheeseCard;
