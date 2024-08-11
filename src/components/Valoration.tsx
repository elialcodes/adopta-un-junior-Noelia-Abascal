import { useLikes } from '../hooks/useLikes';

function Valoration(): JSX.Element {
  const { rate } = useLikes();
  return <p>{rate}</p>;
}

export default Valoration;
