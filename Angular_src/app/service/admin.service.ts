import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { adminModel } from '../model/adminModel';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { SubCategory } from '../model/subcategory.model';
import { Product } from '../model/product.model';
@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient, private localstorageservice: LocalStorageService) { }
    baseUrl: string = "http://localhost:9090/api/admin";
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.localstorageservice.getItem('token')

        });
    }
    addAdmin(admin: adminModel): Observable<adminModel>{
  
        return this.http.post<adminModel>(this.baseUrl+"/addAdmin",admin);
      }

      viewAdminById(adminId: number): Observable<adminModel> {
    
        return this.http.get<adminModel>(this.baseUrl + "/viewAdminById/" + adminId);
      }

      getAllProducts(): Observable<Product[]> {
    
        return this.http.get<Product[]>(this.baseUrl + "/viewAllProduct");
      }
    
      getAllCategories(): Observable<any[]> {
        
        return this.http.get<any[]>(this.baseUrl + "/viewAllCategory")
      }
    
      getAllSubCategories(): Observable<any[]> {
        
        return this.http.get<any[]>(this.baseUrl + "/viewAllSubCategory");
      }
    
    //   getAllSellers(): Observable<Seller[]> {
        
    //     return this.http.get<Seller[]>(this.baseUrl + "/viewAllSeller",{ headers: this.getHeaders(), responseType: 'json' });
    //   }
    
    //   getAllCustomers(): Observable<Customer[]> {
    
    //     return this.http.get<Customer[]>(this.baseUrl + "/viewAllCustomer",{ headers: this.getHeaders(), responseType: 'json' });
    //   }
    
    //   getAllPayments(): Observable<Payment[]> {
    //     return this.http.get<Payment[]>(this.baseUrl + "/viewAllPayment",{ headers: this.getHeaders(), responseType: 'json' });
    //   }
    
    //   getAllOrders(): Observable<Order[]> {
    //     return this.http.get<Order[]>(this.baseUrl + "/viewAllOrder",{ headers: this.getHeaders(), responseType: 'json' });
    //   }
    
      deleteProduct(id: number): Observable<String> {
        
        return this.http.delete<String>(this.baseUrl + "/deleteProduct/" + id);
      }
    
      deleteCategory(id: number): Observable<String> {
        return this.http.delete<String>(this.baseUrl + "/deleteCategory/" + id,{ headers: this.getHeaders(),responseType:'text' as  'json' });
      }
    
      deleteSubCategory(id: number): Observable<String> {
        
        return this.http.delete<String>(this.baseUrl + "/deleteSubCategory/" + id);
      }
    
      deleteSeller(id: number): Observable<String> {
        
        return this.http.delete<String>(this.baseUrl + "/deleteSeller/" + id);
      }
    
      deleteCustomer(id: number): Observable<String> {
        
        return this.http.delete<String>(this.baseUrl + "/deleteCustomer/" + id,{ headers: this.getHeaders(),responseType:'text' as  'json'  });
      }
    
      addCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(this.baseUrl + "/addCategory", category,{ headers: this.getHeaders(), responseType: 'json' });
      }
    
      addSubCategory(subcategory: SubCategory): Observable<SubCategory> {
        return this.http.post<SubCategory>(this.baseUrl + "/addSubCategory", subcategory,{ headers: this.getHeaders(), responseType: 'json' });
      }
    
      
    
    //   getOrderItems(orderId : number): Observable<OrderItem[]>{
    //     return this.http.get<OrderItem[]>(this.baseUrl + "/getOrderItemsByOrderId/" + orderId,{ headers: this.getHeaders(), responseType: 'json' });
    //   }

}
