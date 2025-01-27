import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

const routes: Routes = [ 
  {path:'etudiants', component: EtudiantsComponent},
  {path:'parents', component: ParentsComponent},
  {path:'enseignants', component: EnseignantsComponent},
  {path:'entreprises', component: EntreprisesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamantsRoutingModule { }
