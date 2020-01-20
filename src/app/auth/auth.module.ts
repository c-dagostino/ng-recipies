import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        FormsModule,
        SharedModule,
        AuthRoutingModule,
    ],
    exports: [
        AuthComponent,
    ]
})
export class AuthModule {}