//Importing the needed elemts to run the page
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScoreDisplay from './Results/ScoreDisplay';
import './Styles/tailwindimporter.css';
//THe two lines below were meant to be used to connect to a database
//import { client } from '../db.server';
//import { edgedb } from 'dbschema/edgeql-js/imports';

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Used for a button to take the user back to the home page
  const handleClick = () => {
    navigate('../');
  };
  //Gather all the values needed
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('name') || '';
  const selectedAvatar = searchParams.get('avatar') || '';
  const finalScore = parseInt(searchParams.get('finalScore') || '0', 10);

  //The lines of code up to line 50 that have been commented out would have been used to insert the above values into a database
  //I struggled with many different methods to try and connect to edgedb, might have been an issue with my setup
  /*useEffect(() => {
    //Store user data and scores in EdgeDB
    
    async function run() {
      const client = edgedb.createClient();
    
      try {
        await client.execute(`
          INSERT User {
            name := <str>$username,
            score := <int>$score
          }:`,
          {
            username: userName,
            score: finalScore,
          }
          );
      } finally {
        console.log("Success")
        await client.close();
      }
    }

    run()
  },);*/

  return (
    <div className="bg-blue-500 flex flex-col items-center justify-center h-screen w-screen ">
      <div className="bg-cyan-300 flex flex-col items-center justify-center h-[550px] w-[620px] rounded-lg">
        <img
          src={selectedAvatar}
          alt="User Avatar"
          className="rounded-full h-32 w-32 mb-2"
        />
        <h1>{userName}, here is your total score!</h1>
        <ScoreDisplay finalScore={finalScore}/>
        <button className="text-white bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4" 
                onClick={handleClick}>
                  Go Back To Home Page
        </button>
      </div>
    </div>
  );
};

export default Results;