import { useDispatch, useSelector } from "react-redux";
import { addData, fetchData } from "../../store/example/example.action";
import { getExampleObjects } from "../../store/example/example.selector";

const Functional = () => {
  const examples = useSelector(getExampleObjects);
  const dispatch = useDispatch();



  const onClickHandler = () => {
    dispatch(fetchData());
  };
  const onAddClickHandler = () => {
    const data = {
      description: "todos5",
      isDone: false,
    };

    dispatch(addData(data));
  };

  return (
    <div>
      Functional Page
      <button onClick={onClickHandler}>Getir</button>
      <button onClick={onAddClickHandler}>Add</button>
      {examples.data.map((example) => (
        <div key={example.id}>{example.description}</div>
      ))}
    </div>
  );
};

export default Functional;
