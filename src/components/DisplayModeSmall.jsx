import AvatarTemp from "./AvatarTemp";
import rightArrow from "../assets/arrow_right.svg";

export default function DisplayModeSmall({
  user = { name: "user", points: 0 },
  position = "",
  currentUser = { name: "Nombre Apellido", points: 0 },
  week = null,
  level = null,
}) {
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
    backgroundColor = "bg-primary";
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
        <AvatarTemp>
          {user.points > 0 && (
            <span className={`indicator-item badge ${colorIndex}`}>
              {position}
            </span>
          )}
        </AvatarTemp>
        <div className="flex flex-col justify-center pl-6">
          <h2 className="font-bold text-black">{user.name}</h2>
          {week && <p>Semana {week}</p>}
          {level && <p>#Nivell {level}</p>}
        </div>
      </div>
      <div className="flex flex-row ">
        <p>
          <span className="font-bold text-black">{user.points} </span>
          <span className="text-xs text-black">ITAS</span>
        </p>
        <img className="w-6" src={rightArrow} alt="search" />
      </div>
    </div>
  );
}
