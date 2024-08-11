import { Link } from 'react-router-dom';
import Card from './Card';
import { useLikes } from '../hooks/useLikes';

function CardList(): JSX.Element {
  const { reasons, handleLikedReason, totalLikes } = useLikes();
  return (
    <main>
      <h3>
        Hola! Mi nombre es Noelia Abascal, soy de Santander y me encantaría
        formar parte de los grupos de trabajo de Adopta un Junior. Estos son mis
        motivos:
      </h3>
      <ul className="list">
        {reasons.map((reason) => {
          return (
            <Card
              key={reason.id}
              reason={reason}
              handleClick={handleLikedReason}
            />
          );
        })}
      </ul>
      <section>
        <p>Likes: {totalLikes} Me gusta</p>
        <div>
          <Link to={'/valoration'}>
            <button>Valoración final</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CardList;
