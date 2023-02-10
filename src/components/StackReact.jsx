import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WikiContext } from '../store/wikiContext/WikiContext';

function Stack() {
  const [display, setDisplay] = useState([]);
  const { stackData, getStackData, addResource } = useContext(WikiContext);
  const location = useLocation();

  let newdata = location.pathname;
  let newnewnew = newdata.replace('/', '');
  console.log(stackData);

  useEffect(() => {
    if (stackData.length === 0) {
      getStackData(newnewnew);
    }
  }, []);

  let fakeData = {
    id: 'react-1',
    title: 'Context en 20 minutos',
    description: 'Teoría con ejemplos',
    url: 'https://www.youtube.com/watch?v=gigKP6PPmW0',
    type: { video: true, tutorial: true, blog: false },
  };

  return (
    <div>
      {stackData.map((e) => (
        <p>{e.title}</p>
      ))}
      <button onClick={() => addResource()}> add resource</button>
    </div>
  );
}

export default Stack;
