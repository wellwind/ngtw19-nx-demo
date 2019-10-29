import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoManagerComponent],
  exports: [TodoManagerComponent]
})
export class DashboardUiModule {}
