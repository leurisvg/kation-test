import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';

import { TitleComponent } from './components/title/title.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TableComponent } from './components/table/table.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';

@NgModule({
	declarations: [
		AppComponent,
		TitleComponent,
		UserIconComponent,
		SubtitleComponent,
		TableComponent,
		ArrowComponent,
		CustomPaginatorComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {
}
