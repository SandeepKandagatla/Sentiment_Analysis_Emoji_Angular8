import {MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
imports: [MatButtonModule, MatCheckboxModule,MatSliderModule],
exports: [MatButtonModule, MatCheckboxModule,MatSliderModule]
})


export class AngularMaterialModule { }