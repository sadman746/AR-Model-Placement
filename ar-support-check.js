window.addEventListener('load', () => {
    const isARSupported = AFRAME.utils.device.checkHeadsetConnected() || AFRAME.utils.device.checkARSupport();
    if (!isARSupported) {
      document.querySelector('#unsupported').style.display = 'block';
      const scene = document.querySelector('a-scene');
      if (scene) {
        scene.parentNode.removeChild(scene); // Rimuove il canvas AR
      }
    }
  });