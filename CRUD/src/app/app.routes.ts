import { Routes } from '@angular/router';

import { CrearComponent } from './post/crear/crear.component';
import { EditarComponent } from './post/editar/editar.component';
import { VistaComponent } from './post/vista/vista.component';
import { ListadoComponent } from './post/listado/listado.component';


export const routes: Routes = [
      { path: '', redirectTo: 'post/listado', pathMatch: 'full'},
      { path: 'post/listado', component: ListadoComponent },
      { path: 'post/:postId/vista', component: VistaComponent },
      { path: 'post/crear', component: CrearComponent },
      { path: 'post/:postId/editar', component: EditarComponent } 
  ];

