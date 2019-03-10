import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRecordsComponent } from './get-records/get-records.component';

const routes: Routes = [
    { path: 'app-renda-fixa', component: GetRecordsComponent },
    { path: '**', redirectTo: '/app-renda-fixa', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
