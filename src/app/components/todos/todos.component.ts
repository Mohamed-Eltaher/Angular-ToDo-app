import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

 todos:Todo[]
 inputTodo:string=""

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:'first todo',
        completed: true
      },
      {
        content:'second todo',
        completed: true
      }

    ]
  }

  toggleDone(id){
    this.todos.map((value:any, index) =>{
      if (index ==id) value.completed = !value.completed;
      return value
    })
  }

  addToDo(){
    this.todos.push({
      content: this.inputTodo,
      completed:false
    })
    this.inputTodo = ''
  }

  delete(index){
    this.todos.splice(index, 1)
  }
}
