import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendarConsultaComponent } from './pages/agendar-consultas/agendar-consultas.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
import { RecursosComponent } from './pages/recursos/recursos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'agendar-consulta',
    component: AgendarConsultaComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent,
  },
  {
    path: 'profissionais',
    component: ProfissionaisComponent,
  },
  {
    path: 'recursos',
    component: RecursosComponent,
  },
];
