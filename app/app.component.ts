import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';
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
import { UserInfoPage } from '../pages/user-info/user-info';
import {AllHealthcenterLocationPage} from '../pages/all-healthcenter-location/all-healthcenter-location';
import {AllLocationMapPage} from '../pages/all-location-map/all-location-map';
import { SingleLocationMapPage } from '../pages/single-location-map/single-location-map';
import { SosinfoPage } from '../pages/sosinfo/sosinfo';
import {SingleLocationBoroughMapPage} from '../pages/single-location-borough-map/single-location-borough-map';
import { HospitalsPage } from '../pages/hospitals/hospitals';
import {SinglehospitalPage} from '../pages/singlehospital/singlehospital';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Welcome', component: WelcomePage },
      { title: 'Home', component: HomePage },
      { title: 'Homebengali', component: HomebengaliPage },      
      { title: 'Homehindi', component: HomehindiPage },
      { title: 'Homeurdu', component: HomeurduPage },
      { title: 'Testbenglipage', component: TestbenglipagePage },

      { title: 'Dengueeng', component: DengueengPage },
      { title: 'Denguesymptomseng', component: DenguesymptomsengPage },
      { title: 'Denguedoeng', component: DenguedoengPage },
      { title: 'Denguedonteng', component: DenguedontengPage },
      { title: 'Denguediagnosiseng', component: DenguediagnosisengPage },
      { title: 'Denguetreatmenteng', component: DenguetreatmentengPage },
      { title: 'Malariaeng', component: MalariaengPage },
      { title: 'Malariasymptomseng', component: MalariasymptomsengPage },
      { title: 'Malariadoeng', component: MalariadoengPage },
      { title: 'Malariadonteng', component: MalariadontengPage },
      { title: 'Malariadiagnosiseng', component: MalariadiagnosisengPage },
      { title: 'Malariatreatmenteng', component: MalariatreatmentengPage },
      { title: 'Mbdeng', component: MbdengPage },
      { title: 'Healthcentereng', component: HealthcenterengPage },
      { title: 'Achievementseng', component: AchievementsengPage },
      { title: 'Boroughofficeeng', component: BoroughofficeengPage },
      { title: 'Contactuseng', component: ContactusengPage },
      { title: 'Announcementeng', component: AnnouncementengPage },
      { title: 'Sosmaineng', component: SosmainengPage },
      { title: 'Soscomingeng', component: SoscomingengPage },


      { title: 'Denguebngli', component: DenguebngliPage },
      { title: 'Denguesymptomsbngli', component: DenguesymptomsbngliPage },
      { title: 'Denguedobngli', component: DenguedobngliPage },
      { title: 'Denguedontbngli', component: DenguedontbngliPage },
      { title: 'Denguediagnosisbngli', component: DenguediagnosisbngliPage },
      { title: 'Denguetreatmentbngli', component: DenguetreatmentbngliPage },
      { title: 'Malariabngli', component: MalariabngliPage },
      { title: 'Malariasymptomsbngli', component: MalariasymptomsbngliPage },
      { title: 'Malariadobngli', component: MalariadobngliPage },
      { title: 'Malariadontbngli', component: MalariadontbngliPage },
      { title: 'Malariadiagnosisbngli', component: MalariadiagnosisbngliPage },
      { title: 'Malariatreatmentbngli', component: MalariatreatmentbngliPage },
      { title: 'Mbdbngli', component: MbdbngliPage },
      { title: 'Healthcenterbngli', component: HealthcenterbngliPage },
      { title: 'Achievementsbngli', component: AchievementsbngliPage },
      { title: 'Boroughofficebngli', component: BoroughofficebngliPage },
      { title: 'Contactusbngli', component: ContactusbngliPage },
      { title: 'Announcementbngli', component: AnnouncementbngliPage },
      { title: 'Sosmainbngli', component: SosmainbngliPage },

      { title: 'Denguehindi', component: DenguehindiPage },
      { title: 'Denguesymptomshindi', component: DenguesymptomshindiPage },
      { title: 'Denguedohindi', component: DenguedohindiPage },
      { title: 'Denguedonthindi', component: DenguedonthindiPage },
      { title: 'Denguediagnosishindi', component: DenguediagnosishindiPage },
      { title: 'Denguetreatmenthindi', component: DenguetreatmenthindiPage },
      { title: 'Malariahindi', component: MalariahindiPage },
      { title: 'Malariasymptomshindi', component: MalariasymptomshindiPage },
      { title: 'Malariadohindi', component: MalariadohindiPage },
      { title: 'Malariadonthindi', component: MalariadonthindiPage },
      { title: 'Malariadiagnosishindi', component: MalariadiagnosishindiPage },
      { title: 'Malariatreatmenthindi', component: MalariatreatmenthindiPage },
      { title: 'Mbdhindi', component: MbdhindiPage },
      { title: 'Healthcenterhindi', component: HealthcenterhindiPage },
      { title: 'Achievementshindi', component: AchievementshindiPage },
      { title: 'Boroughofficehindi', component: BoroughofficehindiPage },
      { title: 'Contactushindi', component: ContactushindiPage },
      { title: 'Announcementhindi', component: AnnouncementhindiPage },
      { title: 'Sosmainhindi', component: SosmainhindiPage },

      { title: 'Dengueurdu', component: DengueurduPage },
      { title: 'Denguesymptomsurdu', component: DenguesymptomsurduPage },
      { title: 'Denguedourdu', component: DenguedourduPage },
      { title: 'Denguedonturdu', component: DenguedonturduPage },
      { title: 'Denguediagnosisurdu', component: DenguediagnosisurduPage },
      { title: 'Denguetreatmenturdu', component: DenguetreatmenturduPage },
      { title: 'Malariaurdu', component: MalariaurduPage },
      { title: 'Malariasymptomsurdu', component: MalariasymptomsurduPage },
      { title: 'Malariadourdu', component: MalariadourduPage },
      { title: 'Malariadonturdu', component: MalariadonturduPage },
      { title: 'Malariadiagnosisurdu', component: MalariadiagnosisurduPage },
      { title: 'Malariatreatmenturdu', component: MalariatreatmenturduPage },
      { title: 'Mbdurdu', component: MbdurduPage },
      { title: 'Healthcenterurdu', component: HealthcenterurduPage },
      { title: 'Achievementsurdu', component: AchievementsurduPage },
      { title: 'Boroughofficeurdu', component: BoroughofficeurduPage },
      { title: 'Contactusurdu', component: ContactusurduPage },
      { title: 'Announcementurdu', component: AnnouncementurduPage },
      { title: 'Sosmainurdu', component: SosmainurduPage },
      {title:'UserInformation', component:UserInfoPage},
      {title:'AllHealthcenterLocation',component:AllHealthcenterLocationPage},
      {title:'AllLocationMap',component:AllLocationMapPage},
      {title:'SingleLocationMap',component:SingleLocationMapPage},
      {title:'SOSCommunication',component:SosinfoPage},
      {title:'BoroughLocation',component:SingleLocationBoroughMapPage},
      {title:'Hospitals',component:HospitalsPage},
      {title:'Single Hospital Location', component:SinglehospitalPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
