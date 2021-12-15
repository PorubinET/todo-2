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
    console.log('Object.keys(this.state.data', this.state.data.length)
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
          console.log({...item, done: !item.done})
          return {...item, done: !item.done}
        }
        return item;
      })
    }))
  }

  allCompleated = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => { 
        return {...item, done: item.done = true}
      })
    }))
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "compleated":
        return items.filter(items => items.done);
      case "active":
        return items.filter(items => items.done === false);
      // case "allCompleated":
      //   return items.map(items => items.done = true);
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
    

    return (
      <div className="App">
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>
              <div className="to-do__block">
                <TaskInput 
                tasksDone={tasksDone}
                onAdd={this.addTask}
                allCompleated={this.allCompleated}
                onUpdateSearch={this.onUpdateSearch}
                />
                <TaskList 
                data={visibleData}
                onDelete={this.deleteItem}
                doneTasks={this.doneTasks}
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
