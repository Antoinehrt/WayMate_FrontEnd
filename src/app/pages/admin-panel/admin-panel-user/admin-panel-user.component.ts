import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DtoInputUser} from "../dtos/dto-input-user";
import {AdminPanelService} from "../admin-panel.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

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
        this.users = response;
        console.log(response);
        this.dataSource = new MatTableDataSource <DtoInputUser>(response);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  editUser(user: DtoInputUser) {
    // Logique pour la modification
    console.log("Edit user", user);
  }

  deleteUser(user: DtoInputUser) {
    // Logique pour la suppression
    console.log("Delete user", user);
  }

  enableEditMode(user: any): void {
    user.editMode = true;
  }

  disableEditMode(user: any): void {
    user.editMode = false;
    console.log(user);
    // Enregistrez les modifications, par exemple, via un service.
  }
}
