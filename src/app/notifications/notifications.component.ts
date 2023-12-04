import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backgroundColor="white"
  notifications:string = 'notifications';
  srcpath = "/assets/Illustrator-Vector-Illustration-1.jpg"
  notificationclaose:boolean=false
  changeNotification(){
    this.notifications = "Jignesh Is On the Game"
    console.log("show notification Btn Click")
    this.backgroundColor = "#8ACE14"
  }
}
