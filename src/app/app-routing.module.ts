import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbsenceManagementCreateEditComponent } from './absenceManagement/absence-management-create-edit/absence-management-create-edit.component';
import { AbsenceManagementViewComponent } from './absenceManagement/absence-management-view/absence-management-view.component';
import { AdministrationCreateEditComponent } from './administration/administration-create-edit/administration-create-edit.component';
import { AdministrationViewComponent } from './administration/administration-view/administration-view.component';
import { ContributorsCreateEditComponent } from './contributors/contributors-create-edit/contributors-create-edit.component';
import { ContributorsViewComponent } from './contributors/contributors-view/contributors-view.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { CostsCreateEditComponent } from './costs/costs-create-edit/costs-create-edit.component';
import { CostsViewComponent } from './costs/costs-view/costs-view.component';
import { BranchesCreateEditComponent } from './employeeOrganisation/branches/branches-create-edit/branches-create-edit.component';
import { BranchesViewComponent } from './employeeOrganisation/branches/branches-view/branches-view.component';
import { CitiesCreateEditComponent } from './employeeOrganisation/cities/cities-create-edit/cities-create-edit.component';
import { CitiesViewComponent } from './employeeOrganisation/cities/cities-view/cities-view.component';
import { DepartmentsCreateEditComponent } from './employeeOrganisation/departments/departments-create-edit/departments-create-edit.component';
import { DepartmentsViewComponent } from './employeeOrganisation/departments/departments-view/departments-view.component';
import { FunctionsCreateEditComponent } from './employeeOrganisation/functions/functions-create-edit/functions-create-edit.component';
import { FunctionsViewComponent } from './employeeOrganisation/functions/functions-view/functions-view.component';
import { WorksCreateEditComponent } from './employeeOrganisation/works/works-create-edit/works-create-edit.component';
import { WorksViewComponent } from './employeeOrganisation/works/works-view/works-view.component';
import { CompetitionsCreateEditComponent } from './competitions/competitions-create-edit/competitions-create-edit.component';
import { CompetitionsViewComponent } from './competitions/competitions-view/competitions-view.component';
import { LoginComponent } from './login/login.component';
import { OvertimeCreateEditComponent } from './overtime/overtime-create-edit/overtime-create-edit.component';
import { OvertimeViewComponent } from './overtime/overtime-view/overtime-view.component';
import { PersonnelAdministrationCreateEditComponent } from './personnelAdministration/personnel-administration-create-edit/personnel-administration-create-edit.component';
import { PersonnelAdministrationViewComponent } from './personnelAdministration/personnel-administration-view/personnel-administration-view.component';
import { CertificatesCreateEditComponent } from './schoolManagement/certifictes/certificates-create-edit/certificates-create-edit.component';
import { CertificatesViewComponent } from './schoolManagement/certifictes/certificates-view/certificates-view.component';
import { SeminarsCreateEditComponent } from './schoolManagement/seminars/seminars-create-edit/seminars-create-edit.component';
import { SeminarsViewComponent } from './schoolManagement/seminars/seminars-view/seminars-view.component';
import { VendorsCreateEditComponent } from './schoolManagement/vendors/vendors-create-edit/vendors-create-edit.component';
import { VendorsViewComponent } from './schoolManagement/vendors/vendors-view/vendors-view.component';
import { ScoringCreateEditComponent } from './scoring/scoring-create-edit/scoring-create-edit.component';
import { ScoringViewComponent } from './scoring/scoring-view/scoring-view.component';
import { ExpenseTypesCreateEditComponent } from './expenseTypes/expense-types-create-edit/expense-types-create-edit.component';
import { ExpenseTypesViewComponent } from './expenseTypes/expense-types-view/expense-types-view.component';
import { WorkingTimeManagementComponent } from './workingTimeManagement/working-time-management.component';

