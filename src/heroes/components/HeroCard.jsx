import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters }
) => {

   const heroImgPath = `./assets/heroes/${id}.jpg`

   // NOTE - filtro usado es para mostrar solo los characters diferentes a alter_ego
   const filterAlterEgoToCharacter = alter_ego !== characters ? <p>{ characters }</p> : ''

   return (
      <div className='col animate__animated animate__fadeIn'>
         <div className="card">

            <div className="row no-gutters">
               <div className="col-4">
                  <img src={ heroImgPath } className='card-img' alt={ superhero } />
               </div>

               <div className="col-8">
                  <div className="card-body">

                     <h5 className="card-title">{ superhero }</h5>
                     <p className="card-text">{ alter_ego }</p>
                     {
                        filterAlterEgoToCharacter
                     }
                     <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                     </p>

                     <Link to={ `/hero/${id}` } >
                        Más...
                     </Link>

                  </div>
               </div>

            </div>

         </div>
      </div>
   )
}
