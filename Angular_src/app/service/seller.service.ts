import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellerModel } from 'src/app/model/sellerModel';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { SubCategory } from '../model/subcategory.model';
import { Product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // baseUrl:string="http://localhost:8080/api/seller";

  // constructor(private http:HttpClient) { }


  // addSeller(sellerData:Seller){
  //   return this.http.post(this.baseUrl+"/register",sellerData);


  // }
  baseUrl:string="http://localhost:9090/api/seller";
  
  constructor(private http:HttpClient,private localstorageservice: LocalStorageService) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  "Bearer "+this.localstorageservice.getItem('token')
      
    });
  }


  addSeller(sellerData:SellerModel){
    return this.http.post(this.baseUrl+"/register",sellerData);
  }

//   updateSeller(sellerData: Seller): Observable<Seller> {
//     return this.http.put<Seller>(this.baseUrl + "/update", sellerData);
//   }

//  // getAllOrder(): Observable<Order[]> {
//  //   return this.http.get<Order[]>(this.baseUrl + "/getAllOrder");
// //  }

//   getAllProduct(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.baseUrl + "/getAllProduct");
//   }

//   getAllCategory(): Observable<any[]> {
//     return this.http.get<any[]>(this.baseUrl + "/getAllCategory");
//   }

  getAllSubCategory(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.baseUrl + "/getAllSubCategory");
  }

  addProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:9090/api/seller/addProduct", productData);
  }

  updateProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "/updateProduct", productData);
  }

  deleteProduct(productId: number): Observable<string> {
    return this.http.delete<string>(this.baseUrl + "/deleteProduct/" + productId);
  }

//   getProductByName(name: string): Observable<Product> {
//     return this.http.get<Product>(this.baseUrl + "/getProductByName/" + name);
//   }

//   getProductById(id: number): Observable<Product> {
//     return this.http.get<Product>(this.baseUrl + "/getProductByID/" + id);
//   }

//   markProductOutOfStock(sellerId: number, productId: number): Observable<Product> {
//     return this.http.post<Product>(this.baseUrl + "/markProductOutOfStock/" + sellerId + "/" + productId);
//   }

  viewMyProduct(sellerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "/viewMyProducts/" + sellerId);
  }
//   viewSellerById(sellerId: number): Observable<Seller> { 
//     console.log(sellerId);
//     return this.http.get<Seller>(this.baseUrl + "/getSellerById/" + sellerId);
//   } 

  viewSubCategoryById(subCategoryId: number): Observable<SubCategory> { 
    return this.http.get<SubCategory>(this.baseUrl + "/getSubCategoryById/" + subCategoryId);
  }

//   viewOrders(sellerId: number): Observable<number[]> {
//     return this.http.get<number[]>(this.baseUrl + "/getOrdersBySellerId/" + sellerId);
//   }

//   viewSellerOrders(sellerId: number): Observable<Order[]>{
//     return this.http.get<Order[]>(this.baseUrl + "/getOrdersDetailsBySellerId/" + sellerId);
//   }

//   updateOrder(orderData: Order): Observable<Order> {
//     return this.http.put<Order>(this.baseUrl + "/updateOrder", orderData);
//   }

//   viewMyPayments(sellerId: number){
//     return this.http.get<Payment[]>(this.baseUrl + "/viewMyPayments/" + sellerId);
//   }


//   viewAllOrderItemsOfSellerInOrder(orderId:number,sellerId:number): Observable<OrderItem[]>{
//     return this.http.get<OrderItem[]>(this.baseUrl + "/viewAllOrderItemsOfSellerInOrder/" + orderId+"/"+sellerId);
//   }
//   updateOrderItem(orderItemData: OrderItem): Observable<OrderItem> {
//     return this.http.put<OrderItem>(this.baseUrl + "/updateOrderItem", orderItemData);
//   }

//   getOrderById(id: number): Observable<Order> {
//     return this.http.get<Order>(this.baseUrl + "/getOrderById/" + id);
//   }


}
