import AvatarLeaderBoard from "./AvatarLeaderBoard";

export default function SmallCard({ user, position, currentUser }) {
  console.log("hola", user, position, currentUser);
  let borderColor = "";
  if (position === 1) {
    borderColor = "border-4 border-yellow-500";
  } else if (position === 2) {
    borderColor = "border-4 border-gray-500";
  } else if (position === 3) {
    borderColor = "border-4 border-red-500";
  }

  let backgroundColor = "";
  if (user.name === currentUser.name) {
    backgroundColor = "bg-green-500";
  } else {
    backgroundColor = "bg-white";
  }

  let colorIndex = "";
  if (user.name === currentUser.name) {
    colorIndex = "badge-secondary"; // no se puede escoger directamente el color que quieres. Hay que escoger entre primary, secondary, neutral y algunos más.
  } else {
    colorIndex = "badge-primary";
  }

  return (
    <div
      className={`card flex flex-row justify-between items-center p-4 my-2 mx-6 ${borderColor} ${backgroundColor}`}
    >
      <div className="flex flex-row">
        <AvatarLeaderBoard>
          <span className={`indicator-item badge ${colorIndex}`}>
            {position}
          </span>
        </AvatarLeaderBoard>
        <div className="flex flex-col justify-center pl-6">
          <h2 className="font-bold text-black">{user.name}</h2>
          <p>#Nivell 5</p>
        </div>
      </div>
      <div className="flex flex-row ">
        <p>
          <span className="font-bold text-black">{user.points} </span>
          <span className="text-xs text-black">ITAS</span>
        </p>
        <img
          className="w-6"
          src="src/components/assets/arrow_right.svg"
          alt="search"
        />
      </div>
    </div>
  );
}
