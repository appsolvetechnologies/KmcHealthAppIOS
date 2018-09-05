import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { SMS } from '@ionic-native/sms';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { DenguePage } from '../pages/dengue/dengue';
import { DenguesymptomsPage } from '../pages/denguesymptoms/denguesymptoms';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomebengaliPage } from '../pages/homebengali/homebengali';
import { HomehindiPage } from '../pages/homehindi/homehindi';
import { HomeurduPage } from '../pages/homeurdu/homeurdu';

import { DengueengPage } from '../pages/dengueeng/dengueeng';
import { DenguesymptomsengPage } from '../pages/denguesymptomseng/denguesymptomseng';
import { DenguedoengPage } from '../pages/denguedoeng/denguedoeng';
import { DenguedontengPage } from '../pages/denguedonteng/denguedonteng';
import { DenguediagnosisengPage } from '../pages/denguediagnosiseng/denguediagnosiseng';
import { DenguetreatmentengPage } from '../pages/denguetreatmenteng/denguetreatmenteng';
import { MalariaengPage } from '../pages/malariaeng/malariaeng';
import { MalariasymptomsengPage } from '../pages/malariasymptomseng/malariasymptomseng';
import { MalariadoengPage } from '../pages/malariadoeng/malariadoeng';
import { MalariadontengPage } from '../pages/malariadonteng/malariadonteng';
import { MalariadiagnosisengPage } from '../pages/malariadiagnosiseng/malariadiagnosiseng';
import { MalariatreatmentengPage } from '../pages/malariatreatmenteng/malariatreatmenteng';
import { MbdengPage } from '../pages/mbdeng/mbdeng';
import { HealthcenterengPage } from '../pages/healthcentereng/healthcentereng';
import { AchievementsengPage } from '../pages/achievementseng/achievementseng';
import { BoroughofficeengPage } from '../pages/boroughofficeeng/boroughofficeeng';
import { ContactusengPage } from '../pages/contactuseng/contactuseng';
import { AnnouncementengPage } from '../pages/announcementeng/announcementeng';
import { SosmainengPage } from '../pages/sosmaineng/sosmaineng';
import { SoscomingengPage } from '../pages/soscomingeng/soscomingeng';

import { DenguebngliPage } from '../pages/denguebngli/denguebngli';
import { DenguesymptomsbngliPage } from '../pages/denguesymptomsbngli/denguesymptomsbngli';
import { DenguediagnosisbngliPage } from '../pages/denguediagnosisbngli/denguediagnosisbngli';
import { DenguedobngliPage } from '../pages/denguedobngli/denguedobngli';
import { DenguedontbngliPage } from '../pages/denguedontbngli/denguedontbngli';
import { DenguetreatmentbngliPage } from '../pages/denguetreatmentbngli/denguetreatmentbngli';
import { MalariabngliPage } from '../pages/malariabngli/malariabngli';
import { MalariasymptomsbngliPage } from '../pages/malariasymptomsbngli/malariasymptomsbngli';
import { MalariadiagnosisbngliPage } from '../pages/malariadiagnosisbngli/malariadiagnosisbngli';
import { MalariadobngliPage } from '../pages/malariadobngli/malariadobngli';
import { MalariadontbngliPage } from '../pages/malariadontbngli/malariadontbngli';
import { MalariatreatmentbngliPage } from '../pages/malariatreatmentbngli/malariatreatmentbngli';
import { AchievementsbngliPage } from '../pages/achievementsbngli/achievementsbngli';
import { MbdbngliPage } from '../pages/mbdbngli/mbdbngli';
import { BoroughofficebngliPage } from '../pages/boroughofficebngli/boroughofficebngli';
import { ContactusbngliPage } from '../pages/contactusbngli/contactusbngli';
import { HealthcenterbngliPage } from '../pages/healthcenterbngli/healthcenterbngli';
import { TestbenglipagePage } from '../pages/testbenglipage/testbenglipage';
import { AnnouncementbngliPage } from '../pages/announcementbngli/announcementbngli';
import { SosmainbngliPage } from '../pages/sosmainbngli/sosmainbngli';

