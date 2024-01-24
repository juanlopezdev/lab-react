import React, { useEffect } from "react";

function MyComponentWithUseEffectListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('La ventana ha cambiado de tamaño');
      console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2>MyComponentWithUseEffectListener</h2>
    </div>
  );
}

export default MyComponentWithUseEffectListener;
