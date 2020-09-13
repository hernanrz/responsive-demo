import React, { useState, useEffect } from 'react';

const content = 'width=device-width, initial-scale=1, shrink-to-fit=no';

const ResponsiveSwitch = () => {
  const [responsive, setResponsive] = useState(true);

  useEffect(() => {
    const meta = document.querySelector('meta[name=viewport]');
    const main = document.querySelector('main');
    console.log(main);
    if (!responsive) {
      if (meta) {
        meta.remove();
      }

      main.style.width = '1920px';
      console.log(main.style.width);
    } else {
      if (!meta) {
        const newMeta = document.createElement('meta');
        newMeta.name = 'viewport';
        newMeta.content = content;
        document.head.appendChild(newMeta);
      }

      main.style.width = 'unset';
    }
  }, [responsive]);

  return (
    <>
     { responsive && <p>Actualmente la página está en modo responsivo, intenta cambiar el tamaño de la ventana para ver cómo cambia el contenido.</p> }
     { !responsive && <p>Actualmente la página NO está en modo responsivo, intenta ver esto en un teléfono, notarás que la experiencia es más incómoda</p> }

      <button onClick={() => setResponsive(!responsive)} className="btn btn-primary">
        Cambiar a { responsive ? 'no responsivo' : 'responsivo' }
      </button>
    </>
  )
}

export default ResponsiveSwitch;
