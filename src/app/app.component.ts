import { Component } from '@angular/core';

import { SwPush } from '@angular/service-worker';
import { UpdateCheckService } from './services/update-check.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'corporate-website-pwa';
}
