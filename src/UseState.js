import React from 'react';

function UseState(props) {
    const [error, setError] = React.useState(true);

    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>
            
            {error && (
                <p>Error: el código de seguridad es incorrecto</p>
            )}

            <input placeholder="Código de seguridad" />
            <button
                onClick={() => setError(prevState => !prevState)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };
//export default UseState;