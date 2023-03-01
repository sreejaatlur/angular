import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*selector:'[app-servers]',
  selector:'.app-servers', 
  template:'<app-serve></app-serve>',*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer=false;
  serverCreationStatus='No Server was created!';
  /*Servername='';*/
  Servername='teststring';
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }
  ngOnInit()
  {

  }
  onUpdateServerName(event:Event)
  {
     this.Servername=(<HTMLInputElement>event.target).value;
  }
  onCreateServer(){
    this.serverCreationStatus="Server was Created"+this.Servername;
  }
}
