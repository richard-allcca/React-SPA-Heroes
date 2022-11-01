import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from './../helpers';

export const HeroPage = () => {

   const { id } = useParams();

   const heroById = getHeroById(id);

   if (!heroById) {
      return <Navigate to='/marvel' />
   }

   return (
      <div>
         { heroById.id }
      </div>
   )
}
