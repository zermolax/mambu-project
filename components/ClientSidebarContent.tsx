'use client'

import React from 'react';
import { useAppContext } from '@/context/AppContext';

interface ClientSidebarContentProps {
  type: 'kids' | 'roma';
}

const ClientSidebarContent: React.FC<ClientSidebarContentProps> = ({ type }) => {
  const { currentSection } = useAppContext();

  return (
    <>
      {/* Anunțuri AdSense */}
      <div className="sidebar-section sidebar-ads">
        <h2 className="sidebar-title">Publicitate</h2>
        <div className="bg-gray-200 h-60 flex items-center justify-center text-gray-500">
          Spațiu rezervat pentru AdSense
        </div>
      </div>

      {/* Resurse utile */}
      <div className="sidebar-section sidebar-useful">
        <h2 className="sidebar-title">Resurse utile</h2>
        <ul>
          {type === 'kids' ? (
            <>
              <li><a href="#" className="sidebar-link">Activități pentru copii</a></li>
              <li><a href="#" className="sidebar-link">Recomandări de lectură</a></li>
              <li><a href="#" className="sidebar-link">Jocuri educative online</a></li>
            </>
          ) : (
            <>
              <li><a href="#" className="sidebar-link">Ghid turistic Roma</a></li>
              <li><a href="#" className="sidebar-link">Harta monumentelor</a></li>
              <li><a href="#" className="sidebar-link">Calendar evenimente</a></li>
            </>
          )}
        </ul>
      </div>

      <p>Secțiunea curentă: {currentSection}</p>
    </>
  );
};

export default ClientSidebarContent;