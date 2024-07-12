import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { CustomerComponent } from './component/customer/customer/customer.component';
import { AddAdminComponent } from './component/admin/add-admin/add-admin.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { ViewAdminComponent } from './component/admin/view-admin/view-admin.component';
import { AboutUsComponent } from './component/customer/about-us/about-us.component';
import { ContactUsComponent } from './component/customer/contact-us/contact-us.component';
import { CustomerServiceNavComponent } from './component/customer/customer-service-nav/customer-service-nav.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { SellerRegisterComponent } from './component/seller/seller-register.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SellerDashboardComponent } from './component/seller/seller-dashboard/seller-dashboard.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ViewMyProductsComponent } from './component/seller/view-my-products/view-my-products.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {path:'login',component:LoginComponent},
  {path: 'customerRegister',component:CustomerComponent},
  {path:'addAdmin', component: AddAdminComponent},
  {path:'adminDashboardHeader', component: AdminHeaderComponent},
  {path:'viewAdmin', component: ViewAdminComponent},
  {path:'adminDashboard', component: AdminDashboardComponent,},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'customerNav',component:CustomerServiceNavComponent},
  {path:'view-profile',component:CustomerComponent},
  {path:'sellerRegister',component:SellerRegisterComponent},
  {path:'addProduct',component:ProductDetailsComponent},
  // {path:'sellerDashboard',component:SellerDashboardComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent},
  {path:'adminDashboard/viewProducts',component:ProductListComponent},

  {path:'sellerDashboard', component:SellerDashboardComponent},
  // {path:'sellerRegister',component:SellerComponent},
  //   {path:'sellerDashboard/view-profile',component:ViewProfileComponent},
  //   {path:'seller-dashboard/add-products',component:AddProductComponent},
  //   {path:'seller-dashboard/view-categories',component:ViewCategoriesComponent},
  //   {path:'seller-dashboard/view-sub-categories',component:ViewSubCategoriesComponent},
  //   {path:'seller-dashboard/view-orders',component:ViewOrdersComponent},
  //   {path:'seller-dashboard/view-payments',component:ViewPaymentsComponent},
    {path:'seller-dashboard/view-My-Products',component:ViewMyProductsComponent},
    // {path:'seller-dashboard/view-orders/update-order-items/:orderId',component:UpdateOrderItemsComponent}

  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
