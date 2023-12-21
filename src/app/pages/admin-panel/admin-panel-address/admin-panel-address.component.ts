import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputAddress} from "../dtos/dto-input-address";
import {MatTableDataSource} from "@angular/material/table";
import {DtoInputUser} from "../dtos/dto-input-user";
import {MatPaginator} from "@angular/material/paginator";
import {AdminPanelService} from "../admin-panel.service";

@Component({
  selector: 'app-admin-panel-address',
  templateUrl: './admin-panel-address.component.html',
  styleUrls: ['./admin-panel-address.component.css']
})
export class AdminPanelAddressComponent implements AfterViewInit {
  address: DtoInputAddress[] = [];
  displayedColumns: string[] = ['id', 'street', 'postalCode', 'city', 'number', 'edit','delete'];
  dataSource = new MatTableDataSource <DtoInputAddress>(this.address);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _adminPanel: AdminPanelService) {
  }

  ngAfterViewInit(): void {
    this.getAllAddress();
  }

  getAllAddress() {
    this._adminPanel.getAddress().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputAddress>(response);
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
    this.updateAddress(address);
  }

  updateAddress(address:any){
    this._adminPanel.updateAddress(address).subscribe(
      response => {
        this.getAllAddress();
      }
    );
  }
}
