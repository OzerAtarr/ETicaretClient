import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import { MatDialogModule} from '@angular/material/dialog';
import { FileUploadModule } from '../../../services/common/file-upload/file-upload.module';
import { DialogModule } from '../../../dialogs/dialog.module';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule, MatSidenavModule, MatFormFieldModule,
     MatInputModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatDialogModule,DialogModule, FileUploadModule,
    RouterModule.forChild([
      {path: "", component: ProductsComponent},
    ])
  ]
})
export class ProductsModule { }
