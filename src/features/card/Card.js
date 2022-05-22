import product1 from '../../assets/image/product1.jpg'

export default function Card(props) {
  return (
    <div className="card" style={{ width: "18rem", margin:'20px'}}>
      <img class="card-img-top" src={product1} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Rs.137.00</p>
        <p className="card-text">
          Peek Freans Chocolate Sandwich Biscuit Half Roll Box
        </p>
        <p className="card-text">PEEK FREANS </p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
