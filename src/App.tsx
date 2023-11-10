import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import desert from "./images/desert.png"

function App() {
    return (
        <div className="App">
            <Card>
                <img src={desert} alt="image"/>
                <h1>Headline</h1>
                <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            </Card>
        </div>
    );
}

    export default App;

    const Card = styled.div`
      margin-top: 100px;
      width: 18.75rem;
      height: 21.875rem;
      background-color: #fff;
      border-radius: 0.9375rem;
      box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
      display: flex;
      flex-direction: column;
    
      img {
        width: 17.5rem;
        height: 10.625rem;
        flex-shrink: 0;
        border-radius: 0.625rem;
        background-color: darkgray;
        margin: 0.62rem 0 0 0.62rem;
        
      }
    
      h1 {
        color: #000;
        font-family: Inter, sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 1.25rem 0 0 1.25rem;
      }
      
      p{
        width: 16.25rem;
        color: #ABB3BA;
        font-family: Inter, sans-serif;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25rem;
        margin: 1.25rem 1.25rem 0 1.25rem;
      }
    
    `
