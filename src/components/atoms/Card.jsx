function Card({ children, direction }) {
  return (
    <div
      className={`card w-100 bg-white shadow-xl bg-white p-5 ${
        direction ? `flex-row` : 'flex-col'
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
