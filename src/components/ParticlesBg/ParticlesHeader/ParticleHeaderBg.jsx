import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const proyectImg = require.context('../../../img', true);
export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000",
        },
        fullScreen: {
          enable: false,
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            random: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 5,
            },
            direction: "random",
          },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: proyectImg(`./bur.png`), 
                  width: 200,
                  height: 200,
                },
                  {
                  src: proyectImg(`./htb.png`), 
                  width: 200,
                  height: 200,
                },
                {
                  src: proyectImg(`./thm.png`), 
                  width: 200,
                  height: 200,
                },
                 {
                  src: proyectImg(`./nmap.png`), 
                  width: 200,
                  height: 200,
                },
                {
                  src: proyectImg(`./metp.png`), 
                  width: 200,
                  height: 200,
                },
                {
                  src: proyectImg(`./postman.png`), 
                  width: 200,
                  height: 200,
                },
                {
                  src: proyectImg(`./azu.png`), 
                  width: 200,
                  height: 200,
                },
                {
                  src: proyectImg(`./aws.png`), 
                  width: 200,
                  height: 200,
                },
                 {
                  src: proyectImg(`./kali.png`), 
                  width: 200,
                  height: 200,
                },
               
              ],
            },
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: "100px",
            color: {
              value: "#000000",
              animation: {
                h: { enable: false },
                s: { enable: false },
                l: { enable: false },
              },
            },
          },
        },
      }}
    />
  );
}
