
import { CardImg, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, buttonLabel, Container, Row, Col } from 'reactstrap';
import About1 from './About1.jpg'
import styled from 'styled-components'
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>

          <ImageContainer>
  
            <div className="Image1">
              <Row>
                <Col xs="6">

                  <CardImg width="100%" height="350rem" src={require('./About1.jpg')} />
                </Col>
                <Col>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Col>
              </Row>
            </div>
            <div className="Image">
              <Row>
                <Col>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Col>
                <Col xs="6">

                  <CardImg width="100%" height="350rem" src={require('./About2.jpg')} />
                </Col>
              </Row>
            </div>
          </ImageContainer>
        </Container>
        <Footer />
      </div>
    )
  }
}


const ImageContainer = styled.footer`


bout{
  background-color: #cccccc;
}

.Image1{
  background-color: #cccccc;
  background-image:url("About1.jpg");

  margin-top:10px;
}
.Image{
  background-color: #cccccc;
  background-image:url("About1.jpg");
  padding-top:20px;
}
`;

