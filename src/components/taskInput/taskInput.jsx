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
        const {title, allCompleated} = this.props;
        
        return (
            <div className="to-do__task-input">
                <input className="to-do__list-btn" onClick={allCompleated} type="checkbox">
                    {/* <img width={20} height={10} src="/img/arrow.svg" alt="arrow"/> */}
                </input>
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









// import React, { Component } from "react";


// class TaskInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//         }
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.onAdd(
//             this.state.title,
//         );
//         this.setState({
//             title: '',
//         })
//     }  

//     inputChange = e => {
//         this.setState({ 
//             title: e.target.value
//         })
//     }

    

//     render() {
//         const {title, id} = this.state;
        
//         return (
//             <div className="to-do__task-input">
//                 <input className="to-do__list-btn" type="checkbox">
//                     {/* <img width={20} height={10} src="/img/arrow.svg" alt="arrow"/> */}
//                 </input>
//                 <form className="add" onSubmit={this.onSubmit}>                
//                     <input className="to-do__task"
//                         value={title} type="text" 
//                         onChange={this.inputChange} 
//                         placeholder="What needs to be done?">                   
//                     </input>
//                 </form>
//             </div>
//         )
//     }  
// }

export default TaskInput;

