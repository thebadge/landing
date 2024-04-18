"use client";

import { useTheme } from "next-themes";
import { darkOptions, lightOptions } from "./particlesConfig";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
// @ts-ignore
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesDeco() {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        options={theme.theme == "light" ? lightOptions : darkOptions}
        className="absolute top-0 left-0 w-full h-full"
      />
    );
  }

  return <></>;
}
