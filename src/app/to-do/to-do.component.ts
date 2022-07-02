import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { List } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  list:List[] = []
  id:number = 0
  date!:string
  // flag:boolean = true
  // showTime:boolean = true
  toHide:boolean = false
  selectedToDo!:List;
  constructor() { }

  ngOnInit(): void {
  }
  submit(value:string){
    this.id = this.id + 1
    this.list.push({id:this.id, toDo:value,edited:false})
    // console.log(this.list)
  }

  onEdit(l:List){
    
    this.selectedToDo = l
    // this.flag = true
    this.toHide = true
    // this.showTime = true
    this.date = moment().format('llll')




  }

  onDelete(l:List){
    this.list.filter((ele,index) => {
      if(ele.id === l.id){
        this.list.splice(index,1)
      }
    })
    // console.log(this.list)
  }
  onSave(editedValue:List){
    // console.log("edededed",editedvalue);
    this.list.map((ele) => {
      if(ele.id === editedValue.id){
        ele.edited = true
      }
      // console.log(ele)
    })
    
    // this.flag = false
    this.toHide = false
    // this.showTime = false
  }
}
