import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAiService } from '../services/open-ai.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  providers: [OpenAiService]
})
export class HomeComponent {
  title = 'OpenAI Playground';
  prompt = '';
  response = '';

  constructor(private openAiService: OpenAiService) {}

  generate() {
    this.openAiService.generateText(this.prompt);
  }
}
