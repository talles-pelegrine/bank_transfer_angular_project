import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() whenTransferring = new EventEmitter<any>()

  value: number
  destiny: number

  startNewTransfer() {
    console.log("New transfer")
    this.whenTransferring.emit({ value: this.value, destiny: this.destiny})
    this.clearForm()
  }

  clearForm() {
    this.value = null
    this.destiny = null
  }

}
