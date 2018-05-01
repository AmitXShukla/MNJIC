import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElishCustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { FooterComponent } from './shared/footer/footer.component'
import { BackendService } from './services/backend.service';
import { TabledataComponent } from './services/tabledata/tabledata.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    ElishCustomMaterialModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
