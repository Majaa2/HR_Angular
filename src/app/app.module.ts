import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { PersonnelAdministrationViewComponent } from './personnelAdministration/personnel-administration-view/personnel-administration-view.component';
import { PersonnelAdministrationCreateEditComponent } from './personnelAdministration/personnel-administration-create-edit/personnel-administration-create-edit.component';
import { CertificatesViewComponent } from './schoolManagement/certifictes/certificates-view/certificates-view.component';
import { CertificatesCreateEditComponent } from './schoolManagement/certifictes/certificates-create-edit/certificates-create-edit.component';
import { SeminarsCreateEditComponent } from './schoolManagement/seminars/seminars-create-edit/seminars-create-edit.component';
import { SeminarsViewComponent } from './schoolManagement/seminars/seminars-view/seminars-view.component';
import { VendorsViewComponent } from './schoolManagement/vendors/vendors-view/vendors-view.component';
import { VendorsCreateEditComponent } from './schoolManagement/vendors/vendors-create-edit/vendors-create-edit.component';
import { AbsenceManagementCreateEditComponent } from './absenceManagement/absence-management-create-edit/absence-management-create-edit.component';
import { AbsenceManagementViewComponent } from './absenceManagement/absence-management-view/absence-management-view.component';
import { OvertimeViewComponent } from './overtime/overtime-view/overtime-view.component';
import { OvertimeCreateEditComponent } from './overtime/overtime-create-edit/overtime-create-edit.component';
import { CitiesCreateEditComponent } from './employeeOrganisation/cities/cities-create-edit/cities-create-edit.component';
import { CitiesViewComponent } from './employeeOrganisation/cities/cities-view/cities-view.component';
import { BranchesViewComponent } from './employeeOrganisation/branches/branches-view/branches-view.component';
import { DepartmentsViewComponent } from './employeeOrganisation/departments/departments-view/departments-view.component';
import { DepartmentsCreateEditComponent } from './employeeOrganisation/departments/departments-create-edit/departments-create-edit.component';
import { BranchesCreateEditComponent } from './employeeOrganisation/branches/branches-create-edit/branches-create-edit.component';
import { FunctionsViewComponent } from './employeeOrganisation/functions/functions-view/functions-view.component';
import { FunctionsCreateEditComponent } from './employeeOrganisation/functions/functions-create-edit/functions-create-edit.component';
import { WorksCreateEditComponent } from './employeeOrganisation/works/works-create-edit/works-create-edit.component';
import { WorksViewComponent } from './employeeOrganisation/works/works-view/works-view.component';
import { CompetitionsViewComponent } from './competitions/competitions-view/competitions-view.component';
import { CompetitionsCreateEditComponent } from './competitions/competitions-create-edit/competitions-create-edit.component';
import { WorkingTimeManagementComponent } from './workingTimeManagement/working-time-management.component';
import { ScoringViewComponent } from './scoring/scoring-view/scoring-view.component';
import { ScoringCreateEditComponent } from './scoring/scoring-create-edit/scoring-create-edit.component';
import { ContributorsCreateEditComponent } from './contributors/contributors-create-edit/contributors-create-edit.component';
import { ContributorsViewComponent } from './contributors/contributors-view/contributors-view.component';
import { CostsViewComponent } from './costs/costs-view/costs-view.component';
import { CostsCreateEditComponent } from './costs/costs-create-edit/costs-create-edit.component';
import { ExpenseTypesCreateEditComponent } from './expenseTypes/expense-types-create-edit/expense-types-create-edit.component';
import { ExpenseTypesViewComponent } from './expenseTypes/expense-types-view/expense-types-view.component';
import { AdministrationViewComponent } from './administration/administration-view/administration-view.component';
import { AdministrationCreateEditComponent } from './administration/administration-create-edit/administration-create-edit.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { PersonalInfoComponent } from './personnelAdministration/personnel-administration-create-edit/modules/personal-info/personal-info.component';
import { BusinessInfoComponent } from './personnelAdministration/personnel-administration-create-edit/modules/business-info/business-info.component';
import { ContactInfoComponent } from './personnelAdministration/personnel-administration-create-edit/modules/contact-info/contact-info.component';
import { SkillsAndKnowledgeComponent } from './personnelAdministration/personnel-administration-create-edit/modules/skills-and-knowledge/skills-and-knowledge.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    PersonnelAdministrationViewComponent,
    PersonnelAdministrationCreateEditComponent,
    CertificatesViewComponent,
    CertificatesCreateEditComponent,
    SeminarsCreateEditComponent,
    SeminarsViewComponent,
    VendorsViewComponent,
    VendorsCreateEditComponent,
    AbsenceManagementCreateEditComponent,
    AbsenceManagementViewComponent,
    OvertimeViewComponent,
    OvertimeCreateEditComponent,
    CitiesCreateEditComponent,
    CitiesViewComponent,
    DepartmentsViewComponent,
    DepartmentsCreateEditComponent,
    BranchesCreateEditComponent,
    FunctionsViewComponent,
    FunctionsCreateEditComponent,
    WorksCreateEditComponent,
    WorksViewComponent,
    CompetitionsViewComponent,
    CompetitionsCreateEditComponent,
    WorkingTimeManagementComponent,
    ScoringViewComponent,
    ScoringCreateEditComponent,
    ContributorsCreateEditComponent,
    ContributorsViewComponent,
    CostsViewComponent,
    CostsCreateEditComponent,
    ExpenseTypesCreateEditComponent,
    ExpenseTypesViewComponent,
    AdministrationViewComponent,
    AdministrationCreateEditComponent,
    AttachmentsComponent,
    BranchesViewComponent,
    PersonalInfoComponent,
    BusinessInfoComponent,
    ContactInfoComponent,
    SkillsAndKnowledgeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NoopAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatMenuModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ScrollingModule,
    MatProgressBarModule,
    
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
