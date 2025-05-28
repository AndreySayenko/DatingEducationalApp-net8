import { AccountService } from './../_services/account.service';
import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // private accountService = inject(AccountService);
  private toastr = inject(ToastrService);
  cancelRegister = output<boolean>();
  model: any = {};

  constructor(private readonly accountService: AccountService) {}

  register(): void {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
      },
      error: (err) => this.toastr.error(err.error),
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
