import { useState } from 'react';
import NewResource from '../components/organisms/NewResource';

const Wiki = () => {
   const [ isModal, setIsModal ] = useState(false)
  
  return (
    <div className='min-h-screen'>
      {/* modal trigger button, Sergio localiza donde tu quieras este boton*/}
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsModal(prev => !prev)}
      >
        Toggle modal
      </button>
     {isModal && <NewResource setIsModal={setIsModal}/> }
    </div>
  );
};

export default Wiki;
