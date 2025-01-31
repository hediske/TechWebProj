import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    selectedFiles: File[] = [];

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            const newFiles = Array.from(input.files);
    
            // Filtrer pour éviter les doublons
            this.selectedFiles = this.selectedFiles
                ? [...this.selectedFiles, ...newFiles].filter(
                    (file, index, self) => self.findIndex(f => f.name === file.name) === index
                )
                : newFiles;
        }
    }

    addProduct(formulaire: NgForm) {
        console.log('Valeurs du formulaire avant envoi :', formulaire.value);
      
        // Créez une instance de FormData
        const formData = new FormData();
      
        // Ajoutez les fichiers sélectionnés
        this.selectedFiles.forEach((file) => formData.append('images', file));
      
        // Ajoutez les autres données du formulaire
        Object.entries(formulaire.value).forEach(([key, value]) => {
          formData.append(key, value as string);
        });
      
        console.log('Données envoyées au serveur :', formData);
      
        this.productService.addProduct(formData).subscribe(
          (reponse) => {
            console.log('Réponse du serveur :', reponse);
            alert('Produit ajouté avec succès !');
            this.router.navigate(['products']);
          },
          (error) => {
            console.error('Erreur :', error);
          }
        );
      }
      
  
}


