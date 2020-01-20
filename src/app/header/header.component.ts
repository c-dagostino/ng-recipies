import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
   private userSubscription: Subscription;
   collapsed = false;
   isAuthenticated = false;

   constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

   ngOnInit() {
       this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
       });
   }
   onSaveData() {
        this.dataStorageService.storeRecipes();
   }
   onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    }

    onSignOut() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}