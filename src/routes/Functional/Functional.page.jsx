import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/example/example.action";
import { getExampleObjects } from "../../store/example/example.selector";

const Functional = () => {
  const examples = useSelector(getExampleObjects);
  const dispatch = useDispatch();

  console.log(examples);

  const onClickHandler = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      Functional Page
      <button onClick={onClickHandler}>Getir</button>
      {examples.data.map((example) => (
        <div key={example.id}>{example.description}</div>
      ))}
    </div>
  );
};

export default Functional;
