import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';
 


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
    NewhotelregistrationComponent,
    
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
