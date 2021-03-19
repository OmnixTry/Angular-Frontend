import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../models/status.model';

@Injectable()
export class StatusService {
	readonly baseUrl = 'https://localhost:5001/api/status/';
	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get<Status[]>(this.baseUrl);
	}
}
