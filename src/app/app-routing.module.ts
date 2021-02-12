import { NgModule } from '@angular/core';
import {AboutComponent} from './about/about.component'
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router'
import { from } from 'rxjs';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  {
    path: "about", component: AboutComponent,
    
  },
  {
    path:"" , component:ConverterComponent
  }
]
@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]

})
export class AppRoutingModule { }
