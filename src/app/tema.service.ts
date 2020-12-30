import { Injectable } from '@angular/core';
import { Theme, terang, gelap } from "./app.tema";

@Injectable({
    providedIn: 'root'
})

export class TemaService {

    private active: Theme = terang;
    private availableThemes: Theme[] = [terang, gelap];
  
    getAvailableThemes(): Theme[] {
        return this.availableThemes;
    }
  
    getActiveTheme(): Theme {
        return this.active;
    }
  
    isDarkTheme(): boolean {
        return this.active.name === gelap.name;
    }
  
    setDarkTheme(): void {
        this.setActiveTheme(gelap);
    }
  
    setLightTheme(): void {
        this.setActiveTheme(terang);
    }
  
    setActiveTheme(theme: Theme): void {
        this.active = theme;
    
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}
