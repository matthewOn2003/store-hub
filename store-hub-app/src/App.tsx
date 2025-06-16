// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// 页面组件，只需要导出自己的内容，不用再引入布局
import HomePage from './pages/HomePage'
import ShopsPage from './pages/ShopsPage'
import ShopDetailPage from './pages/ShopDetailPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckOutPage'
import DashboardPage from './pages/DashBoardPage'
import AuthPage from './pages/AuthPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 公共布局路由 */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shops" element={<ShopsPage />} />
          <Route path="shops/:shopId" element={<ShopDetailPage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="dashboard/*" element={<DashboardPage />} />
        </Route>

        {/* 登录/注册可以不需要顶部导航，单独一个空布局也行 */}
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />

        {/* 404 */}
        <Route path="*" element={<h2 className="text-center mt-5">页面不存在</h2>} />
      </Routes>
    </BrowserRouter>
  )
}
