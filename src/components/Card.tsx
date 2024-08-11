import '../assets/images/computer.jpg';

import '../styles/Card.css';
interface CardProps {
  description: string;
  handleClick: (id: number) => void;
  id: number;
  image: string;
  like: boolean;
  title: string;
}

function Card({
  description,
  handleClick,
  id,
  image,
  title,
}: CardProps): JSX.Element {
  return (
    <li className="card">
      <div className="card-image-title">
        <figure className="card-figure">
          <img className="card-image" src={image} alt="" />
        </figure>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-text">
        <p className="card-description">{description}</p>
        <button
          className="style-button card-button"
          onClick={() => handleClick(id)}
        >
          <i id={`${id}`} className="fa-regular fa-heart" />
        </button>
      </div>
    </li>
  );
}

export default Card;
