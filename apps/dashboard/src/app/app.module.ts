import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardUiModule } from '@ngtw19-nx-demo/dashboard-ui';
import { TodoDataAccessModule } from '@ngtw19-nx-demo/todo-data-access';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoDataAccessModule, DashboardUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
