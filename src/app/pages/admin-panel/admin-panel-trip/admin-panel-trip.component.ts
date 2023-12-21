import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputAddress} from "../dtos/dto-input-address";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AdminPanelService} from "../admin-panel.service";
import {DtoInputTrip} from "../dtos/dto-input-trip";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-admin-panel-trip',
  templateUrl: './admin-panel-trip.component.html',
  styleUrls: ['./admin-panel-trip.component.css']
})
export class AdminPanelTripComponent implements AfterViewInit {
  trips: DtoInputTrip[] = [];
  displayedColumns: string[] = ['id', 'idDriver', 'smoke', 'price', 'luggage', 'petFriendly', 'date', 'driverMessage', 'airConditioning', 'idStartingPoint', 'idDestination', 'edit','delete'];
  dataSource = new MatTableDataSource <DtoInputTrip>(this.trips);

  constructor(private _adminPanel: AdminPanelService, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit(): void {
    this.getAllTrip();
  }

  getAllTrip() {
    this._adminPanel.getAllTrip().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputTrip>(response);
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

  deleteUser(trip: any) {
  }

  enableEditMode(trip: any): void {
    trip.editMode = true;

  }

  disableEditMode(trip: any): void {
    trip.editMode = false;
  }
}
