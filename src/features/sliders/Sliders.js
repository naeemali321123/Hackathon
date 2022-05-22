import Image1 from '../../assets/image/1.jpg'
import Image2 from '../../assets/image/2.jpg'
import Image3 from '../../assets/image/3.jpg'
import Image4 from '../../assets/image/4.jpg'
import Image5 from '../../assets/image/5.jpg'

export default function Sliders() {
  return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <buttondfs
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></buttondfs>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}
