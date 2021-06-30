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
  serverNameInputed = "N/a"

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
        this.serverNameInputed = 'The Name is ' + this.textInputed
        break

      case false:
        this.boolNewServer = true
        this.state = "State : true"
        this.serverNameInputed = 'The Name is ' + this.textInputed
        break

    }

  }

  updateDOM(event: any){
    this.textInputed = event.srcElement.value
  }

}
