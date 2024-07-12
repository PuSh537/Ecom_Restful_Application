import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product:any;
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.adminService.getAllProducts().subscribe(res=>{
      console.log(res);
    //  alert('getAllProducts product')
      this.product=res;
    })
  }

  deleteProduct(id:number){
    this.adminService.deleteProduct(id).subscribe(res=>{
      console.log(res)
    // alert('deleted product')
      this.getAllProducts()
    })
  }
  goBack(){
    this.router.navigate(['/adminDashboardHeader']);
  }
}
