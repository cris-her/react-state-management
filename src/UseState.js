import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState(props) {
    /*
    // Estados independientes
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState('');
    */
    
    // Estados compuestos
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,

        // deleted: false,
        // confimed: false
    })
    
    console.log(state);

    React.useEffect(() => {
        console.log('Empezando el efecto');
        // console.log(loading);
        
        if(!!state.loading){
            setTimeout(() => {
                console.log('Haciendo validación');
                
                if (state.value === SECURITY_CODE) {
                    //onConfirm();
                    setState({
                        ...state,
                        error: false,
                        loading: false
                    });
                    // setLoading(false);
                    // //setError(false);
                } else {
                    //onError();
                    setState({
                        ...state,
                        error: true, 
                        loading: false
                    });
                    // setError(true);
                    // setLoading(false);
                }

                console.log('Terminando validación');
            }, 2000);
        }

        console.log('Terminando el efecto');
    }, [state.loading])


    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>
            
            {(state.error && !state.loading)  && (
                <p>Error: el código es incorrecto</p>
            )}

            {state.loading && (
                <p>Cargando...</p>
            )}

            <input 
                placeholder="Código de Seguridad"
                value= {state.value}
                onChange = {(event) =>{
                    // // setError(false);
                    // setValue(event.target.value);
                    setState({
                        ...state,
                        value: event.target.value,
                    })
                    //onWrite(event.target.value);
                }}
            />

            <button
                onClick={() => {
                    setState({
                        ...state,
                        loading: true,
                    })
                    // setError(false);
                    // setLoading(true)
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState };
//export default UseState;
//setError(prevState => !prevState)