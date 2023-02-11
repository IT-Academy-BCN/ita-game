function Card({ children, direction }) {
   return (
      <div className={`card w-100 shadow-xl bg-white p-5 ${direction ? `flex-row` : 'flex-col'} flex-wrap`}>
         {children}
      </div>
   );
}

export default Card;
