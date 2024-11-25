import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './MY_Components/category/category.component';
import { ProductComponent } from './MY_Components/product/product.component';

@Component({
  selector: 'app-root',
  imports: [CategoryComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  constructor(){
    setTimeout(()=>{
      this.title="Harry";
    },2000);
  }
}
