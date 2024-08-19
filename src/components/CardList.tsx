import '../styles/CardList.css';
import { Link } from 'react-router-dom';
import { MOTIVES } from '../assets/data';
import Card from './Card';

interface CardListProps {
  likes: boolean[];
  onLikedReason(id: number): void;
  totalLikes: number;
}

function CardList({ likes, onLikedReason }: CardListProps): JSX.Element {
  return (
    <main>
      <h3 className="introduce">
        Hola! Soy Noelia Abascal, de Santander.
        <br />
        Estos son mis motivos para formar parte de <i>Adopta un Junior </i>:
      </h3>
      <ul className="list">
        {MOTIVES.map((motive, index) => {
          return (
            <Card
              key={motive.id}
              description={motive.description}
              handleClick={onLikedReason}
              id={motive.id}
              image={motive.image}
              like={likes[index]}
              title={motive.title}
            />
          );
        })}
      </ul>
      <section className="evaluation">
        <Link to="/evaluation" className="style-button">
          Valoración final
        </Link>
      </section>
    </main>
  );
}

export default CardList;
