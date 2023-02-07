function Card({ children }) {
  return (
    <div className="card w-100 bg-white shadow-xl bg-white p-5 flex flex-column">
      {children}
    </div>
  );
}

export default Card;
