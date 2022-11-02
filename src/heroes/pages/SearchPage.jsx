import { HeroCard } from './../components/HeroCard';
import { useForm } from './../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';


export const SearchPage = () => {

   const navigate = useNavigate();
   const location = useLocation();

   let query = new URLSearchParams(location.search).get("q")


   const { searchText, onInputChange } = useForm({
      searchText: ''
   })


   const handleSubmit = (e) => {
      e.preventDefault()
      if (searchText.trim().length <= 1) return;


      navigate(`?q=${searchText}`)
   }

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

               <div className="alert alert-primary">
                  Search a hero
               </div>

               <div className="alert alert-danger">
                  There's no result { query }
               </div>

               <HeroCard />
            </div>
         </div>
      </>
   )
}
