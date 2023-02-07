export default function AvatarLeaderBoard({ children }) {
  return (
    <div className="avatar indicator">
      {children}
      <div className="w-14 rounded-full bg-primary">
        <img src="public/homer.png" />
      </div>
    </div>
  );
}

// <div className="avatar">6
//   <div className="w-24 rounded-full">
//     <img src="public/homer.webp" />
//   </div>
// </div>