import { DenguehindiPage } from '../pages/denguehindi/denguehindi';
import { DenguesymptomshindiPage } from '../pages/denguesymptomshindi/denguesymptomshindi';
import { DenguediagnosishindiPage } from '../pages/denguediagnosishindi/denguediagnosishindi';
import { DenguedohindiPage } from '../pages/denguedohindi/denguedohindi';
import { DenguedonthindiPage } from '../pages/denguedonthindi/denguedonthindi';
import { DenguetreatmenthindiPage } from '../pages/denguetreatmenthindi/denguetreatmenthindi';
import { MalariahindiPage } from '../pages/malariahindi/malariahindi';
import { MalariasymptomshindiPage } from '../pages/malariasymptomshindi/malariasymptomshindi';
import { MalariadiagnosishindiPage } from '../pages/malariadiagnosishindi/malariadiagnosishindi';
import { MalariadohindiPage } from '../pages/malariadohindi/malariadohindi';
import { MalariadonthindiPage } from '../pages/malariadonthindi/malariadonthindi';
import { MalariatreatmenthindiPage } from '../pages/malariatreatmenthindi/malariatreatmenthindi';
import { BoroughofficehindiPage } from '../pages/boroughofficehindi/boroughofficehindi';
import { ContactushindiPage } from '../pages/contactushindi/contactushindi';
import { MbdhindiPage } from '../pages/mbdhindi/mbdhindi';
import { AchievementshindiPage } from '../pages/achievementshindi/achievementshindi';
import { HealthcenterhindiPage } from '../pages/healthcenterhindi/healthcenterhindi';
import { AnnouncementhindiPage } from '../pages/announcementhindi/announcementhindi';
import { SosmainhindiPage } from '../pages/sosmainhindi/sosmainhindi';

