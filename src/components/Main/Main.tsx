import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import clsx from 'clsx';

import MainMenu from '../routes/MainMenu';
import VsPlayerMenu from '../routes/VsPlayerMenu';
import { ReactComponent as Eng } from '../../assets/icons/EN.svg';
import { ReactComponent as Esp } from '../../assets/icons/ESP.svg';
import { ReactComponent as SoundOn } from '../../assets/icons/soundOn.svg';
import { ReactComponent as SoundOff } from '../../assets/icons/soundOff.svg';
import { ReactComponent as GoBack } from '../../assets/icons/goBack.svg';
import classes from './Main.module.scss';

const Main: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [activeLanguage, setActiveLanguage] = useState('Eng');
  const [sound, setSound] = useState(true);

  const handleSettingEnglish = () => setActiveLanguage('Eng');
  const handleSettingSpanish = () => setActiveLanguage('Esp');

  const handleSound = () => setSound(!sound);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  });

  return (
    <main className={classes.main} style={{ backgroundSize: `${dimensions.width}px ${dimensions.height}px` }}>
      <div className={classes.container}>
        <div className={classes.languages}>
          <Eng
            onClick={handleSettingEnglish}
            className={activeLanguage === 'Eng' ? classes.active : ''}
          />
          <Esp
            onClick={handleSettingSpanish}
            className={activeLanguage === 'Esp' ? classes.active : ''}
          />
        </div>
        <h1>
          Battleship game
        </h1>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/vs-player" element={<VsPlayerMenu />} />
        </Routes>
        <div className={clsx({
          [classes.footer]: pathname === '/vs-player',
        })}>
          {pathname === '/vs-player' && <div><GoBack className={classes.goBack} onClick={() => navigate('/')} /></div>}
          <div className={classes.sound}>
            {sound ? <SoundOn onClick={handleSound} /> : <SoundOff onClick={handleSound} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
