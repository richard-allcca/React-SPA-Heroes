import { useState } from "react"


export const useForm = (initialForm = {}) => {

   const [ formState, setFormState ] = useState({
      searchText: ''
   })

   const onInputChange = ({ target }) => {

      setFormState({
         ...formState,
         [ target.name ]: target.value
      })
   };

   const onResetForm = () => {
      setFormState(initialForm);
   }

   return {
      ...formState,
      formState,
      onInputChange,
      onResetForm
   }
}