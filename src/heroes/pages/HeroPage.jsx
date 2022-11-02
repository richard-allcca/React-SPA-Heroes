import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from './../helpers';


export const HeroPage = () => {

   const { id } = useParams();

   const hero = useMemo(() => getHeroById(id), [ id ])

   const navigate = useNavigate()

   const onReturn = () => {
      navigate('/dc')
   }

   if (!hero) {
      return <Navigate to='/marvel' />
   }

   return (
      <div className="row mt-5">

         <div className="col-4 animate__animated animate__bounceInLeft">
            <img
               alt={ hero.superhero }
               className="img-thumbnail"
               src={ `/assets/heroes/${id}.jpg` }
            />
         </div>

         <div className="col-8 animate__animated animate__bounceInRight">
            <h3>{ hero.superhero }</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <b>Alter ego: </b>{ hero.alter_ego }
               </li>
               <li className="list-group-item">
                  <b>Publisher: </b>{ hero.publisher }
               </li>
               <li className="list-group-item">
                  <b>First Appearence: </b>{ hero.first_appearance }
               </li>

               <h5 className="mt-3">Characteres</h5>
               <p>{ hero.characters }</p>

               <button
                  className="btn btn-outline-primary"
                  onClick={ onReturn }>
                  Regresar
               </button>
            </ul>
         </div>

      </div>
   )
}
