import { Link } from 'react-router-dom';
import { MOTIVES } from '../assets/data';
import Card from './Card';
import '../styles/CardList.css';

interface CardListProps {
  likes: boolean[];
  onLikedReason(id: number): void;
  totalLikes: number;
}

function CardList({
  likes,
  onLikedReason,
  totalLikes,
}: CardListProps): JSX.Element {
  return (
    <main>
      <h2>
        Hola! Mi nombre es Noelia Abascal, soy de Santander.
        <br />
        Me encantaría formar parte de los grupos de trabajo de{' '}
        <i>Adopta un Junior</i>, estos son mis motivos:
      </h2>
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
      <section>
        <h3>Likes: {totalLikes} Me gusta</h3>
        <Link to="/evaluation" className="style-button">
          Valoración final
        </Link>
      </section>
    </main>
  );
}

export default CardList;
