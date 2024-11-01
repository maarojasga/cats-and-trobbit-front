import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})
export class CatsListComponent implements OnInit {
  cats: any[] = [];

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catsService.getCats().subscribe((data) => {
      this.cats = data;
    });
  }

  deleteCat(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este gato?')) {
      this.catsService.deleteCat(id).subscribe(() => {
        this.cats = this.cats.filter(cat => cat._id !== id);
        console.log(`Gato con id ${id} eliminado.`);
      },
      (error) => {
        console.error('Error al eliminar el gato:', error);
      });
    }
  }
}
