import AvatarTemp from "./AvatarTemp";

export default function DisplayMode({ user }) {
  return (
    <div className="card bg-white  flex flex-col p-6 content-around mx-6 mt-6">
      <div className="flex flex-row justify-start">
        <AvatarTemp />
        <div className="flex flex-col pl-6">
          <p className="text-black font-bold">{user.name}</p>
          <p>jQuery</p>
          <div className="flex flex-row ">
            <img
              className="rounded-full border-2 mr-4"
              src="src/components/assets/medal.svg"
            />
            <div>
              <p className="text-black font-bold">Nivel 5</p>
              <p>{user.points} ITAS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions justify-end pt-6">
        <button className="btn btn-block btn-base flex flex-row justify-around">
          <img src="src/components/assets/cup.svg" />

          <span>Premios conseguidos</span>
          <img
            className="w-6"
            src="src/components/assets/arrow_right.svg"
            alt="search"
          />
        </button>
      </div>
    </div>
  );
}
