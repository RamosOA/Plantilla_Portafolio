'use client';

import React from 'react';
import Inicio from '../components/sections/Inicio';
import SobreMi from '../components/sections/SobreMi';
import Proyectos from '../components/sections/Proyectos';
import Contacto from '../components/sections/Contacto';
import Habilidades from '../components/sections/Habilidades';

export default function Home() {
  return (
    <div className="flex flex-row h-screen" style={{ width: '500vw' }}>
      <section id="inicio" className="w-screen h-screen flex-none">
        <Inicio />
      </section>
      <section id="sobremi" className="w-screen h-screen flex-none">
        <SobreMi />
      </section>
      <section id="habilidades" className="w-screen h-screen flex-none">
        <Habilidades />
      </section>
      <section id="proyectos" className="w-screen h-screen flex-none">
        <Proyectos />
      </section>
      <section id="contacto" className="w-screen h-screen flex-none">
        <Contacto />
      </section>
    </div>
  );
}