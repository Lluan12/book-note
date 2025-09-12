import {
	ChangeDetectorRef,
	Component,
	inject,
	OnInit,
	ViewChild,
} from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuModule } from 'primeng/menu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {
	TableModule,
	Table,
	TableRowCollapseEvent,
	TableRowExpandEvent,
} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Dialog } from 'primeng/dialog';
import { Book } from '../../shared/models/books.model';
import data from '../../../../public/data/data.json';
import { Notes } from '../../shared/models/notes.model';

@Component({
	selector: 'app-books',
	imports: [
		PanelModule,
		ToolbarModule,
		ButtonModule,
		IconFieldModule,
		InputIconModule,
		MenuModule,
		FloatLabelModule,
		FormsModule,
		TableModule,
		InputTextModule,
		TagModule,
		MultiSelectModule,
		SelectModule,
		CommonModule,
		ConfirmDialog,
		Dialog,
	],
	providers: [MessageService, ConfirmationService],
	templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
	private confirmationService = inject(ConfirmationService);
	private messageService = inject(MessageService);
	libretaDialog: boolean = false;
	submitted = false;
	sortItems: MenuItem[] | undefined;
	menuItems: MenuItem[] | undefined;
	books: Book[] = [];
	book!: Book;
	expandedRows = {};
	@ViewChild('dt') dt!: Table;

	ngOnInit() {
		this.menuItems = [
			{ label: 'Renombrar libreta', icon: 'pi pi-pencil' },
			{ label: 'Eliminar libreta', icon: 'pi pi-trash' },
		];

		this.books = [
			{
				id: 1,
				title: 'Primera Libreta',
				created: new Date(),
				updated: new Date(),
				//notes: data
			},
		];

		this.sortItems = [
			{
				label: 'Ordenar por',
				items: [
					{ label: 'Titulo' },
					{ label: 'Fecha de actualizacion' },
					{ label: 'Fecha de creacion' },
				],
			},
		];
	}

	editLibreta() {
		//this.product = { ...product };
		this.libretaDialog = true;
	}

	openNew() {
		//this.product = {};
		this.submitted = false;
		this.libretaDialog = true;
	}

	saveLibreta() {
		this.submitted = true;

		if (this.book.title?.trim()) {
			if (this.book.id) {
				//this.products[this.findIndexById(this.product.id)] = this.product;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Product Updated',
					life: 3000,
				});
			} else {
				//this.products.push(this.product);
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Product Created',
					life: 3000,
				});
			}

			this.books = [...this.books];
			this.libretaDialog = false;
			this.book = {};
		}
	}

	deleteLibreta() {
		this.confirmationService.confirm({
			message:
				'Esta seguro de eliminar la Libreta?, se eliminara las notas dentro de ella',
			header: 'Confirmar',
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: {
				label: 'No',
				severity: 'secondary',
				variant: 'text',
			},
			acceptButtonProps: {
				severity: 'danger',
				label: 'Yes',
			},
			accept: () => {
				/* this.products = this.products.filter(
					(val) => val.id !== product.id
				);
				this.product = {}; */
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Product Deleted',
					life: 3000,
				});
			},
		});
	}
	hideDialog() {
		this.libretaDialog = false;
	}

	onRowExpand(event: TableRowExpandEvent) {}

	onRowCollapse(event: TableRowCollapseEvent) {}
}
