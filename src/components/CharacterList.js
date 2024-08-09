import React from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterList = () => {
  const navigate = useNavigate();

  const characters = ['Romy', 'Diego', 'Lisa'];

  const handleClick = (character) => {
    navigate(`/character/${character}`);
  };

  return (
    <ul>
      {characters.map((character) => (
        <li key={character} onClick={() => handleClick(character)}>
          {character}
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;