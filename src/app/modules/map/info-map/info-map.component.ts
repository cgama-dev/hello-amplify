import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-info-map',
  templateUrl: './info-map.component.html',
  styleUrls: ['./info-map.component.scss']
})

export class InfoMapComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [])
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
