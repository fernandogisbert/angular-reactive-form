import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Aquí se guardaría
  propiedadFormulario: FormGroup;

  constructor(private formbuildr: FormBuilder) {
    
    // this.formbuildr = new FormBuilder(); Esto es equivalente al contenido del paréntesis del constructor

    this.createForm();
   }

  ngOnInit(): void {
  }

  // Aquí definiriamos los campos y para asociar a los inputs del html
  createForm(): void {
    this.propiedadFormulario = this.formbuildr.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(2)]],
      edad: [''],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: this.formbuildr.group({
        calle: [''],
        ciudad: [''],
        provincia: [''],
        pais: ['']
      })
    });
  }

  // Método que hará cuando cliquemos en el submit
  saveForm(): void {
    console.log( this.propiedadFormulario.value);
    this.propiedadFormulario.reset();
  }

  // validaciones

  get nombreInvalido(): boolean {
    return this.propiedadFormulario.get('nombre').invalid && this.propiedadFormulario.get('nombre').touched;
  }
  get nombreValido(): boolean {
    return this.propiedadFormulario.get('nombre').valid && this.propiedadFormulario.get('nombre').touched;
  }

  get apellidoInvalido(): boolean {
    return this.propiedadFormulario.get('apellido').invalid && this.propiedadFormulario.get('apellido').touched;
  }

  get apellidoValido(): boolean {
    return this.propiedadFormulario.get('apellido').valid && this.propiedadFormulario.get('apellido').touched;
  }

  get correoInvalido(): boolean {
    return this.propiedadFormulario.get('email').invalid && this.propiedadFormulario.get('email').touched;
  }
  get correoValido(): boolean {
    return this.propiedadFormulario.get('email').valid && this.propiedadFormulario.get('email').touched;
  }

}
