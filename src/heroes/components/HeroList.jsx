import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from './../helpers';


export const HeroList = ({ publisher }) => {

  const heroesList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const getHeroList = heroesList.map((hero, id) => {
    return <HeroCard key={ id } { ...hero } />;
  });

  return (
    <ul className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      { getHeroList }
    </ul>
  );
};
