import {AfterViewInit, booleanAttribute, Component, ViewChild} from '@angular/core';
import {DtoInputUser} from "../dtos/dto-input-user";
import {AdminPanelService} from "../admin-panel.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DtoOutputAdmin} from "../dtos/dto-output-admin";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-panel-user',
  templateUrl: './admin-panel-user.component.html',
  styleUrls: ['./admin-panel-user.component.css']
})
export class AdminPanelUserComponent implements AfterViewInit  {
  users: DtoInputUser[] = [];
  displayedColumns: string[] = ['id', 'userType', 'username', 'lastName', 'firstName', 'email', 'birthdate', 'phoneNumber', 'gender', 'addressId', 'carPlate', 'isBanned', 'edit', 'delete'];
  dataSource = new MatTableDataSource <DtoInputUser>(this.users);

  constructor(private _adminPanel: AdminPanelService, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getAllUser();

  }


  getAllUser() {
    this._adminPanel.getAllUser().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputUser>(response);
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

  banUser(user: any) {
    if(user.isBanned == false){
      user.isBanned = true;
      this.updateUser(user);
    }
  }

  unbanUser(user: any) {
    if(user.isBanned == true){
      user.isBanned = false;
      this.updateUser(user);
    }
  }

  enableEditMode(user: any): void {
    user.editMode = true;
  }

  disableEditMode(user: any): void {
    user.editMode = false;
    this.updateUser(user);
  }

  updateUser(user: any){
    user.isBanned = booleanAttribute(user.isBanned);
    if(user.userType == "Driver") {
      this._adminPanel.updateDriver(user).subscribe(
        response => {
          this.getAllUser();
        }
      )
    } else if (user.userType == "Passenger"){
      this._adminPanel.updatePassenger(user).subscribe(
        response => {
          this.getAllUser();
        }
      )
    } else {
      this._adminPanel.updateAdmin(user).subscribe(
        response => {
          this.getAllUser();
        }
      )
    }
  }
}
