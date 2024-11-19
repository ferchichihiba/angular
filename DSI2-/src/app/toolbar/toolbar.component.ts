import { Component } from '@angular/core';
import {MatToolbarModules}from '@angular/Modules';
import {MatButtonModules}from '@angular/Button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModules,MatButtonModules],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
   connexion():void{
    alert("connecter");
   }
   inscription():void{
     alert("merci pour votre inscription");
   }
   accueil():void{
    alert("vous etes dans l'accueil");
   }
   commande():void{
    alert("merci pour commander chez nous");
   }
   panier():void{
    alert("ceci votre panier");
   }
}
