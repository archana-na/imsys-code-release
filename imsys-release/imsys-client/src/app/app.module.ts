import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuNavComponent } from './sidemenu-nav/sidemenu-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
  MatListModule, MatCardModule, MatFormField, MatFormFieldModule, MatSpinner, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatDatepickerModule, MatDatepicker, MatNativeDateModule, MatRadioModule, MatOptionModule, MatSlideToggleModule, MatTabGroup, MatTabsModule, MatSortModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatRippleModule, MatSliderModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CreatejobComponent } from './createjob/createjob.component';
import { ApplyjobComponent, ApplicationFormCompnent } from './applyjob/applyjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CdkTableModule } from '../../node_modules/@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { ViewApplyJobComponent } from './viewapplyjob/viewapplyjob.component';
import { AppliedCandidateViewComponent } from './appliedcandiadates/appliedcandiadates.component';
const routes: Routes = [
 
   //{ path: '', redirectTo: 'login', pathMatch: 'full'},
   { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
   { path: 'login', component : LoginComponent },
   { path: 'register', component : RegisterComponent},
   { path: 'dashboard', component: DashboardComponent },
   { path: 'createjob', component: CreatejobComponent },
   { path: 'appliedjob', component: AppliedCandidateViewComponent },

   { path: 'applyjob', component: ApplyjobComponent },
   { path: 'viewmyjob', component: ViewApplyJobComponent },
   { path: '**', component: LoginComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    SidemenuNavComponent,
    LoginComponent,
    CreatejobComponent,
    AppliedCandidateViewComponent,
    ApplyjobComponent,
    DashboardComponent,
    RegisterComponent,
    ViewApplyJobComponent,
    ApplicationFormCompnent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,   
    MatNativeDateModule,  
    MatRadioModule,    
    MatOptionModule,  
    MatSlideToggleModule,
    MatTabsModule,
    CdkTableModule,
    MatSortModule,
    CdkTreeModule,
    MatTreeModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
   
    MatButtonToggleModule,
    
    MatCheckboxModule,
    MatChipsModule,
   
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
   
    MatMenuModule,
   
    MatPaginatorModule,
    MatProgressBarModule,
  
    MatRippleModule,
   
    MatSliderModule,
   
    MatSnackBarModule,
    
    MatStepperModule,
    MatTableModule,
    
   
    MatTooltipModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  entryComponents: [ApplicationFormCompnent],
  bootstrap: [AppComponent]
})
export class AppModule { }

