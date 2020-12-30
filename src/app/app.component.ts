import { Component } from '@angular/core';
import { TemaService } from './tema.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-theme';
    constructor(
        private themeService: TemaService
    ) {}
    
    
    toggleTheme() {
        if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
        } else {
            this.themeService.setDarkTheme();
        }
    }
}
