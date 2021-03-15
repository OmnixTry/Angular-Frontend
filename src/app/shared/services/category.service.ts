import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Category } from "../models/category.model"

@Injectable()export class CategoryService{
    categories: Category[] = [];
    constructor(private http: HttpClient){
        http.get<Category[]>("https://localhost:5001/api/category")
            .subscribe((categories) => this.categories = categories);
    }

    getName(id:number): string | undefined{
        return this.categories.find(cat => cat.id == id)?.name
    }
}