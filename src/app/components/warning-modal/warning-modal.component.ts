import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'warning-modal-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './warning-modal-button.component.html',
  styleUrl: './warning-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningModalButtonComponent { 
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(WarningModalDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

@Component({
  selector: 'warning-modal',
  templateUrl: './warning-modal.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningModalDialogComponent {
  readonly dialogRef = inject(MatDialogRef<WarningModalDialogComponent>);
}