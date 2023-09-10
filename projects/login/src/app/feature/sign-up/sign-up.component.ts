import { AuthService } from '@@auth';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pages-register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];
  formSignup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.formSignup = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }


  signUp() {
    if (this.formSignup.dirty && this.formSignup.valid) {
      const data = Object.assign({}, this.formSignup.value);

      this.authService.SignUp(data.userName, data.email, data.senha);
    } else {
      this.toastr.warning('Informe todos os campos obrigatórios!');
    }
  }
}
