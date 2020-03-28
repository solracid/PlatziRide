import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthenticationService } from 'src/services/authentication';
import { RideService } from 'src/services/ride';
import { TokenInterceptorService } from 'src/services/tokeninterceptor';
import { WeatherService } from 'src/services/weather';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RideService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
