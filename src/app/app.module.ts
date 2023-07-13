import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "startFromZero": false})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
