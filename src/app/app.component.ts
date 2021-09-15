import { UserService } from "./services/user.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "random-card";
  user: any;
  i:number = 0;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        // console.log(user);
        this.user = user.results[0];
        // console.log(this.user);
      },
      (err) => {
        this.toastr.error("Please try after sometime......");
        // this.toastr.error(err.status, "Please try after sometime......");// error msg with status code
      }
    );
  }

  newUserRequest(new_user: any) {    
    if (new_user === "true") {
      this.i++;
      this.getUser();
      console.log(`Request for new user ${this.i}`);
    }
    // console.log(new_user, "get from child");
  }

  
}
