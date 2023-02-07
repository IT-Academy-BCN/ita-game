import AvatarLeaderBoard from "./AvatarLeaderBoard";

export default function SmallCard({ user, position, currentUser }) {
  console.log("hola", user, position, currentUser);
  let borderColor = "";
  if (position === 1) {
    borderColor = "border-8 border-yellow-500";
  } else if (position === 2) {
    borderColor = "border-8 border-gray-500";
  } else if (position === 3) {
    borderColor = "border-8 border-red-500";
  }

  let backgroundColor = "";
  if (user.name === currentUser.name) {
    backgroundColor = "bg-green-500";
  } else {
    backgroundColor = "bg-white";
  }

  return (
    <div
      className={`card flex flex-row justify-between items-center p-4 my-2 mx-6 ${borderColor} ${backgroundColor}`}
    >
      <div className="flex flex-row">
        <AvatarLeaderBoard>
          <span className="indicator-item badge badge-secondary">
            {position}
          </span>
        </AvatarLeaderBoard>
        <div className="flex flex-col justify-center pl-6">
          <h2 className="font-bold">{user.name}</h2>
          <p>#Nivell 5</p>
        </div>
      </div>
      <div className="flex flex-row ">
        <p>
          <span className="font-bold">{user.points} </span>
          <span className="text-xs">ITAS</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
