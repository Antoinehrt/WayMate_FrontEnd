import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputAddress} from "../dtos/dto-input-address";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AdminPanelService} from "../admin-panel.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort,  Sort} from "@angular/material/sort";


@Component({
  selector: 'app-admin-panel-address',
  templateUrl: './admin-panel-address.component.html',
  styleUrls: ['./admin-panel-address.component.css']
})
export class AdminPanelAddressComponent implements AfterViewInit {
  address: DtoInputAddress[] = [];
  displayedColumns: string[] = ['id', 'street', 'number', 'postalCode', 'city', 'country' , 'edit'];
  dataSource = new MatTableDataSource <DtoInputAddress>(this.address);

  constructor(private _adminPanel: AdminPanelService, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.getAllAddress();
  }
  getAllAddress() {
    this._adminPanel.getAddress().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputAddress>(response);
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
  enableEditMode(address: any): void {
    address.editMode = true;
  }
  disableEditMode(address: any): void {
    address.editMode = false;
    this.updateAddress(address);
  }
  updateAddress(address:any){
    this._adminPanel.updateAddress(address).subscribe(
      () => {
        this.getAllAddress();
      }
    );
  }
}
