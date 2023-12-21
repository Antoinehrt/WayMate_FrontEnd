import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputAddress} from "../dtos/dto-input-address";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AdminPanelService} from "../admin-panel.service";
import {DtoInputBooking} from "../dtos/dto-input-booking";

@Component({
  selector: 'app-admin-panel-booking',
  templateUrl: './admin-panel-booking.component.html',
  styleUrls: ['./admin-panel-booking.component.css']
})
export class AdminPanelBookingComponent implements AfterViewInit {
  bookings: DtoInputBooking[] = [];
  displayedColumns: string[] = ['id', 'date', 'reservedSeats', 'idPassenger', 'idTrip', 'edit','delete'];
  dataSource = new MatTableDataSource <DtoInputBooking>(this.bookings);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _adminPanel: AdminPanelService) {
  }

  ngAfterViewInit(): void {
    this.getAllBooking();
  }

  getAllBooking() {
    this._adminPanel.getAllBooking().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputBooking>(response);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  deleteUser(address: any) {
  }

  enableEditMode(address: any): void {
    address.editMode = true;

  }

  disableEditMode(address: any): void {
    address.editMode = false;
  }
}
