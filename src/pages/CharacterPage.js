import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterPage = () => {
  const { character } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Chat with {character}</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default CharacterPage;