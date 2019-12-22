import {AfterViewInit, Component, OnInit} from '@angular/core';
import { jsPlumb } from 'jsplumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular JsPlumb Integration';
  jsPlumbInstance;
  showConnectionToggle = false;
  buttonName = 'Connect';
  counter=0;
  x=0.1; y=1; dx=0;dy=1;
  position=[this.x,this.y,this.dx,this.dy];

  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();

    this.jsPlumbInstance.bind('connection',function(info,ev){
      
info.connection.endpoints[0].getOverlay("label");
       var con=info.connection; 
     //  console.log(con)
       //this is the new connection
     //  console.log(con.endpoints[0].id);
      
  });
  
  }
  addComponentOnClick() {
    var node = document.createElement('div');
          node.className = "customBox";
          node.id=""+this.counter++;
          node.textContent="Node "+node.id;
   var workspace = document.getElementById('workspace');
          workspace.appendChild(node);
     this.jsPlumbInstance.draggable(node.id);

    var sourceEndpoint = {
      overlay:[
        [ "Label", { label:"foo", id:"label", location:[-0.5, -0.5] ,visible:true} ]
      ] ,
      endpoint: ["Rectangle", { width:13,height:13}],
      isSource: true,
      connectorStyle: { stroke: '#456', strokeWidth: 6 },
      connector: ["Bezier", { curviness: 63 } ],
      maxConnections: 1,
      anchor:this.position,
      connectionsDetachable:true,
      endpointStyle:{ fill: "blue" },
      connectorHoverStyle :{
      strokeWidth: 6,
      stroke: "green",
     // $y3Dr0w@n
      
    },
    }
    var targetEndpoint = {
      overlay:[
        [ "Label", { label:"foo", id:"label", location:[-0.5, -0.5],visible:true } ]
      ],
      endpoint: ["Rectangle", { width:30,height:30}],
      isTarget: true,
      connectorStyle: { stroke: '#456', strokeWidth: 6 },
      connector: ["Bezier", { curviness: 63 } ],
      maxConnections: -1,
      anchor:"Top",
      connectionsDetachable:true,
      endpointStyle:{ fill: "red" },
      connectorHoverStyle :{
      strokeWidth: 6,
      stroke: "pink",
     
    },

    }

    var t=this.jsPlumbInstance.addEndpoint(node.id, targetEndpoint);
    
    for(let i=0;i<10;i++){
    this.jsPlumbInstance.addEndpoint(node.id, sourceEndpoint);
    this.x= this.x+0.1;
    sourceEndpoint.anchor=[this.x,1,0,1];
    }
    this.x=0;
    this.y=0.5;
    this.dx=-1;
    this.dy=0;
  }
 
}
   

 
 
  


