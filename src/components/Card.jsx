import AvatarLeaderBoard from "./AvatarLeaderBoard";

export default function Card({ user }) {
  return (
    <div className="card bg-white  flex flex-col p-6 content-around mx-6 mt-6">
      <div className="flex flex-row justify-around">
        <AvatarLeaderBoard />
        <div className="flex flex-col">
          <p>{user.name}</p>

          <p>Nivel 5</p>
          <p>{user.points} ITAS</p>
        </div>
      </div>
      <div className="card-actions justify-end pt-6">
        <button className="btn btn-block btn-primary">
          Premios conseguidos
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
        </button>
      </div>
    </div>
  );
}