import { DengueurduPage } from '../pages/dengueurdu/dengueurdu';
import { DenguesymptomsurduPage } from '../pages/denguesymptomsurdu/denguesymptomsurdu';
import { DenguediagnosisurduPage } from '../pages/denguediagnosisurdu/denguediagnosisurdu';
import { DenguedourduPage } from '../pages/denguedourdu/denguedourdu';
import { DenguedonturduPage } from '../pages/denguedonturdu/denguedonturdu';
import { DenguetreatmenturduPage } from '../pages/denguetreatmenturdu/denguetreatmenturdu';
import { MalariaurduPage } from '../pages/malariaurdu/malariaurdu';
import { MalariasymptomsurduPage } from '../pages/malariasymptomsurdu/malariasymptomsurdu';
import { MalariadiagnosisurduPage } from '../pages/malariadiagnosisurdu/malariadiagnosisurdu';
import { MalariadourduPage } from '../pages/malariadourdu/malariadourdu';
import { MalariadonturduPage } from '../pages/malariadonturdu/malariadonturdu';
import { MalariatreatmenturduPage } from '../pages/malariatreatmenturdu/malariatreatmenturdu';
import { BoroughofficeurduPage } from '../pages/boroughofficeurdu/boroughofficeurdu';
import { ContactusurduPage } from '../pages/contactusurdu/contactusurdu';
import { MbdurduPage } from '../pages/mbdurdu/mbdurdu';
import { AchievementsurduPage } from '../pages/achievementsurdu/achievementsurdu';
import { HealthcenterurduPage } from '../pages/healthcenterurdu/healthcenterurdu';
import { AnnouncementurduPage } from '../pages/announcementurdu/announcementurdu';
import { SosmainurduPage } from '../pages/sosmainurdu/sosmainurdu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { AppUpdate } from '@ionic-native/app-update';
import { UserInfoPage } from '../pages/user-info/user-info';
import { AllHealthcenterLocationPage } from '../pages/all-healthcenter-location/all-healthcenter-location';
import {AllLocationMapPage} from '../pages/all-location-map/all-location-map';
import {SingleLocationMapPage} from '../pages/single-location-map/single-location-map';
import { SosinfoPage } from '../pages/sosinfo/sosinfo';
import {SingleLocationBoroughMapPage} from '../pages/single-location-borough-map/single-location-borough-map';
import { HospitalsPage } from '../pages/hospitals/hospitals';
import {SosmainbngliPage, SinglehospitalPage} from '../pages/singlehospital/singlehospital';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    TestPage,
    DenguePage,
    DenguesymptomsPage,
    WelcomePage,
    HomebengaliPage,
    HomehindiPage,
    HomeurduPage,
    DengueengPage,
    DenguesymptomsengPage,
    DenguedoengPage,
    DenguedontengPage,
    DenguediagnosisengPage,
    DenguetreatmentengPage,
    MalariaengPage,
    MalariasymptomsengPage,
    MalariadoengPage,
    MalariadontengPage,
    MalariadiagnosisengPage,
    MalariatreatmentengPage ,
    MbdengPage,
    HealthcenterengPage,
    AchievementsengPage,
    BoroughofficeengPage,
    ContactusengPage,
    AnnouncementengPage,
    SosmainengPage,
    SoscomingengPage,

    AchievementsbngliPage,
    MbdbngliPage,
    DenguebngliPage,
    DenguesymptomsbngliPage,
    DenguediagnosisbngliPage,
    DenguedobngliPage,
    DenguedontbngliPage,
    DenguetreatmentbngliPage,
    MalariabngliPage,
    MalariasymptomsbngliPage,
    MalariadiagnosisbngliPage,
    MalariadobngliPage,
    MalariadontbngliPage,
    MalariatreatmentbngliPage,
    BoroughofficebngliPage,
    ContactusbngliPage,
    HealthcenterbngliPage,
    AnnouncementbngliPage,
    SosmainbngliPage,

    MbdhindiPage,
    AchievementshindiPage,
    DenguehindiPage,
    DenguesymptomshindiPage,
    DenguediagnosishindiPage,
    DenguedohindiPage,
    DenguedonthindiPage,
    DenguetreatmenthindiPage,
    MalariahindiPage,
    MalariasymptomshindiPage,
    MalariadiagnosishindiPage,
    MalariadohindiPage,
    MalariadonthindiPage,
    MalariatreatmenthindiPage,
    BoroughofficehindiPage,
    ContactushindiPage,
    HealthcenterhindiPage,
    AnnouncementhindiPage,
    SosmainhindiPage,

    DengueurduPage,
    DenguediagnosisurduPage,
    DenguedonturduPage,
    DenguedourduPage,
    DenguesymptomsurduPage,
    DenguetreatmenturduPage,
    MalariaurduPage,
    MalariadiagnosisurduPage,
    MalariadonturduPage,
    MalariadourduPage,
    MalariasymptomsurduPage,
    MalariatreatmenturduPage,
    AchievementsurduPage,
    BoroughofficeurduPage,
    ContactusurduPage,
    HealthcenterurduPage,
    MbdurduPage,
    AnnouncementurduPage,
    SosmainurduPage,
    TestbenglipagePage,
    UserInfoPage,
    AllHealthcenterLocationPage,
    AllLocationMapPage,
    SingleLocationMapPage,
    SosinfoPage,
    SingleLocationBoroughMapPage,
    HospitalsPage,
    SinglehospitalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    TestPage,
    DenguePage,
    DenguesymptomsPage,
    WelcomePage,
    HomebengaliPage,
    HomehindiPage,
    HomeurduPage,
    DengueengPage,
    DenguesymptomsengPage,
    DenguedoengPage,
    DenguedontengPage,
    DenguediagnosisengPage,
    DenguetreatmentengPage,
    MalariaengPage,
    MalariasymptomsengPage,
    MalariadoengPage,
    MalariadontengPage,
    MalariadiagnosisengPage,
    MalariatreatmentengPage,
    MbdengPage,
    HealthcenterengPage,
    AchievementsengPage,
    BoroughofficeengPage,
    ContactusengPage,
    AnnouncementengPage,
    SosmainengPage,
    SoscomingengPage,

    AchievementsbngliPage,
    MbdbngliPage,
    DenguebngliPage,
    DenguesymptomsbngliPage,
    DenguediagnosisbngliPage,
    DenguedobngliPage,
    DenguedontbngliPage,
    DenguetreatmentbngliPage,
    MalariabngliPage,
    MalariasymptomsbngliPage,
    MalariadiagnosisbngliPage,
    MalariadobngliPage,
    MalariadontbngliPage,
    MalariatreatmentbngliPage,
    BoroughofficebngliPage,
    ContactusbngliPage,
    HealthcenterbngliPage,
    AnnouncementbngliPage,
    SosmainbngliPage,

    MbdhindiPage,
    AchievementshindiPage,
    DenguehindiPage,
    DenguesymptomshindiPage,
    DenguediagnosishindiPage,
    DenguedohindiPage,
    DenguedonthindiPage,
    DenguetreatmenthindiPage,
    MalariahindiPage,
    MalariasymptomshindiPage,
    MalariadiagnosishindiPage,
    MalariadohindiPage,
    MalariadonthindiPage,
    MalariatreatmenthindiPage,
    BoroughofficehindiPage,
    ContactushindiPage,
    HealthcenterhindiPage,
    AnnouncementhindiPage,
    SosmainhindiPage,

    DengueurduPage,
    DenguediagnosisurduPage,
    DenguedonturduPage,
    DenguedourduPage,
    DenguesymptomsurduPage,
    DenguetreatmenturduPage,
    MalariaurduPage,
    MalariadiagnosisurduPage,
    MalariadonturduPage,
    MalariadourduPage,
    MalariasymptomsurduPage,
    MalariatreatmenturduPage,
    AchievementsurduPage,
    BoroughofficeurduPage,
    ContactusurduPage,
    HealthcenterurduPage,
    MbdurduPage,
    AnnouncementurduPage,
    SosmainurduPage,
    TestbenglipagePage,
    UserInfoPage,
    AllHealthcenterLocationPage,
    AllLocationMapPage,
    SingleLocationMapPage,
    SosinfoPage,
    SingleLocationBoroughMapPage,
    HospitalsPage,
    SinglehospitalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppUpdate,
    AppVersion,
    SQLite,
    Geolocation,
    SMS,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
