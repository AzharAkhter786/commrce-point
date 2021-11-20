import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
} from "mdb-react-ui-kit";

export const Services = () => {
  return (
    <section className="services">
      <div className="wrap-Center-Content">
      <div className="container wrap-Center-Content-child">
        <div className="row">    
          <div className="col-md-4">
            <div className="services-content">
            <MDBCard style={{ maxWidth: "22rem" , background: "transparent",border:"none"}} className="border-none" >
                <MDBCardBody>
                  <MDBCardTitle className="text-center"><i>icons</i></MDBCardTitle>
                  <MDBCardTitle className="text-center"><h6>CREDIT CARD</h6></MDBCardTitle>
                  <MDBCardText className="text-center">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-content">
            <MDBCard style={{ maxWidth: "22rem" , background: "transparent",border:"none"}} className="border-none" >
                <MDBCardBody>
                  <MDBCardTitle className="text-center"><i>icons</i></MDBCardTitle>
                  <MDBCardTitle className="text-center"><h6>CREDIT CARD</h6></MDBCardTitle>
                  <MDBCardText className="text-center">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-content">
            <MDBCard style={{ maxWidth: "22rem" , background: "transparent",border:"none"}} className="border-none" >
                <MDBCardBody>
                  <MDBCardTitle className="text-center"><i>icons</i></MDBCardTitle>
                  <MDBCardTitle className="text-center"><h6>CREDIT CARD</h6></MDBCardTitle>
                  <MDBCardText className="text-center">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
             
            </div>
          </div>
         
        </div>
      </div> 
      </div>  
     
    </section>
  );
};
