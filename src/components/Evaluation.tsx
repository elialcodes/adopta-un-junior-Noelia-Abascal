import { Link } from 'react-router-dom';
import { calculateEvaluation } from '../utils/calculateEvaluation';

interface EvaluationProps {
  totalLikes: number;
}

function Evaluation({ totalLikes }: EvaluationProps): JSX.Element {
  return (
    <>
      <p>{calculateEvaluation(totalLikes)}</p>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </>
  );
}

export default Evaluation;
