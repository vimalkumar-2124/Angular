import { Component, OnInit } from '@angular/core';
import { List } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  list:List[] = []
  id:number = 0
  flag:boolean = true
  toHide:boolean = false
  selectedToDo!:List;
  constructor() { }

  ngOnInit(): void {
  }
  submit(value:string){
    this.id = this.id + 1
    this.list.push({id:this.id, toDo:value})
    // console.log(this.list)
  }

  onEdit(l:List){
    
    this.selectedToDo = l
    this.flag = true
    this.toHide = true

  }

  onDelete(l:List){
    this.list.filter((ele,index) => {
      if(ele.id === l.id){
        this.list.splice(index,1)
      }
    })
    // console.log(this.list)
  }
  onSave(){
    this.flag = false
    this.toHide = true
  }
}
