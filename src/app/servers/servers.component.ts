import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  boolNewServer = false
  state = "State : null"
  textInputed = ""

  constructor() { 

    setTimeout(()=>{
      this.allowNewServer = true
    }, 1000)

  }

  ngOnInit(): void {
  }

  onClick(){

    switch(this.boolNewServer){

      case true:
        this.boolNewServer = false
        this.state = "State : false"
        break

      case false:
        this.boolNewServer = true
        this.state = "State : true"
        break

    }

  }

  updateDOM(event: any){
    this.textInputed = event.srcElement.value
  }

}
