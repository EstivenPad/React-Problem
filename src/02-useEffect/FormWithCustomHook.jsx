import { useEffect } from 'react'
import { useForm } from '../hook/useForm';

export const FormWithCustomHook = () => {
  
    const { formState, onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });
    
    // const { username, email, password } = formState;
    
  
    return (
    <>
        <h1>Formulario Simple</h1>
        <hr />   

        <input 
            type="text" 
            placeholder="Username"
            className="form-control"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email" 
            placeholder="estiven@hotmail.com"
            className="form-control mt-2"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password" 
            placeholder="Contraseña"
            className="form-control mt-2"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
        
        <button onClick={ onResetForm } className='btn btn-danger mt-3'>Borrar</button>

    </>
  )
}
