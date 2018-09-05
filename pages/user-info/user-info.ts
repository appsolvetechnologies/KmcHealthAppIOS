import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SosinfoPage } from '../sosinfo/sosinfo';
/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  public peproni:boolean=false;
  public peproni1:boolean=true;
  data:any = {};
  constructor(public navCtrl: NavController, public http: HttpClient,public navParams: NavParams, private sqlite: SQLite) {
    this.data.Sl=10;
      this.data.Name = '';
      this.data.EmailId = '';
      this.data.Phone= '';
      this.data.Contact1Phone= '';
      this.data.Contact1Phone2= '';
      this.data.response = {};
      this.http = http;
    this.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  username='';
  emailid='';
  phno='';
  phno1='';
  phno2='';
items = [];
save()
{

  this.savedate();

this.sqlite.create({
name: 'data.db',
location: 'default'
})
.then((db: SQLiteObject) => {

//data insert section
db.executeSql('CREATE TABLE IF NOT EXISTS usernameList(id INTEGER PRIMARY KEY AUTOINCREMENT,name,email,phno,phno1,phno2)', {})
.then(() => console.log('') //alert('Executed SQL');
)
.catch(e => console.log(e));

//data insert section
db.executeSql('INSERT INTO usernameList(name,email,phno,phno1,phno2) VALUES(?,?,?,?,?)', [this.username,this.emailid,this.phno,this.phno1,this.phno2])
.then(() => alert('Executed SQL'))
.catch(e => console.log(e));


//data retrieve section

this.show();

})
.catch(e => alert(JSON.stringify(e)));
alert(this.username);

}

savedate(){
  const req = this.http.post('http://localhost:5200//api/SOS', //'http://kmc.testplz.in/api/SOS'
  {
      Name: this.username, 
      EmailId: this.emailid,
      Phone: this.phno,
      Contact1Phone: this.phno1,
      Contact1Phone2: this.phno2
  } )  
  .subscribe(Response => {
    alert(JSON.stringify(Response));
    console.log(JSON.stringify(Response));    
    }, error => {
      alert(JSON.stringify(error));
    console.log(JSON.stringify(error));
  });
  }

show()
{

this.sqlite.create({
name: 'data.db',
location: 'default'
})
.then((db: SQLiteObject) => {

//data retrieve section

db.executeSql('select * from usernameList', {}).then((data) => {

alert(JSON.stringify(data));

//alert(data.rows.length);
//alert(data.rows.item(5).name);
this.items = [];
if(data.rows.length > 0) {
//for(var i = 0; i < data.rows.length; i++) {
for(var i = 0; i < 1; i++) {
//alert(data.rows.item(i).name);�
this.items.push({name: data.rows.item(i).name, emailid: data.rows.item(i).email,
  phno: data.rows.item(i).phno, phno1: data.rows.item(i).phno1,
  phno2: data.rows.item(i).phno2});
  this.peproni=true;
  this.peproni1=false;
 }
}

}, (err) => {
alert('Unable to execute sql: '+JSON.stringify(err));
});
})
.catch(e => alert(JSON.stringify(e)));
alert(this.username);

}

navigate(param) {
  if(param=='sos')
  this.navCtrl.push(SosinfoPage);
}

}
