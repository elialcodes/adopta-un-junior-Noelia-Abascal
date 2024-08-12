import '../styles/Evaluation.css';
import { Link } from 'react-router-dom';
import { calculateEvaluation } from '../utils/calculateEvaluation';
interface EvaluationProps {
  totalLikes: number;
}

function Evaluation({ totalLikes }: EvaluationProps): JSX.Element {
  return (
    <>
      <p className="evaluation-result">{calculateEvaluation(totalLikes)}</p>
      <Link to="/" className="style-button">
        Volver
      </Link>
    </>
  );
}

export default Evaluation;
