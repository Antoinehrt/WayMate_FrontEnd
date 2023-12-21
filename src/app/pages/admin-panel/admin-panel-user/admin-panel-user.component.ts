import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputUser} from "../dtos/dto-input-user";
import {AdminPanelService} from "../admin-panel.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DtoOutputAdmin} from "../dtos/dto-output-admin";

@Component({
  selector: 'app-admin-panel-user',
  templateUrl: './admin-panel-user.component.html',
  styleUrls: ['./admin-panel-user.component.css']
})
export class AdminPanelUserComponent implements AfterViewInit  {
  users: DtoInputUser[] = [];
  displayedColumns: string[] = ['id', 'userType', 'username', 'email', 'birthdate', 'isBanned', 'phoneNumber', 'lastName', 'firstName', 'gender', 'addressId', 'carPlate', 'edit', 'delete'];
  dataSource = new MatTableDataSource <DtoInputUser>(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.getAllUser();

  }
  constructor(private _adminPanel: AdminPanelService) {
  }

  getAllUser() {
    this._adminPanel.getAllUser().subscribe(
      response => {
        this.dataSource = new MatTableDataSource <DtoInputUser>(response);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  deleteUser(user: any) {
    if(user.isBanned == false){
      user.isBanned = true;
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
