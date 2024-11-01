import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';
import { ImagesService } from '../../images/images.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
  cat: any = { name: '', breed: '', age: null, image: '' };
  favoriteImages: any[] = [];
  isEditing: boolean = false;
  showImageModal: boolean = false;
  tempImageUrl: string = '';

  constructor(
    private catsService: CatsService,
    private imagesService: ImagesService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const catId = params.get('id');
      if (catId) {
        this.isEditing = true;
        this.catsService.getCatById(catId).subscribe(
          (cat) => {
            this.cat = cat;
            this.tempImageUrl = cat.image; 
            console.log('Gato a editar:', this.cat); 
          },
          (error) => {
            console.error('Error fetching cat data:', error);
          }
        );
      }
    });

    this.imagesService.getFavorites().subscribe((images) => {
      this.favoriteImages = images;
    });
  }

  selectImage(imageUrl: string): void {
    this.tempImageUrl = imageUrl;
  }

  saveCat(): void {
    this.cat.image = this.tempImageUrl;

    const updatedData = {
      name: this.cat.name,
      age: this.cat.age,
      breed: this.cat.breed,
      image: this.cat.image
    };

    if (this.isEditing) {
      this.catsService.updateCat(this.cat._id, updatedData).subscribe(() => {
        this.router.navigate(['/cats']);
      });
    } else {
      this.catsService.createCat(updatedData).subscribe(() => {
        this.router.navigate(['/cats']);
      });
    }
  }
}
