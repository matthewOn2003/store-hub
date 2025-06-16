// src/pages/CartPage.tsx
import React from 'react'
import { TrashFill, Plus, Dash } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

interface CartItem {
  id: number
  name: string
  quantity: number
  price: number
  imageUrl: string
  description: string
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Organic Apples',
    quantity: 2,
    price: 4.5,
    imageUrl: 'https://via.placeholder.com/80?text=Apples',
    description: 'Freshly picked local organic apples rich in Vitamin C.',
  },
  {
    id: 2,
    name: 'Mineral Water (1.5L)',
    quantity: 1,
    price: 2.2,
    imageUrl: 'https://via.placeholder.com/80?text=Water',
    description: 'Natural spring water, clean and perfect for daily hydration.',
  },
]

export default function CartPage() {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="container py-5">
      <h2 className="mb-4 fw-bold">🛒 Your Shopping Cart</h2>

      {mockCartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is currently empty.</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Subtotal</th>
                <th scope="col" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockCartItems.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center gap-3">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="rounded"
                      width="60"
                      height="60"
                    />
                    <strong>{item.name}</strong>
                  </td>
                  <td style={{ maxWidth: 250 }}>{item.description}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        <Dash size={14} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-sm btn-outline-secondary">
                        <Plus size={14} />
                      </button>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-danger">
                      <TrashFill size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-end mt-4">
        <h5 className="fw-bold">Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-success btn-lg mt-2">
          Proceed to Checkout
          <NavLink
            to={`/checkout`}
            className="stretched-link"
            aria-label={`Check Out`}
          />
        </button>
      </div>
    </section>
  )
}
