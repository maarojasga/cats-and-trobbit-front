import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'] 
})
export class ImagesComponent implements OnInit {
  images: any[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getImages().subscribe({
      next: (data) => {
        this.images = data;
      },
      error: (error) => {
        console.error('Error fetching images:', error);
      }
    });
  }

  addToFavorites(imageId: string): void {
    this.imagesService.addToFavorites(imageId).subscribe({
      next: () => {
        console.log('Image added to favorites');
      },
      error: (error) => {
        console.error('Error adding to favorites:', error);
      }
    });
  }
}
