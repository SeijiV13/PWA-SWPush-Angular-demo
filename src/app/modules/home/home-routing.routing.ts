import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
   }
];

export const HomeRoutingRoutes = RouterModule.forChild(routes);
