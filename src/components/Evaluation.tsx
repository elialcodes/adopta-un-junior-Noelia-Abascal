import '../styles/Evaluation.css';
import { Link } from 'react-router-dom';
import { calculateEvaluation } from '../utils/calculateEvaluation';
interface EvaluationProps {
  totalLikes: number;
}

function Evaluation({ totalLikes }: EvaluationProps): JSX.Element {
  return (
    <div className="evaluation-page">
      <p className="evaluation-page-result">
        {calculateEvaluation(totalLikes)}
      </p>
      <Link to="/" className="style-button evaluation-page-button">
        Volver
      </Link>
    </div>
  );
}

export default Evaluation;
