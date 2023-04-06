import React from 'react';
import { Loading } from './Loading ';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false,
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

        if(!!this.state.loading){
            setTimeout(() => {
                console.log('Haciendo validación');
                
                if (SECURITY_CODE===this.state.value) {
                    this.setState({error: false, loading: false} )
                } else {
                    this.setState({error: true, loading: false})
                }
                // this.setState({loading: false});
    
                console.log('Terminando validación');
            }, 2000);
        }
    }
    
    render() {
        // const { error, loading, value } = this.state;

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>
                
                {(!!this.state.error && !this.state.loading)  && (
                    <p> El código es incorrecto </p>
                )}

                {(!!this.state.loading && !this.state.error) && (
                    <Loading />
                )}

                <input
                    placeholder="Código de Seguridad"
                    value={this.state.value}
                    onChange = {(event) => {
                        this.setState({
                            value: event.target.value
                        })
                    }}
                />

                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };
//export default UseState;
//this.setState(prevState => ({ error: !prevState.error }))