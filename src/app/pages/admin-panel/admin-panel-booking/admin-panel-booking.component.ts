import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputAddress} from "../dtos/dto-input-address";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AdminPanelService} from "../admin-panel.service";
import {DtoInputBooking} from "../dtos/dto-input-booking";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-panel-booking',
  templateUrl: './admin-panel-booking.component.html',
  styleUrls: ['./admin-panel-booking.component.css']
})
export class AdminPanelBookingComponent implements AfterViewInit {
  bookings: DtoInputBooking[] = [];
  displayedColumns: string[] = ['id', 'date', 'reservedSeats', 'idPassenger', 'idTrip','delete'];
  dataSource = new MatTableDataSource <DtoInputBooking>(this.bookings);

  constructor(private _adminPanel: AdminPanelService, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.getAllBooking();
  }

  getAllBooking() {
    this._adminPanel.getAllBooking().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputBooking>(response);
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

  deleteUser(address: any) {
  }

  enableEditMode(address: any): void {
    address.editMode = true;

  }

  disableEditMode(address: any): void {
    address.editMode = false;
  }
}
