import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ElishCustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { FooterComponent } from './shared/footer/footer.component'
import { BackendService } from './services/backend.service';
import { TabledataComponent } from './services/tabledata/tabledata.component';
import { APP_ROUTES } from './shared/routes';
import { AdminComponent } from './shared/admin/admin.component';
// Angular Fire 2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabledataComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    ElishCustomMaterialModule,
    HttpClientModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'mnjic9'), // imports firebase/app needed for everything
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
