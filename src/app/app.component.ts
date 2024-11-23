import { Component } from '@angular/core';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { ServicesComponent } from "./components/services/services.component";
import { KnowledgeComponent } from "./components/knowledge/knowledge.component";
import { PriceComponent } from "./components/price/price.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { QuestionsComponent } from "./components/questions/questions.component";
import { WhatsComponent } from "./components/whats/whats.component";
// import { RouterOutlet } from '@angular/router';


declare function initNavigationMenu(): void;
declare function initQuestionsToggle(): void;
declare function initTestimonySlider(): void;
declare function initPopupWhatsApp(): void;


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FooterComponent, HeaderComponent, ServicesComponent, KnowledgeComponent, PriceComponent, AboutComponent, ContactComponent, QuestionsComponent, WhatsComponent]
})
export class AppComponent {
  title = 'corporate-website-pwa';
  
  
  ngAfterViewInit(): void {
    // Llama a la función JavaScript después de que la vista se haya inicializado
    setTimeout(() => {
      initNavigationMenu();
      initQuestionsToggle();
      initTestimonySlider();
      initPopupWhatsApp();
    }, 50);
  }
}
