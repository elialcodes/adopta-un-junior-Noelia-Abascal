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
  like,
  title,
}: CardProps): JSX.Element {
  return (
    <li className="card">
      <figure className="card-figure">
        <img className="card-image" src={image} alt="" />
      </figure>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button
        className="style-button card-button"
        onClick={() => handleClick(id)}
      >
        <i
          id={`${id}`}
          className={`fa-regular fa-heart ${like ? 'card-button-like' : ''}`}
        />
      </button>
    </li>
  );
}

export default Card;
