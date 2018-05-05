import { Injectable } from '@angular/core';
// import { STUDENTS } from './mock.data'; //this is mock.data , Also bring import mock.data.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { Item } from './data.type';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';


@Injectable()
export class BackendService {
  /** this is mock.data , Also bring import mock.data.ts
  students = STUDENTS["0"]["data"]; 
  */
  /**  PHP method to retreive data from PHP API
  private _backendUrl = "http://elisheducation.com/MNJIC/connection_api.php?action=f";
  */
  private _firebaseCollURL = "APP_DATA";
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  items$: Observable<Item[]>;
  nameFilter$: BehaviorSubject<string|null>;
  rollNoFilter$: BehaviorSubject<string|null>;

  constructor(private afs: AngularFirestore, private _http: HttpClient) {
    // this.itemsCollection = afs.collection<any>(this._firebaseCollURL);
    //this.items = this.itemsCollection.valueChanges();
    //this.itemDoc = afs.doc<any>('APP_DATA');
    //this.item = this.itemDoc.valueChanges();
  }

  //helper function to save date on updatedAt, createdAt
  getCurrentDate() {
    return new Date();
    //return firebase.firestore.FieldValue.serverTimestamp();
  }

  setData(data) {
    const id = this.afs.createId();
    data["id"] = id;
    data["updatedAt"] = this.getCurrentDate(),
    data["createdAt"] = this.getCurrentDate(),
    data["delete_flag"] = "N"
    return this.afs.collection(this._firebaseCollURL).doc(id).set(data);
  }
  getData(docId){
    return this.afs.collection(this._firebaseCollURL).doc(docId).valueChanges();
  }

  deleteData(docId){
    let data = {};
    data["updatedAt"] = this.getCurrentDate();
    data["delete_flag"] = "Y"
    return this.afs.collection(this._firebaseCollURL).doc(docId).update(data);
  }

  updateData(docId, data){
    data["updatedAt"] = this.getCurrentDate();
    return this.afs.collection(this._firebaseCollURL).doc(docId).update(data);
  }

  getDocs(filters?: any) {
    this.nameFilter$ = new BehaviorSubject(null);
    this.rollNoFilter$ = new BehaviorSubject(null);

    return this.items$ = Observable.combineLatest(
      this.nameFilter$,
      this.rollNoFilter$
    ).switchMap(
      ([STD_NM, ROLLNO]) =>
      this.afs.collection<Item>(this._firebaseCollURL, ref => {
        let query = ref.where('delete_flag', '==', 'N');
        if (STD_NM) { query = ref.where('STD_NM', '>=', STD_NM);query = query.orderBy('STD_NM', 'desc'); };
        if (ROLLNO) { query = ref.where('ROLLNO', '>=', ROLLNO);query = query.orderBy('ROLLNO', 'desc'); };
        return query;
      }).valueChanges()
    );
}

getDocsByName(STD_NM: string|null) {
  this.nameFilter$.next(STD_NM); 
  return this.items$
}
getDocsByRollNo(ROLLNO: string|null) {
  this.rollNoFilter$.next(ROLLNO); 
  return this.items$
}

/** this is mock.data , Also bring import mock.data.ts
  getData() {
    return this.students;
  }
 */
  /**   PHP method to retreive data from PHP API
  getData() {
    //return this.students;
    return this._http.get(this._backendUrl)
      .pipe(
        tap(_ => this.log('test')),
        catchError(this.handleError())
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    //console.log("error");
    return null;
  }
  private log(message: string) {
    //console.log("log");
  }
*/
  getCustomers(filter) {
    return null;
  }
  getFilterCustomers(filter1, filter2) {
    return null;
  }

  getCustomerDoc(filter1, filter2) {
    return null;
  }
  deleteCustomerDoc(filter1, filter2) {
    return null;
  }
  updateCustomerDoc(filter1, filter2, filter3) {
    return null;
  }
}