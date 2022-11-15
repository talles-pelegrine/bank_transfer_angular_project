import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'bank_transfer_angular_project';
  
  transferObjects: any[]
  
  ngOnInit(): void {
    this.transferObjects = []
  }

  transfer($event) {
    this.transferObjects.push({...$event, date: new Date()})
  }

}
