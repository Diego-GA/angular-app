import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DetailPay } from '../../interfaces/detail-pay.interface';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

  @Input()
  public detailPay: DetailPay = {
    subtotal: 0,
    shippingFees: 0,
    taxes: 0,
    total: 0
  }
}
