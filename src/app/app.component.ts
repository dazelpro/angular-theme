import { Component } from '@angular/core';
import { TemaService } from './tema.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-theme';
    temaTxt = 'Tema Gelap';

    constructor(
        private themeService: TemaService
    ) {}
    
    
    toggleTheme() {
        if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
            this.temaTxt = 'Tema Gelap';
        } else {
            this.themeService.setDarkTheme();
            this.temaTxt = 'Tema Terang';
        }
    }
}
