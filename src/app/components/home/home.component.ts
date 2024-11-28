import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ServicesComponent } from '../services/services.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { PriceComponent } from '../price/price.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { QuestionsComponent } from '../questions/questions.component';
import { WhatsComponent } from '../whats/whats.component';
import { UpdateCheckService } from '../../services/update-check.service';
import { SwPush } from '@angular/service-worker';

declare function initNavigationMenu(): void;
declare function initQuestionsToggle(): void;
declare function initTestimonySlider(): void;
declare function initPopupWhatsApp(): void;

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, ServicesComponent, KnowledgeComponent, PriceComponent, AboutComponent, ContactComponent, QuestionsComponent, WhatsComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(
    private updateCheckService: UpdateCheckService,
    private swPush: SwPush
  ) {
    this.updateCheckService.checkForUpdate();
  }
  
  ngAfterViewInit(): void {
    // Llama a la función JavaScript después de que la vista se haya inicializado
    setTimeout(() => {
      initNavigationMenu();
      initQuestionsToggle();
      initTestimonySlider();
      initPopupWhatsApp();
    }, 50);
  }
  
  subscribeToPush(): void {
    this.swPush.messages.subscribe(
      (res: any) => {
        console.log(res, " Message to show in the notificaiton ");
      }
    );
  }

}
