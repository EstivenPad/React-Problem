import { useRef } from 'react';

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const onFocus = () => {
       inputRef.current.select();
    }
    
    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text" 
                placeholder="Ingrese un nombre"
                className="form-control"
            />

            <button 
                className="btn btn-secondary mt-2" 
                onClick={ onFocus }
            >
                Focus Input
            </button>
        </>
    )
}
