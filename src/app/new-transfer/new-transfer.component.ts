import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  value: number
  destiny: number

  startNewTransfer() {
    console.log("New transfer")
    console.log("Value: ", this.value)
    console.log("Destiny: ", this.destiny)
  }

}
