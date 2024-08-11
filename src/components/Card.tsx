interface CardProps {
  reason: {
    id: number;
    motive: string;
    description: string;
  };
}

function Card({ reason }: CardProps): JSX.Element {
  return (
    <li className="li-card">
      <h3>{reason.motive}</h3>
      <p>{reason.description}</p>
      <i className="fa-regular fa-heart"></i>
    </li>
  );
}

export default Card;
