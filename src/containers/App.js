import React from 'react';
import './App.scss';
import Container from '../components/Container';

export default function App() {
  return (
    <div className="App">
      <div className="languageBar">
        <Container>
          <div className="inner-languageBar">
            <p className="welcome">Welcome you to MeatBazar store</p>
            <div className="buttons">
              <button>En</button>
              <button>Ar</button>
              <button>Sign In</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
