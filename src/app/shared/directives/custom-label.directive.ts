import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private readonly htmlElement?: ElementRef<HTMLElement>;
  private _errors?: ValidationErrors | null;
  private _color: string = 'red';
  @Input()
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  public set erros(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
  }

  setStyle(): void {
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this._errors) {
      this.htmlElement!.nativeElement.innerText = 'No hay errores';
      return;
    }
    const erros = Object.keys(this._errors);
    if (erros.includes('required')) {
      this.htmlElement!.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if (erros.includes('minlength')) {
      this.htmlElement!.nativeElement.innerText = `Es requerido ${this._errors['minlength'].requiredLength}`;
      return;
    }

    if (erros.includes('email')) {
      this.htmlElement!.nativeElement.innerText = 'El campo no es un Email';
      return;
    }
  }

}
