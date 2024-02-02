'use client';
import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary text-center">About $CHIKEN</h2>
      <main className="flex flex-col mx-auto items-center gap-16 lg:items-start lg:flex-row">
          <p className='text-center'>
          Welcome to the coop! $CHIKEN isn't just another memecoin; it's a movement. Born from the zest of community and a dash of humor, we're here to spice up the crypto space. Inspired by the soaring success of $PORK, we thought, why not bring something even more relatable and loved to the table? After all, chicken is a global favorite, crossing cultures and cuisines - much like the universal appeal we see in $CHIKEN.
          </p>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
