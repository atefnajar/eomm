import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {


  }
  isDialogOpen = false;

   emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
