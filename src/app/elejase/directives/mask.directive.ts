import {Directive, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: '[appMask]',
    providers: [{
      provide: NG_VALUE_ACCESSOR,
        useExisting: MaskDirective,
        multi: true
    }]
})
export class MaskDirective implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  @Input('appMask') appMask: string;

  writeValue(value: any): void{

  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void{
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
      var valor = $event.target.value.replace(/\D/g, '');
      var pad = this.appMask.replace(/\D/g, '').replace(/9/g, '_');
      var valorMask = valor + pad.substring(0, pad.length - valor.length);

      // retorna caso pressionado backspace
      if ($event.keyCode === 8) {
          this.onChange(valor);
          return;
      }

      if (valor.length <= pad.length) {
          this.onChange(valor);
      }

      var valorMaskPos = 0;
      valor = '';
      for (var i = 0; i < this.appMask.length; i++) {
          if (isNaN(parseInt(this.appMask.charAt(i)))) {
              valor += this.appMask.charAt(i);
          } else {
              valor += valorMask[valorMaskPos++];
          }
      }

      if (valor.indexOf('_') > -1) {
          valor = valor.substr(0, valor.indexOf('_'));
      }

      $event.target.value = valor;
  }

    @HostListener('blur', ['$event'])
    onBlur($event: any) {
        if ($event.target.value.length === this.appMask.length) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    }


}
