import React, { Component } from "react";


class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',

        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(
            this.state.title,
        );
        this.setState({
            title: '',
        })
    }  

    inputChange = e => {
        this.setState({ 
            title: e.target.value
        })
    }

    render() {
        const {title} = this.state;
        return (
            <div className="to-do__task-input">
                <button className="to-do__list-btn" type="submit">
                    <img width={20} height={10} src="/img/arrow.svg" alt="arrow"/>
                </button>
                <form className="add" onSubmit={this.onSubmit}>                
                    <input className="to-do__task"
                        value={title} type="text" 
                        onChange={this.inputChange} 
                        placeholder="What needs to be done?">                   
                    </input>
                </form>
            </div>
        )
    }  
}

export default TaskInput;

