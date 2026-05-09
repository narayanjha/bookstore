import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimengModule } from '../../shared/primeng/primeng-module';
import { ApiService } from '../../core/services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, PrimengModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  fb = inject(FormBuilder);

  apiService = inject(ApiService);

  messageService = inject(MessageService);

  loading = false;

  user:any = null;

  form = this.fb.group({

    name: ['', Validators.required],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    mobile: [''],

    address: ['']

  });

  ngOnInit(): void {

    const user = localStorage.getItem('user');

    if(user){

      const parsedUser = JSON.parse(user);

      this.loadProfile(parsedUser.id);
    }
  }

  loadProfile(userId:string){

    this.apiService
      .getProfile(userId)
      .subscribe({

        next:(res:any)=>{

          this.user = res;

          this.form.patchValue({
            name: res.name,
            email: res.email,
            mobile: res.mobile,
            address: res.address
          });

        },

        error:(err)=>{
          console.log(err);
        }

      });
  }

  updateProfile(){

    if(this.form.invalid){

      this.form.markAllAsTouched();

      return;
    }

    this.loading = true;

    this.apiService
      .updateProfile(
        this.user.id,
        this.form.value
      )
      .subscribe({

        next:(res:any)=>{

          this.loading = false;

          this.messageService.add({
            severity:'success',
            summary:'Success',
            detail:'Profile updated successfully'
          });

        },

        error:(err)=>{

          this.loading = false;

          this.messageService.add({
            severity:'error',
            summary:'Error',
            detail:'Update failed'
          });

        }

      });

  }
}
