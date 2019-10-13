import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';


import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { AssignPerformanceReviewComponent } from './assign-performance-review/assign-performance-review.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { SubmitFeedbackDetailsComponent } from './submit-feedback-details/submit-feedback-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    EmployeeManageComponent,
    EmployeeUpdateComponent,
    AssignPerformanceReviewComponent,
    SubmitFeedbackComponent,
    SubmitFeedbackDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
