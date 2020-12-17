import colors from "./colors";

const PlayNumber = (props) => (
  <button
    className="number"
    onClick={() => console.log("Num", props.number)}
    style={{ backgroundColor: colors[props.status] }}
  >
    {props.number}
  </button>
);

export default PlayNumber;
