import {Component} from '@angular/core';
@Component({
    selector:'app-serve',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverid: number=10;
    serverStatus: string='offiline';
    getServerStatus(){
        return this.serverStatus;
    }
}