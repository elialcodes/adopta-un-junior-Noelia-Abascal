import Heart from './Heart';
import { reasons } from '../assets/data';

interface Reason {
  id: number;
  motive: string;
  description: string;
}

function Card(): JSX.Element {
  return (
    <div>
      <h3>card</h3>
      <ul>
        {reasons.map((reason) => {
          return (
            <li key={reason.id}>
              <p>{reason.motive}</p>
              <p>{reason.description}</p>
              <Heart />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
