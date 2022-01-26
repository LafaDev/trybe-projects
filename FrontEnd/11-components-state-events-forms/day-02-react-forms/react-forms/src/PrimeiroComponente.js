import React from "react";

class PrimeiroComponente extends React.Component {
    render() {
        const { handleChange, value } = this.props
        let error = undefined
        if (!value) error = 'type your email'
        return(
            <fieldset>
                <legend>Primeiro Componente</legend>
                <label>
                    email:
                    <input type="email" name="email" onChange={handleChange} value={ value }></input>
                </label>
                <p>{error ? error : ''}</p>
            </fieldset>
        )
    }
}

export default PrimeiroComponente;