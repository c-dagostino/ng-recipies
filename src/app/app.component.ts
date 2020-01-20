import { Component, OnInit } from '@angular/core';
import { LoggingService } from './shared/services/logging.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.autoLogin();
  }
 
}
