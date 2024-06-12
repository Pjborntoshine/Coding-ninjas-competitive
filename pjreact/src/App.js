import React from "react";
import "./styles.css";

export const Card = ({ name, about }) => (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
    <img role="img" />
  </div>
);

export default function App() {
  return <Card name="Pranav" about="Hi,my name is Pranav Yeole" />;
}