import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ShoppingCartService} from "../../services/shopping_cart/shopping-cart.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  check: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
  }

  FunctionCheck() {
    if (!this.emailFormControl.hasError('email') && !this.emailFormControl.hasError('required')) {
      this.router.navigate(['/products', ]);
      this.snackBar.open('Kauf war erfolgreich - Dies ist ein TestWebShop, daher werden Ihnen kein Artikel zugesendet:)');
      localStorage.clear();
    }
  }

}
