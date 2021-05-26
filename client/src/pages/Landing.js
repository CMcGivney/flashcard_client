import React from 'react';

const landingStyle = {
  backgroundImage: "url(https://picsum.photos/900/900?random=1)",
  backgroundSize: "cover",
  backgroundPosition: "50% 0px",
  minHeight: "100vh",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent:"center",

}
const textStyle = {
  color: "white",
  textShadow: "1px 1px 3px black",
  zIndex: "1",
  fontSize: "2em",
  fontWeight: "400",
  padding: "1rem 1rem",
  margin: "0 .5em",
}
const Landing = () => {
 

 
 return(
  <div style={landingStyle}>
  <h1 style={textStyle}>This GraphQL project was built after running through a few tutorials and piecing things together.</h1>
  <p style={textStyle}>I am learning GraphQL, ApolloClient/Server and MongoDB, So I put together a flashcard/social media style app to take what I have learned and build with it. I feel some of my error handling has been buggy in the development environment, need to write some tests to ensure safe deployment.</p>
  <p style={textStyle}>Setting up the Authorization pages and logic was fun, challenging and interesting. Working with cached Tokens directly was a first for me.</p>
  
  </div>
 )
}

export default Landing;