import { Component } from '@angular/core';
import { Photos } from '../photos';

@Component({
  selector: 'app-photo-show',
  imports: [],
  templateUrl: './photo-show.html',
  styleUrl: './photo-show.css',
})
export class PhotoShow {
  photoUrl: string = '';

  constructor(private photos: Photos) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photos.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
