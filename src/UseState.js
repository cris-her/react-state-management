import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState(props) {
    // Estados independientes
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState('');

    /*
    // Estados compuestos
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,

        deleted: false,
        confimed: false
    })
    */
    
    console.log(value);

    React.useEffect(() => {
        console.log('Empezando el efecto');
        console.log(loading);
        
        if(!!loading){
            setTimeout(() => {
                console.log('Haciendo validación');
                
                if (value === SECURITY_CODE) {
                    //onConfirm();
                    setLoading(false);
                    //setError(false);
                } else {
                    //onError();
                    setError(true);
                    setLoading(false);
                }

                console.log('Terminando validación');
            }, 2000);
        }

        console.log('Terminando el efecto');
    }, [loading])


    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>
            
            {(error && !loading)  && (
                <p>Error: el código es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input 
                placeholder="Código de Seguridad"
                value= {value}
                onChange = {(event) =>{
                    // setError(false);
                    setValue(event.target.value);
                    //onWrite(event.target.value);
                }}
            />

            <button
                onClick={() => {
                    setError(false);
                    setLoading(true)
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState };
//export default UseState;
//setError(prevState => !prevState)