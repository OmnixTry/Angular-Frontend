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
}
