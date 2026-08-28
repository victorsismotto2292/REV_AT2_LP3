import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  alertButtons=['OK'];
  msn: string = '';

  constructor(){}
  conta: string = '';
  vgorjeta = 0;

  gorjeta(event: RangeCustomEvent){
    this.vgorjeta = parseInt(event.detail.value.toString());
  }

  valorTotal(){
    const vconta = parseFloat(this.conta);

    if(isNaN(vconta) || vconta <=0 ){
      this.msn = 'Inválido';
      return;
    }
    else{
      const range_g = this.vgorjeta;
      const total = vconta * (1+range_g/100);
      const gorjeta = total - vconta;

      this.msn = `Valor total: R$${total.toFixed(2)} | Gorjeta: R$${gorjeta.toFixed(2)}`;
    }
  }
  }
