import { useRef, useEffect, useState } from 'react';

const NewResource = ({ setIsModal }) => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    url: '',
    video: false,
    tutorial: false,
    blog: false,
  });

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
    // utilizare addResourse del context para enviar datos de new resourse
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black opacity-70 flex justify-center items-center">
      <div ref={clickOutsideRef} className="relative bg-white rounded-2xl z-50">
        <div className="flex flex-col justify-center p-5 pb-7 rounded-t dark:border-gray-600">
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
          <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
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
            <div className="flex">
              {' '}
              {/* checkboxes */}
              <div className="flex items-center">
                <input
                  id="video"
                  type="checkbox"
                  checked={values.video}
                  class="checkbox checkbox-primary"
                  onChange={handleChange}
                  name="video"
                />
                <label
                  htmlFor="video"
                  class="cursor-pointer label text-sm font-bold"
                >
                  Vídeo
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="tutorial"
                  type="checkbox"
                  checked={values.tutorial}
                  class="checkbox checkbox-primary"
                  onChange={handleChange}
                  name="tutorial"
                />
                <label
                  htmlFor="tutorial"
                  class="cursor-pointer label text-sm font-bold"
                >
                  Tutorial
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="blog"
                  type="checkbox"
                  checked={values.blog}
                  class="checkbox checkbox-primary"
                  onChange={handleChange}
                  name="blog"
                />
                <label
                  htmlFor="blog"
                  class="cursor-pointer label text-sm font-bold"
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
  );
};

export default NewResource;
