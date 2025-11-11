import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-agendar-consulta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agendar-consultas.component.html',
  styleUrls: ['./agendar-consultas.component.css'],
})
export class AgendarConsultaComponent {
  consultaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.consultaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      tipoConsulta: ['', [Validators.required]],
      preferenciaHorario: [''],
      modalidade: ['online', [Validators.required]],
      mensagem: [''],
    });
  }

  onSubmit(): void {
    if (this.consultaForm.valid) {
      console.log('Dados do formulário:', this.consultaForm.value);
      alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
      this.consultaForm.reset({
        modalidade: 'online',
      });
    } else {
      Object.keys(this.consultaForm.controls).forEach((key) => {
        this.consultaForm.get(key)?.markAsTouched();
      });
    }
  }
}
