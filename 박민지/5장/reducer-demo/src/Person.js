function Person({ name, dispatch, id, isHere }) {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({
            type: "change-here",
            payload: {
              id,
              isHere,
            },
          });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: "delete",
            payload: {
              id,
            },
          });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Person;
