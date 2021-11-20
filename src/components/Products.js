import React from "react";
import { Heading } from "./Heading";
import product1 from '../assets/images/product-1.jpg';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

export const Products = () => {
  return (
    <section className="product-section">
      <Heading />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                  

                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                

                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                
                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                
                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                
                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
          <div className="col-md-4">
            <div className="product-card">
              <MDBCard style={{border:"none"}} >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={product1}
                    fluid
                    alt="..."
                  />
                
                </MDBRipple>
                  <MDBCardBody>
        <MDBCardTitle className="text-center"><a href="home">HAUTEVILLE CONCRETE ROCKING CHAIR</a></MDBCardTitle>
        <MDBCardText className="text-center">
           Price 400$
        </MDBCardText>
        
      </MDBCardBody>
              </MDBCard>
            </div>
        
          </div>
         
        </div>
      </div>
    </section>
  );
};
