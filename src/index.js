import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <ClickityClick />
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
