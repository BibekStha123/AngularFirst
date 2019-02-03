import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isDisabled: boolean = false;

 inputCls="textColo textSize";//[class] is used


 message: string="hello";

 contact={       //as an object, [ngClass] is used
   "fontStyle": true,
   "textColor": false
 };

 onSubmit(){
     this.message = "heyy,,"
 }

 
 Products = [];

 constructor(){
   this.Products=[
     {
       sno:1,
       product:"jacket"
     },
     {
      sno:2,
      product:"pants"
    },
   ]
 }

}
