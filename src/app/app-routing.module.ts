import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainThreadsComponent } from './main-threads/main-threads.component';

const routes: Routes = [
  { path: 'threads', component: MainThreadsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
