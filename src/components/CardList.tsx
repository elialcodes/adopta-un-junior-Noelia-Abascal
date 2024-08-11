import { Link } from 'react-router-dom';
import { MOTIVES } from '../assets/data';
import Card from './Card';

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
      <h3>
        Hola! Mi nombre es Noelia Abascal, soy de Santander y me encantaría
        formar parte de los grupos de trabajo de <i>Adopta un Junior</i>. Estos
        son mis motivos:
      </h3>
      <ul className="list">
        {MOTIVES.map((motive, index) => {
          return (
            <Card
              key={motive.id}
              description={motive.description}
              handleClick={onLikedReason}
              id={motive.id}
              like={likes[index]}
              title={motive.title}
            />
          );
        })}
      </ul>
      <section>
        <p>Likes: {totalLikes} Me gusta</p>
        <div>
          <Link to="/evaluation">Valoración final</Link>
        </div>
      </section>
    </main>
  );
}

export default CardList;
