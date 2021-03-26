import React, { Component } from 'react'

export default class Post extends Component {
    state={
        id: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div className="container">
                <h4>route param: {this.state.id}</h4>
            </div>
        )
    }
}
