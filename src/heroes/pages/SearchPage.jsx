import { useLocation, useNavigate } from 'react-router-dom';

import { HeroCard } from './../components/HeroCard';
import { useForm } from './../../hooks/useForm';

import { getHeroByName } from './../helpers/getHeroeByName';


export const SearchPage = () => {

   const navigate = useNavigate();
   const location = useLocation();

   let heroes = []

   let query = new URLSearchParams(location.search).get("q")

   let showSearch = ''
   let showError = ''

   if (query) {

      heroes = getHeroByName(query);
      showSearch = (query.length === 0)
      showError = (query.length > 0) && heroes.length === 0
   }


   const { searchText, onInputChange } = useForm({
      searchText: query
   })


   const handleSubmit = (e) => {
      e.preventDefault()
      // if (searchText.trim().length <= 1) return;

      navigate(`?q=${searchText}`)
   }

   // NOTE - cuando pasas un Arreglo con porps usa el spread ln/74

   return (
      <>
         <h1>Search</h1>
         <hr />

         <div className="row">

            <div className="col-5">
               <h4>Searching</h4>
               <hr />

               <form onSubmit={ handleSubmit }>
                  <input
                     type="text"
                     placeholder="Search a hero"
                     className="form-control"
                     name="searchText"
                     autoComplete="off"
                     value={ searchText }
                     onChange={ onInputChange }
                  />

                  <button className="btn btn-outline-primary mt-1">
                     Search
                  </button>
               </form>
            </div>

            <div className="col-7">
               <h4>Results</h4>
               <hr />

               <div
                  className="alert alert-primary animate__animated animate__fadeIn"
                  style={ { display: showSearch ? '' : 'none' } } >
                  Search a hero
               </div>

               <div
                  className="alert alert-danger animate__animated animate__fadeIn"
                  style={ { display: showError ? '' : 'none' } } >
                  There's no result <b>{ query }</b>
               </div>

               {
                  heroes.map((hero, id) => {
                     return <HeroCard key={ id } { ...hero } />
                  })
               }

            </div>
         </div>
      </>
   )
}

//  NOTE - metodo alterno para mensajes de error y busqueda con ternario
//  {
//    query == ''
//       ? <div className="alert alert-primary">
//          Search a hero
//       </div>
//       : (heroes.length === 0) && <div className="alert alert-danger">
//          There's no result <b>{ query }</b>
//       </div>
// }