import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: any[] = []; 
  favoriteImageIds: Set<string> = new Set(); 

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    console.log('Navegaste a la página de Imágenes');
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
    if (this.favoriteImageIds.has(imageId)) return;

    this.imagesService.addToFavorites(imageId).subscribe({
      next: () => {
        console.log(`Image with ID ${imageId} added to favorites`);
        this.favoriteImageIds.add(imageId); 
      },
      error: (error) => {
        console.error('Error adding to favorites:', error);
      }
    });
  }

  isFavorite(imageId: string): boolean {
    return this.favoriteImageIds.has(imageId);
  }
}
