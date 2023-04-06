import React from 'react';
import { Loading } from './Loading ';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: true,
        };
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate');

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación")
                this.setState({ loading: false });
                console.log("Terminando la validación")
            }, 3000);
        }
    }
    
    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>
                
                {this.state.error && (
                    <p>Error: el código de seguridad es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading/>
                )}

                <input placeholder="Código de seguridad" />
                <button
                    onClick={() => this.setState({ loading: false })}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };
//export default UseState;
//this.setState(prevState => ({ error: !prevState.error }))