import { heroes } from "../data/heroes"


export const getHeroByName = (name = '') => {

   const formattedName = name.toLocaleLowerCase().trim();

   if (formattedName.length === 0) return [];


   return heroes.filter(
      hero => hero.superhero.toLocaleLowerCase().includes(formattedName)
   )
}