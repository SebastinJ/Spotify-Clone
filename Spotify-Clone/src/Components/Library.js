import React, { useState } from 'react';
import "../Styles/Library.css";
import { MdLibraryMusic } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function Library() {

    const [showBox, setShowBox] = useState(false);

    const handlePlusButtonClick = () => {
      setShowBox(!showBox);
    };

  function handlePlaylistButtonClick() {

  }

  return (
    <div className='libraryMenu'>
      <div className='yourLibrary'>
        <i className='ilibrary'>
          <MdLibraryMusic />
        </i>
        <h2 className='h2library'>
          Your Library
        </h2>
      </div>
      <div className='plus'>
          <button className='plus-button'
          onClick={handlePlusButtonClick}>
            {showBox && <div className='popup'></div>}
            <i className='iplus'>
              <AiOutlinePlus />
            </i>
          </button>
      </div>
      <div className='playlist'>
        <button className='playlist-button'
        onClick={handlePlaylistButtonClick}>
          Playlists
        </button>
      </div>
    </div>
  );
}


export default Library;
