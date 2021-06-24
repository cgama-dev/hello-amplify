import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoMapComponent } from '../../modules/map/info-map/info-map.component';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.scss']
})
export class UfComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  name: string;
  color: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(InfoMapComponent, {
      width: 'AUTO',
      data: { name: this.name, color: this.color }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  ngOnInit(): void {
  }

}
