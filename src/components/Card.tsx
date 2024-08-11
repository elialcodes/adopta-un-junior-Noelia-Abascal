interface CardProps {
  reason: {
    id: number;
    title: string;
    description: string;
    like: boolean;
  };
  handleClick: (id: number) => void;
}

function Card({ reason, handleClick }: CardProps): JSX.Element {
  return (
    <li className="li-card">
      <h3>{reason.title}</h3>
      <p>{reason.description}</p>
      <button onClick={() => handleClick(reason.id)}>
        <i id={`${reason.id}`} className="fa-regular fa-heart" />
      </button>
    </li>
  );
}

export default Card;
