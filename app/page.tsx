'use client';

import React from 'react';
import Inicio from '../components/sections/Inicio';
import SobreMi from '../components/sections/SobreMi';
import Proyectos from '../components/sections/Proyectos';
import Contacto from '../components/sections/Contacto';
import Habilidades from '../components/sections/Habilidades';

export default function Home() {
  return (
    <div className="flex flex-row h-screen md:flex-row mobile-no-overscroll mobile-page-scroll" style={{ width: '500vw' }}>
      <section id="inicio" className="w-screen h-screen flex-none mobile-viewport mobile-full-section mobile-snap-start">
        <Inicio />
      </section>
      <section id="sobremi" className="w-screen h-screen flex-none mobile-viewport mobile-full-section mobile-snap-start">
        <SobreMi />
      </section>
      <section id="habilidades" className="w-screen h-screen flex-none mobile-viewport mobile-full-section mobile-snap-start">
        <Habilidades />
      </section>
      <section id="proyectos" className="w-screen h-screen flex-none mobile-viewport mobile-full-section mobile-snap-start">
        <Proyectos />
      </section>
      <section id="contacto" className="w-screen h-screen flex-none mobile-viewport mobile-full-section mobile-snap-start">
        <Contacto />
      </section>
    </div>
  );
}