import { Navbar } from "../components";

function Information() {
  return (
    <div>
      <Navbar>Información y normativa</Navbar>
      <h1 className="mt-8 ml-7 mb-6 text-base font-bold text-black">
        Instrucciones para ganar puntos
      </h1>
      <div className="d-flex relative m-4 mb-7 flex-col rounded-3xl bg-white p-4 shadow-md">
        <img
          className="w-22 absolute top-[-1rem] right-2 h-24"
          src="src/components/assets/search.svg"
          alt="search"
        />
        <h2 className="mt-4 text-xl font-bold text-black">
          Revisiones de código
        </h2>
        <p className="mt-4 text-sm capitalize text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="d-flex relative m-4 mb-7 flex-col rounded-3xl bg-white p-4 shadow-md">
        <img
          className="absolute top-[-0.8rem] right-4 w-20"
          src="src/components/assets/new-folder-dynamic-color.svg"
          alt="search"
        />
        <h2 className="mt-6 text-xl font-bold text-black">
          Colaboración en la wiki
        </h2>
        <p className="mt-4 text-sm capitalize text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="d-flex relative m-4 flex-col rounded-3xl bg-white p-4 shadow-md">
        <img
          className="absolute top-[-1.7rem] right-3 w-24"
          src="src/components/assets/thumb-up-dynamic-color.svg"
          alt="search"
        />
        <h2 className="mt-6 text-xl font-bold text-black">
          Resolución de dudas
        </h2>
        <p className="mt-4 text-sm capitalize text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
}

export default Information;
