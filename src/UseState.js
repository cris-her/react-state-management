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

        deleted: false,
        confimed: false
    })
    
    console.log(state);

    const onConfirm = () =>{
        setState({
            ...state,
            error: false,
            loading: false,
            
            //paso el etadod e confirma
            confimed: true
        })
    }

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        })
    }

    const onWrite = (newValue) =>{
        setState({
            ...state,
            value: newValue
        })
    }

    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    }

    const onDelete = () => {
        setState({
            ...state,

            //paso a delete screen
            deleted: true

        })
    }

    const onReset = () => {
        setState({
            ...state,

            //vuelvo a overviwe screen
            confimed: false,
            deleted: false,
            value:''
        })
    }

    React.useEffect(() => {
        console.log('Empezando el efecto');
        // console.log(loading);
        
        if(!!state.loading){
            setTimeout(() => {
                console.log('Haciendo validación');
                
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                    // setState({
                    //     ...state,
                    //     error: false,
                    //     loading: false,
                    //     confimed: true,
                    // });
                    // setLoading(false);
                    // //setError(false);
                } else {
                    onError();
                    // setError(true);
                    // setLoading(false);
                }

                console.log('Terminando validación');
            }, 2000);
        }

        console.log('Terminando el efecto');
    }, [state.loading])

    if(!state.deleted && !state.confimed) {
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

                        onWrite(event.target.value);
                    }}
                />

                <button
                    onClick={() => {
                        onCheck();
                        // setError(false);
                        // setLoading(true)
                    }}
                >Comprobar</button>
            </div>
        );
    } else if (!!state.confimed && !state.deleted) {
        return (
            <React.Fragment>
                <h2> Eliminar {props.name}</h2>

                <p> Predimos confirmación, estás segur@? </p>

                <button
                    onClick={() =>{
                        //voy a delete screen
                        onDelete()
                    }}
                > Sí, eliminar </button>

                <button
                    onClick={() =>{
                        //vuelvo a overview
                        onReset();
                    }}
                > No, me arrepentí </button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h2> Eliminar {props.name}</h2>

                <button
                    onClick={() =>{
                        //vulevo a overview
                        onReset();
                    }}
                > Resetear, volver atrás </button>
                
            </React.Fragment>
        )
    }
}

export { UseState };
//export default UseState;
//setError(prevState => !prevState)