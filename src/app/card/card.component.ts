import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";

import {
  faEnvelope,
  faMapMarkedAlt,
  faPen,
  faDatabase,
  faPhone,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() user;
  @Output() newValue = new EventEmitter();


  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPen = faPen;
  faDatabase = faDatabase;
  faPhone = faPhone;
  faPhoneAlt =faPhoneAlt;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.user);
    
  }

  nextUser( val : any){
    this.newValue.emit('true')
  }
}
