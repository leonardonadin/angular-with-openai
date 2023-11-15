import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      apiKey: environment.openAiApiKey,
    });
  }

  generateText(prompt: string): Promise<string | undefined> {
    return this.openai.chat.completions.create({
        model: 'text-davinci-003',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      })
      .then((response: any) => {
        return response.data.choices[0].text;
      })
      .catch((error: any) => {
        console.log(error);
        return '';
      });
  }
}
