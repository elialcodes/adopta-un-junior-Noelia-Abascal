interface CardProps {
  description: string;
  handleClick: (id: number) => void;
  id: number;
  like: boolean;
  title: string;
}

function Card({
  description,
  handleClick,
  id,
  // like,
  title,
}: CardProps): JSX.Element {
  return (
    <li className="li-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => handleClick(id)}>
        <i id={`${id}`} className="fa-regular fa-heart" />
      </button>
    </li>
  );
}

export default Card;
