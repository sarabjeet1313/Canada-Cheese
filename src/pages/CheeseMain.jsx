import React, { Component } from "react";
import CheeseCard from "../components/Card";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/main.css";

class CheeseMain extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.setEnglishLanguage = this.setEnglishLanguage.bind(this);
    this.setFrenchLanguage = this.setFrenchLanguage.bind(this);

    this.state = {
      cheeseList: [],
      language: "English",
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("canadianCheeseDirectory.json", {
      headers: { 'Content-Type': 'application/json' },
      crossDomain:true,
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ cheeseList: result.CheeseDirectory });
      });
  }

  setEnglishLanguage = () => {
    console.log("English");
    this.setState({
      language: "English",
    });
  };

  setFrenchLanguage = () => {
    console.log("French");
    this.setState({
      language: "French",
    });
  };

  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark" className="navStyle">
          <Navbar.Brand href="/"> Canada Cheese </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link active href="/">
                Home
              </Nav.Link>
              <NavDropdown active title="Language" id="nav-dropdown">
                <NavDropdown.Item onClick={() => this.setEnglishLanguage()}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.setFrenchLanguage()}>
                  French
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="row">
          {this.state.cheeseList.length > 0 ? (
            this.state.cheeseList.map((cheese) => (
              <div className="col-md-4 crd cardStyle" key={cheese.CheeseId}>
                {}
                <CheeseCard cheese={cheese} language={this.state.language} />
              </div>
            ))
          ) : (
            <section className="container alert alert-info" role="alert">
              Loading ...
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default CheeseMain;
