const ResourcesCard = ({ title, likes, description, createdOn, createdBy }) => {
  return (
    <div className="flex flex-row border-[1px] mb-5 border-secondary w-[90%] p-3 rounded-xl">
      {/* CONTADOR DE PUNTOS */}
      <div className="mx-4 mt-2">
        {/* ICONO ARRIBA */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-secondary hover:text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        <p className="font-bold text-center">{likes}</p>
        {/* FLECHA ABAJO */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-secondary hover:text-error"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="p-1 ml-2">
        <div className="flex justify-between ml-3">
          <p className="font-bold">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-secondary "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
        <p className="font-bold text-sm text-secondary ml-3">{description}</p>

        <div className="flex flex-row items-center mt-5 ml-3">
          {/* AVATAR */}
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">AA</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-secondary text-xs ml-3">
              {createdBy},
              {new Date(createdOn).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
