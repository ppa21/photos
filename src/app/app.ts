import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoShow } from './photo-show/photo-show';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PhotoShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
