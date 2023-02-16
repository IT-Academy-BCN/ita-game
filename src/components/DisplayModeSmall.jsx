import rightArrow from "../assets/arrow_right.svg";
import Avatar from "./Avatar/Avatar";

export default function DisplayModeSmall({
  user = { name: "user", points: 0 },
  position = "",
  currentUser = { name: "Nombre Apellido", points: 0 },
  week = null,
  level = null,
}) {
  let borderColor = "";
  if (position === 1) {
    borderColor = "border-2 border-yellow-500"; // cambiarlo por oro
  } else if (position === 2) {
    borderColor = "border-2 border-gray-500"; // cambiarlo por plata
  } else if (position === 3) {
    borderColor = "border-2 border-red-500"; // cambair por bronce
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
      <div className="flex">
        <div className="flex w-16">
          <Avatar className="w-14 h-14" />
          {user.points && (
            <span
              className={`flex font-semibold z-[100] items-center justify-center border-white w-[25px] h-[25px] border-2 absolute right-0 bottom-[55px] left-14 rounded-full text-center text-[10px]  text-black ${colorIndex}`}
            >
              {position}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center pl-6">
          <h2 className="font-bold text-black">{user.name}</h2>
          {week && <p>Semana {week}</p>}
          {level && <p>#Nivell {level}</p>}
        </div>
      </div>
      <div className="flex">
        <p>
          <span className="font-bold text-black">{user.points} </span>
          <span className="text-xs text-black">ITAS</span>
        </p>
        <img className="w-6" src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
}
