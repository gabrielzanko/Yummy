import logo from './logo.svg';
import classes from './App.css';
import React from 'react';
import Layout from "./containers/Layout/Layout";
import background from "./resources/images/background3.jpg";

function App() {

    const backgroundStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + background + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
    };
  return (
    <div className={classes.App} style={backgroundStyle}>
      <Layout/>
    </div>
  );
}

export default App;
