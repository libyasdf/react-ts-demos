import React from 'react'

class ControlComponent extends React.Component {
    state = {
        name: ""
    }
    www = React.createRef()
    changeName(e) {
        this.setState({
            name: e.target.name
        })
    }

    componentDidMount() {
        this.www.current.value = this.state.name;
    }
    render() {
        let { name } = this.state;
        return (
            <>
                <input value={name} onChange={this.changeName.bind(this)} />
                <input ref={this.www} />
            </>
        )
    }
}