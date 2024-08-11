import { Link } from 'react-router-dom';
import { calculateEvaluation } from '../utils/calculateEvaluation';

interface EvaluationProps {
  totalLikes: number;
}

function Evaluation({ totalLikes }: EvaluationProps): JSX.Element {
  return (
    <>
      <p>{calculateEvaluation(totalLikes)}</p>
      <Link to="/" className="style-button">
        Volver
      </Link>
    </>
  );
}

export default Evaluation;
