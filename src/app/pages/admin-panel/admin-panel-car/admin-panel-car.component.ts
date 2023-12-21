import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputUser} from "../dtos/dto-input-user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DtoInputCar} from "../dtos/dto-input-car";
import {AdminPanelService} from "../admin-panel.service";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-admin-panel-car',
  templateUrl: './admin-panel-car.component.html',
  styleUrls: ['./admin-panel-car.component.css']
})
export class AdminPanelCarComponent implements AfterViewInit  {
  cars: DtoInputCar[] = [];
  displayedColumns: string[] = ['numberPlate', 'brand', 'model', 'nbSeats', 'carType', 'fuelType', 'color', 'edit'];
  dataSource = new MatTableDataSource <DtoInputCar>(this.cars);

  constructor(private _adminPanel: AdminPanelService, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getAllCar();
  }


  getAllCar() {
    this._adminPanel.getAllCar().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource <DtoInputCar>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  enableEditMode(car: any): void {
    car.editMode = true;
  }

  disableEditMode(car: any): void {
    car.editMode = false;
    this.updateCar(car);
  }

  updateCar(car:any){
    this._adminPanel.updateCar(car).subscribe(
      response => {
        this.getAllCar();
      }
    );
  }
}
