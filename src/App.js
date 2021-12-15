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
        {id:"2", title: "Таска", done: false},
        {id:"3", title: "Срочно сделать", done: false},
      ],
      term: "З"
    }
    this.maxId = this.state.data.length +1;  
  }
  

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
        // id: this.maxId -1,
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

  // filterPost = (items, filter) => {
  //   switch (filter) {
  //     case "done":
  //       return items.filter(items => items.done);
  //     default:
  //       return items
  //   }
  // }


  // searchEmp = (items, term) => {
  //   if (term.length === 0) {
  //     return items
  //   }

  //   return items.filter(item => {
  //     return item.name.indexOf(term) > -1
  //   })
  // }


  render(){
    const {data} = this.state;
    const tasksValue = this.state.data.filter(item => item.done === false).length;
    const tasksDone = this.state.data.filter(item => item.done === true).length;
    // const visibleData = this.searchEmp(data, term);
    

    return (
      <div className="App">
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>
              <div className="to-do__block">
                <TaskInput 
                onAdd={this.addTask}
                tasksDone={tasksDone}
                onUpdateSearch={this.onUpdateSearch}
                />
                <TaskList 
                data={data}
                onDelete={this.deleteItem}
                doneTasks={this.doneTasks}
                onToggleRise={this.onToggleRise}
                />
                <Board tasksValue={tasksValue}/>  
              </div>
            </div>   
          </div>
      </div> 
    )
  }
}



export default App;
