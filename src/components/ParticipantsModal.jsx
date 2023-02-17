import { useState, useEffect } from 'react';
import axios from 'axios';

const ParticipantsModal = ({ setOpenModal }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/vicenlu/ita-game/contributors', {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })
      .then((response) => {
        setContributors(response.data);
      });
  }, []);
  console.log(contributors);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black opacity-70 flex justify-center items-center"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pb-28">
        <div className="relative sm:w-32 md:w-96 mt-96">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full mt-12  bg-white outline-none focus:outline-none py-2 px-12">
            <button
              type="button"
              className="btn btn-ghost btn-square absolute top-0 right-0"
              onClick={() => setOpenModal((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-start text-xl font-black mb-8 mt-6">
              Equipo Frontend
            </h2>
            <div className="flex flex-col gap-1">
              {contributors.map((contributor) => (
                <div className="flex flex-row items-center gap-3">
                  <div className="avatar">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                      <img
                        className="w-11"
                        src={contributor.avatar_url}
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="font-semibold hover:font-black"
                    href={contributor.html_url}
                  >
                    {contributor.login}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticipantsModal;
