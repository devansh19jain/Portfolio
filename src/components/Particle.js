import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {

  const particlesInit = async (main) => {
    console.log('Main Object:', main);
    // Initialization logic for tsParticles
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: 1,
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 0.1,
              max: 3,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
          },
        },
        background: {
          color: '#000000',
        },
      }}
    />
  );
};

export default Particle;
