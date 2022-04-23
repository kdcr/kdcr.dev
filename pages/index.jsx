import React, { useState } from 'react';
import NavButton from '../components/navButton';
import Pop from '../components/pop/Pop';

const Home = () => {
  const [contactOpen, setContactOpen] = useState(true);

  return (
    <div className="flex items-center justify-around w-screen h-screen">
      <NavButton>projects.</NavButton>
      <NavButton>about.</NavButton>
      <div className="relative">
        <NavButton onClick={() => setContactOpen(!contactOpen)}>
          contact.
        </NavButton>
        {contactOpen ? (
          <div className="h-0">
            <Pop>a</Pop>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Home;
