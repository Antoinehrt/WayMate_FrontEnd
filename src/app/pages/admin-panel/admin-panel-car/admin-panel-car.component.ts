import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputUser} from "../dtos/dto-input-user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DtoInputCar} from "../dtos/dto-input-car";
import {AdminPanelService} from "../admin-panel.service";

@Component({
  selector: 'app-admin-panel-car',
  templateUrl: './admin-panel-car.component.html',
  styleUrls: ['./admin-panel-car.component.css']
})
export class AdminPanelCarComponent implements AfterViewInit  {
  cars: DtoInputCar[] = [];
  displayedColumns: string[] = ['numberPlate', 'model', 'nbSeats', 'brand', 'carType', 'fuelType', 'color', 'edit', 'delete'];
  dataSource = new MatTableDataSource <DtoInputCar>(this.cars);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.getAllCar();
  }

  constructor(private _adminPanel: AdminPanelService) {
  }

  getAllCar() {
    this._adminPanel.getAllCar().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource <DtoInputCar>(response);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  deleteUser(car: any) {

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
