import Navbar from "./components/Navbar"
import React from 'react';
import ReactDOM from 'react-dom';
export default function App() {
  return (
    <div>
      <Navbar author="first one" text="first text"/>
      <Navbar author="second one" text="second text"/>
      <h1>hello</h1>
    </div>
  )
}