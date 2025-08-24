import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	imports: [FormsModule, EditorModule],
})
export class EditorComponent {
	text: string = '';
}
