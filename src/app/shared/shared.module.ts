import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { BestHighlightDirective } from './directives/best-highlight/best-highlight.directive';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './directives/unless/unless.directive';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        BasicHighlightDirective,
        BetterHighlightDirective,
        BestHighlightDirective,
        UnlessDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        BasicHighlightDirective,
        BetterHighlightDirective,
        BestHighlightDirective,
        UnlessDirective,
        CommonModule,
    ]
})
export class SharedModule {

}