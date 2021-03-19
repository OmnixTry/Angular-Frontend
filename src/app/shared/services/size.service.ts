import { SafeMethodCall } from '@angular/compiler';
import { Size } from '../models/size.model';

export class SizeService {
	public sizes: Size[] = [
		new Size(1, 'Big'),
		new Size(2, 'medium'),
		new Size(3, 'small'),
	];

	getAll() {
		return this.sizes;
	}

	translate(id: number): string {
		switch (id) {
			case 1:
				return 'Small';
			case 2:
				return 'Medium';
			case 3:
				return 'Large';
			default:
				return '';
		}
	}
}
