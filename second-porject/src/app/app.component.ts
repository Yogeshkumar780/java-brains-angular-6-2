import { Component } from '@angular/core';
import { User } from './address-card/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-porject';
  user:User;
  inputText : string="initail value";

  constructor()
  {
     this.user=new User();
    this.user.name="yogesh";
    this.user.address="state";
    this.user.designation="software developer";
    this.user.phone=['123-456','456-789'];
  }
}
