import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service'
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {
   
  }

  ngOnInit() {
    
  } 
}
