import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Player {
  idJoueur: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  hashMapState: {
    [key: string]: number;
  };
}

interface StatisticByTeamProps {
  id: string; // You can adjust the type to match the expected type for your id
}

const StatisticByTeam: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Fetch player data based on teamId
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`https://nba-web-service-production.up.railway.app/teams/${id}/players`);
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [id]);

  return (
    <>
      <h1>Team Statistics for Team ID: {id}</h1>

      <div className='container-fluid d-flex justify-content-center '>
        <div className='row col-12 mt-3'>
          <div className='table-responsive'>
            <table className="table table-hover table-bordered">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">Classement</th>
                  <th scope="col">Joueur</th>
                  <th scope="col">MJ</th>
                  <th scope="col">PPM</th>
                  <th scope="col">RPM</th>
                  <th scope="col">PDPM</th>
                  {/* Add more headers based on your data */}
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${player.prenom} ${player.nom}`}</td>
                    <td>{/* Add more cells based on your data */}</td>
                    {/* Add more cells based on your data */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticByTeam;
