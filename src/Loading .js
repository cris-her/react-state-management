import React from "react";

class Loading extends React.Component {
    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        return (
            <p>Cargando...</p>
        )
    }
}

export {Loading}