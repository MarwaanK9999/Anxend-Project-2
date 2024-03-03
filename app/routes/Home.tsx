//Importing the needed elemts to run the page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarSelector from './Home/AvatarSelector';
import AccessorySelector from './Home/AccessorySelector';
import './Styles/tailwindimporter.css';

const Home: React.FC = () => {
  //Getting all the needed values
  const [userName, setUserName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedAccessory, setSelectedAccessory] = useState('');
  const [selectedAccessoryIndex, setSelectedAccessoryIndex] = useState<number>(0);
  
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Checks whether a name and avatar are selected
    if (userName && selectedAvatar && selectedAccessory) {
      // Direct the user to the question page
      navigate(`/quiz?name=${userName}&avatar=${selectedAvatar}&accessory=${selectedAccessory}&accessoryIndex=${selectedAccessoryIndex}`);

    } else {
      //Shows an alert message to the user
      alert('Please enter your name, select an avatar, and select an accessory.');
    }
  };

  return (
    <div className="text-black flex flex-col items-center justify-center bg-cyan-300 h-[550px] w-[620px] rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Welcome to the Quiz Game!</h1>
      <p>Enter a name, select an avatar, as well as an accessory which will determine your question. Remember, you have 10 seconds to answer correctly, so ARE YOU READY?!</p>
      
      <div className="mb-4">
        <label htmlFor="name" className="text-lg font-medium mb-2">Enter Your Name:</label>
        <input
          className="focus:text-black border border-gray-300 rounded-md px-4 py-2"
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <AvatarSelector
        selectedAvatar={selectedAvatar}
        onSelectAvatar={(avatar) => setSelectedAvatar(avatar)}
      />

    <AccessorySelector
        selectedAccessory={selectedAccessory}
        onSelectAccessory={(accessory, accessoryIndex) => { setSelectedAccessory(accessory);
          setSelectedAccessoryIndex(accessoryIndex);}}
      />

      <button className="text-white bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4" 
              onClick={handleStartQuiz}>
                Start Quiz
      </button>
    </div>

  );
};

export default Home;