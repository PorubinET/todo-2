import React, {Component} from "react";

import TaskInput from "./components/taskInput/taskInput";
import TaskList from "./components/taskList/taskList";
import Board from "./components/board/board"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:"1", title: "Задача", done: false},
        {id:"2", title: "Todo", done: false},
        {id:"3", title: "Срочно сделать", done: false},
        {id:"4", title: "Прям капец как срочно", done: false},
      ],
      filter: 'all'
    }
    this.maxId = this.state.data.length +1;  
  }
  

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  addTask = (title) => {
    const newItem = {
      title,
      done: false,
      id: this.maxId++,
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  doneTasks = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, done: !item.done}
        }
        return item;
      })
    }))
  }

  allCompleated = () => {
    this.setState(({data}) => ({
      data: data.map(item => { 
        console.log({...item, done: !item.done})
        return {...item, done: !item.done}
      })
    }))
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "compleated":
        return items.filter(items => items.done);
      case "active":
        return items.filter(items => items.done === false);
      default:
        return items;
    }
  }



  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render(){
    const {data, filter} = this.state;
    const tasksValue = this.state.data.filter(item => item.done === false).length;
    const tasksDone = this.state.data.filter(item => item.done === true).length;
    const visibleData = this.filterPost((data), filter)
    
    const elements = data.map(item => item.id)
    

    return (
      <div className="App">
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>
              <div className="to-do__block">
                <TaskInput 
                tasksDone={tasksDone}
                onAdd={this.addTask}
                onUpdateSearch={this.onUpdateSearch}
                allCompleated={this.allCompleated}
                elements={elements}
                />
                <TaskList 
                data={visibleData}
                onDelete={this.deleteItem}
                doneTasks={this.doneTasks}
                allCompleated={this.allCompleated}
                onToggleRise={this.onToggleRise}
                />
                <Board 
                filter={filter}
                tasksValue={tasksValue}
                onFilterSelect={this.onFilterSelect}
                />  
              </div>
            </div>   
          </div>
      </div> 
    )
  }
}



export default App;
