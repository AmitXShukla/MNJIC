import { Router, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TabledataComponent } from '../services/tabledata/tabledata.component';

export const APP_ROUTES = RouterModule.forRoot([
    
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '/table-data', pathMatch: 'full' },
    { path: '', redirectTo: '/table-data', pathMatch: 'full' },
    { path: 'table-data', component: TabledataComponent },
]);