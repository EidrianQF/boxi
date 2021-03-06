import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SetaddressPageRoutingModule } from './setaddress-routing.module';

import { SetaddressPage } from './setaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SetaddressPageRoutingModule
  ],
  declarations: [SetaddressPage]
})
export class SetaddressPageModule {}
