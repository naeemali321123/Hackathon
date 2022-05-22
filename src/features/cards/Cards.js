import "./Cards.css";
import Card from "../card/Card";
export default function Cards() {
  return (
    <div>
      <h1 id="heading">Products</h1>
      <div id="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