const routes: Routes = [
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  // { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  // { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  // { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  // { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'Login', component: LoginComponent},
  { path: 'Absences', component: AbsenceManagementViewComponent},
  { path: 'Absences/Create', component: AbsenceManagementCreateEditComponent},
  { path: 'Absences/Edit/:id', component: AbsenceManagementCreateEditComponent},
  { path: 'AdminSettings', component: AdministrationViewComponent},
  { path: 'AdminSettings/Create', component: AdministrationCreateEditComponent},
  { path: 'AdminSettings/Edit/:id', component: AdministrationCreateEditComponent},
  { path: 'Contributors', component: ContributorsViewComponent},
  { path: 'Contributors/Create', component: ContributorsCreateEditComponent},
  { path: 'Contributors/Edit/:id', component: ContributorsCreateEditComponent},
  { path: 'Attachments', component: AttachmentsComponent},
  { path: 'Expenses', component: CostsViewComponent},
  { path: 'Expenses/Create', component: CostsCreateEditComponent},
  { path: 'Expenses/Edit/:id', component: CostsCreateEditComponent},
  { path: 'Functions', component: FunctionsViewComponent},
  { path: 'Functions/Create', component: FunctionsCreateEditComponent},
  { path: 'Functions/Edit/:id', component: FunctionsCreateEditComponent},
  { path: 'Departments', component: DepartmentsViewComponent},
  { path: 'Departments/Create', component: DepartmentsCreateEditComponent},
  { path: 'Departments/Edit/:id', component: DepartmentsCreateEditComponent},
  { path: 'Works', component: WorksViewComponent},
  { path: 'Works/Create', component: WorksCreateEditComponent},
  { path: 'Works/Edit/:id', component: WorksCreateEditComponent},
  { path: 'Branches', component: BranchesViewComponent},
  { path: 'Branches/Create', component: BranchesCreateEditComponent},
  { path: 'Branches/Edit/:id', component: BranchesCreateEditComponent},
  { path: 'Cities', component: CitiesViewComponent},
  { path: 'Cities/Create', component: CitiesCreateEditComponent},
  { path: 'Cities/Edit/:id', component: CitiesCreateEditComponent},
  { path: 'Competitions', component: CompetitionsViewComponent},
  { path: 'Competitions/Create', component: CompetitionsCreateEditComponent},
  { path: 'Competitions/Edit/:id', component: CompetitionsCreateEditComponent},
  { path: 'Overtime', component: OvertimeViewComponent},
  { path: 'Overtime/Create', component: OvertimeCreateEditComponent},
  { path: 'Overtime/Edit/:id', component: OvertimeCreateEditComponent},
  { path: 'Employee', component: PersonnelAdministrationViewComponent},
  { path: 'Employee/Create', component: PersonnelAdministrationCreateEditComponent},
  { path: 'Employee/Edit/:id', component: PersonnelAdministrationCreateEditComponent},
  { path: 'Seminars', component: SeminarsViewComponent},
  { path: 'Seminars/Create', component: SeminarsCreateEditComponent},
  { path: 'Seminars/Edit/:id', component: SeminarsCreateEditComponent},
  { path: 'Certificates', component: CertificatesViewComponent},
  { path: 'Certificates/Create', component: CertificatesCreateEditComponent},
  { path: 'Certificates/Edit/:id', component: CertificatesCreateEditComponent},
  { path: 'Vendors', component: VendorsViewComponent},
  { path: 'Vendors/Create', component: VendorsCreateEditComponent},
  { path: 'Vendors/Edit/:id', component: VendorsCreateEditComponent},
  { path: 'Scoring', component: ScoringViewComponent},
  { path: 'Scoring/Create', component: ScoringCreateEditComponent},
  { path: 'Scoring/Edit/:id', component: ScoringCreateEditComponent},
  { path: 'ExpenseTypes', component: ExpenseTypesViewComponent},
  { path: 'ExpenseTypes/Create', component: ExpenseTypesCreateEditComponent},
  { path: 'ExpenseTypes/Edit/:id', component: ExpenseTypesCreateEditComponent},
  { path: 'Administration', component: AdministrationViewComponent},
  { path: 'Administration/Create', component: AdministrationCreateEditComponent},
  { path: 'Administration/Edit/:id', component: AdministrationCreateEditComponent},
  { path: 'WorkingTime', component: WorkingTimeManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
