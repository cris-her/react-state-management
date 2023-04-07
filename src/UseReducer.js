import React from "react";
const SECURITY_CODE = 'paradigma';

const initialState = {
    value: '',
    error: false,
    loading: false,

    deleted: false,
    confimed: false
}

function UseReducer(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const onConfirm = () => dispatch({type: actionTypes.confirm})
    const onError = () => dispatch({type: actionTypes.error})
    const onCheck = () => dispatch({type: actionTypes.check})
    const onDelete = () => dispatch({type: actionTypes.delete})
    const onReset = () => dispatch({type: actionTypes.reset})
    // const onWrite = (event) =>{
    //     dispatch({ type: actionTypes.write, payload: event.target.value})
    // }
    const onWrite = ({target:{value}}) =>{
        dispatch({ type: actionTypes.write, payload: value})
    }

    console.log(state.value);

    React.useEffect(() => {
        console.log('Empezando el efecto');
        console.log(state.loading);
        
        if(!!state.loading){
            setTimeout(() => {
                console.log('Haciendo validación');
                
                if (state.value === SECURITY_CODE) {
                    onConfirm()
                } else {
                    onError()
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
    
                <p>Porfavor, escribe el código de seguridad</p>
    
                {(!!state.error && !state.loading)  && (
                    <p> Error: El código es incorrecto </p>
                )}
    
                {(!!state.loading ) && (
                    <p> Cargando... </p>
                )}
    
                <input 
                    placeholder="Código de Seguridad"
                    value= {state.value}
                    onChange = {onWrite}
                />
                <button
                    onClick={onCheck}
                > Comprobar </button>
            </div>
        );
    } else if(!state.deleted && state.confimed){
        return (
            <React.Fragment>
                <h2> Eliminar {props.name}</h2>

                <p> Predimos confirmación, estás segur@? </p>

                <button
                    onClick={onDelete}
                > Sí, eliminar </button>

                <button
                    onClick={onReset}
                > No, me arrepentí </button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h2> Eliminar {props.name}</h2>

                <button
                    onClick={onReset}
                > Resetear, volver atrás </button>
                
            </React.Fragment>
        )
    }
}

export {UseReducer}

//3ra forma
const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confimed: true
    },
    [actionTypes.write]: {
        ...state,
        value: payload
    },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true
    },
    [actionTypes.reset] : {
        ...state,
        confimed: false,
        deleted: false,
        value:''
    }
})

/**/
const reducer = (state, action) =>{
    if (reducerObject(state)[action.type]) {
        return reducerObject(state,action.payload)[action.type];
    }
    else {
        return state
    }
}

const actionTypes = {
    confirm: 'CONFIRM',
    write: 'WRITE',
    error: 'ERROR',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
}

/* 1ra forma
const reducer = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false
        }   
    } else if (action.type === 'CHECK'){
        return {
            ...state,
            loading: true
        }   
    } else {
        return{
            ...initialState
        }
    }
}*/

/* 2da forma
const reducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false
            };      
        case 'CHECK':
            return {
                ...state,
                loading: true
            };
        default:
            return {
                ...state
            };
    }
}*/