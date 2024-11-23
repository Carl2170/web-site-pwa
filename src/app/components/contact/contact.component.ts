import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertsService } from '../../shared/utils/alerts.service';
import { ValidatorsService } from '../../shared/utils/validators.service';
import { ContactService } from '../../services/contact.service';
import { CustomValidators } from '../../shared/validators/custom.validator';
import { CommonModule } from '@angular/common';
import { ContactRequset } from '../../interfaces/contact_request.interface';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public contactForm!: FormGroup;
  public loading: boolean = false;

  constructor(
    private contactService: ContactService,
    private validatorsService: ValidatorsService,
    private alertsService: AlertsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, CustomValidators.emailValid]],
      message: ['', [Validators.required]],
    });
  }

  sendContactform() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const formData = this.contactForm.value;
    const data: ContactRequset = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    this.contactService
      .sendContactForm(data)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.loading = false;
          this.contactForm.reset();
          this.alertsService.alertSuccess(
            'El mensaje ha sido enviado correctamente.'
          );
        },
        error: (error) => {
          this.loading = false;
          this.alertsService.alertError(error);
        },
      });
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.contactForm, field);
  }

  getMessageError(field: string): string | null {
    return this.validatorsService.getErrorMessage(this.contactForm, field);
  }
}
