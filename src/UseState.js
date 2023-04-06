import React from 'react';

function UseState(props) {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log("Empezando el efecto")

        if (loading) {
            setTimeout(() => {
                console.log("Haciendo la validación")
                setLoading(false);
                console.log("Terminando la validación")
            }, 3000);
        }

        console.log("Terminando el efecto")
    }, [loading]);


    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>
            
            {error && (
                <p>Error: el código de seguridad es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input placeholder="Código de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };
//export default UseState;
//setError(prevState => !prevState)