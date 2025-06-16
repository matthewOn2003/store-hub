// src/pages/DashboardPage.tsx
import React, { useState } from 'react'
import { GearFill, BoxSeam, ClipboardData } from 'react-bootstrap-icons'

type TabKey = 'orders' | 'products' | 'settings'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('orders')

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <>
            <h4>📦 Recent Orders</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>John Doe</td>
                  <td>¥120.00</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>
                <tr>
                  <td>#1002</td>
                  <td>Jane Smith</td>
                  <td>¥85.00</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case 'products':
        return (
          <>
            <h4>🛍️ My Products</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Organic Apples
                <span className="badge bg-secondary">Stock: 20</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Mineral Water (1.5L)
                <span className="badge bg-secondary">Stock: 35</span>
              </li>
            </ul>
          </>
        )
      case 'settings':
        return (
          <>
            <h4>⚙️ Store Settings</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Store Name</label>
                <input type="text" className="form-control" defaultValue="Fresh Fruit Shop" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input type="text" className="form-control" defaultValue="012-3456789" />
              </div>
              <button type="submit" className="btn btn-primary">Save Settings</button>
            </form>
          </>
        )
    }
  }

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">👨‍💼 Seller Dashboard</h2>
      <div className="row">
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <ClipboardData className="me-2" />
              Orders
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              <BoxSeam className="me-2" />
              Products
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <GearFill className="me-2" />
              Settings
            </button>
          </div>
        </div>
        <div className="col-md-9">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}
