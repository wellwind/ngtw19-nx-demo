import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoDataAccessModule } from '@ngtw19-nx-demo/todo-data-access';
import { TodoUiModule } from '@ngtw19-nx-demo/todo-ui';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoDataAccessModule, TodoUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
