import { useRef, useEffect, useState, useContext } from 'react';
import { WikiContext } from '../../store/wikiContext/WikiContext';

const NewResource = ({ setIsModal }) => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    url: '',
    tema: '',
    video: false,
    tutorial: false,
    blog: false,
  });

  const { addResource } = useContext(WikiContext);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);
  const clickOutsideRef = useRef(null);
  const handleClickOutside = (e) => {
    if (!clickOutsideRef.current.contains(e.target)) {
      setIsModal((prev) => !prev);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resource = {
      title: values.title,
      description: values.description,
      url: values.url,
      tema: values.tema,
      type: { video: values.video, tutorial: values.tutorial, blog: values.blog }
    }
    addResource(resource)
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black opacity-70 flex justify-center items-center"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div ref={clickOutsideRef} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
            <button
              type="button"
              className="btn btn-ghost btn-square absolute top-0 right-0"
              onClick={() => setIsModal((prev) => !prev)}
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
            <h2 className="text-center font-black mb-8 mt-6">Nuevo recurso</h2>
            <form
              className="flex flex-col items-center gap-3"
              onSubmit={handleSubmit}
            >
              <label htmlFor="title" className="sr-only">
                Título
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="input border-black w-full max-w-xs"
                placeholder="Título"
                value={values.title}
                onChange={handleChange}
              />
              <label htmlFor="description" className="sr-only">
                Descripión
              </label>
              <input
                id="description"
                name="description"
                type="text"
                required
                className="input border-black w-full max-w-xs"
                placeholder="Descripión"
                value={values.description}
                onChange={handleChange}
              />
              <label htmlFor="url" className="sr-only">
                URL
              </label>
              <input
                id="url"
                name="url"
                type="text"
                required
                className="input border-black w-full max-w-xs"
                placeholder="URL"
                value={values.url}
                onChange={handleChange}
              />
              <label htmlFor="tema" className="sr-only">
                Tema
              </label>
              <input
                id="tema"
                name="tema"
                type="text"
                required
                className="input border-black w-full max-w-xs"
                placeholder="Tema"
                value={values.tema}
                onChange={handleChange}
              />

              <div className="flex">
                <div className="flex items-center">
                  <input
                    id="video"
                    type="checkbox"
                    checked={values.video}
                    className="checkbox checkbox-primary"
                    onChange={handleChange}
                    name="video"
                  />
                  <label
                    htmlFor="video"
                    className="cursor-pointer label text-sm font-bold"
                  >
                    Vídeo
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="tutorial"
                    type="checkbox"
                    checked={values.tutorial}
                    className="checkbox checkbox-primary"
                    onChange={handleChange}
                    name="tutorial"
                  />
                  <label
                    htmlFor="tutorial"
                    className="cursor-pointer label text-sm font-bold"
                  >
                    Tutorial
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="blog"
                    type="checkbox"
                    checked={values.blog}
                    className="checkbox checkbox-primary"
                    onChange={handleChange}
                    name="blog"
                  />
                  <label
                    htmlFor="blog"
                    className="cursor-pointer label text-sm font-bold"
                  >
                    Blog
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-block btn-primary mt-6">
                <span className="text-gray-900">Crear</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewResource;
