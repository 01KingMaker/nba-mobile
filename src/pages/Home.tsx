import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const redirectFunc = (url: string) => {
    // Use the history object to navigate to the specified URL
    history.push(url);
  };

  return (
    <>
      <div className='container '>
        <h1 className='display-3 has-text-info'>Listes des équipes</h1>
        <ul className="list-group mt-3">
          {/* Use the redirectFunc on click of the list item */}
          <li className="list-group-item" onClick={() => redirectFunc('/teams/1/stats')}>
            Los Angeles Lakers
          </li>
          <li className="list-group-item" onClick={() => redirectFunc('/teams/2/stats')}>
            Philadeplhia 76ers
          </li>
          <li className="list-group-item" onClick={() => redirectFunc('/teams/3/stats')}>
            Los Angeles Clippers
          </li>
          <li className="list-group-item" onClick={() => redirectFunc('/teams/4/stats')}>
            Boston Celtics
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
