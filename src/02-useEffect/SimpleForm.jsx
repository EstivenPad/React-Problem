import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'Heisenberg123',
        email: 'strider@hotmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        // console.log('useEffect called!')
    }, []);//Cuando se le asigna como segundo parametro un array vacio solo se llama el useEffect una sola vez
    
    
    useEffect(() => {
        // console.log('formState changed!')
    }, [ formState ]);

    
    useEffect( () => {
        // console.log('email changed!')
    }, [ email ]);
  
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

        {
            ( username === 'Heisenberg12' ) && <Message />
        }
        
    </>
  )
}
