import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { AssignPerformanceReviewComponent } from './assign-performance-review/assign-performance-review.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { SubmitFeedbackDetailsComponent } from './submit-feedback-details/submit-feedback-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'update/:id', component: EmployeeUpdateComponent },
  { path: 'perfAssign', component: AssignPerformanceReviewComponent },
  { path: 'feedback/:id', component: SubmitFeedbackDetailsComponent },
  { path: 'submitFeedback', component: SubmitFeedbackComponent },
  { path: 'employees', component: EmployeeManageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
