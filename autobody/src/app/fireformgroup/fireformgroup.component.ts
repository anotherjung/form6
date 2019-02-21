import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; //form12
import { AngularFirestore } from 'angularfire2/firestore'; //form91firebase
import { Observable } from 'rxjs'; //form91firebase

@Component({
  selector: 'app-fireformgroup',
  templateUrl: './fireformgroup.component.html',
  styleUrls: ['./fireformgroup.component.css']
})
export class FireformgroupComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private afs: AngularFirestore) { 
      this.items = afs.collection('items').valueChanges();
    }

        //form11
  items: Observable<any[]>;

  ngOnInit() {

    //form11
     //add
     this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
    this.myForm.valueChanges.subscribe();
  }

  myForm: FormGroup; //form11
  //form state
  loading = false;
  success = false;

  async submitHandler(){
    this.loading = true;
    const formValue = this.myForm.value;
    try {
      await this.afs.collection('items')
        .add(formValue);
        this.success = true;
    } catch(err) { console.error(11,err)}
    this.loading = false;
  }
  get email(){
    return this.myForm.get('email');
  }
  get name(){
    return this.myForm.get('name');
  }
  get message(){
    return this.myForm.get('message');
  }

}
