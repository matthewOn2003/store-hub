// src/pages/CheckoutPage.tsx
import React from 'react'
import { CreditCard, GeoAltFill, ClipboardCheck, Truck } from 'react-bootstrap-icons'

export default function CheckoutPage() {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Checkout</h2>

      <form className="row gy-4">
        {/* Shipping Address */}
        <div className="col-md-6">
          <div className="card border">
            <div className="card-header bg-light fw-bold">
              <GeoAltFill className="me-2" />
              Shipping Address
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="+60 12-345 6789" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows={3} placeholder="123 Market Street, KL" />
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label">Postcode</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="col-md-6">
          <div className="card border">
            <div className="card-header bg-light fw-bold">
              <CreditCard className="me-2" />
              Payment Method
            </div>
            <div className="card-body">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="creditCard"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit / Debit Card
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="eWallet"
                />
                <label className="form-check-label" htmlFor="eWallet">
                  E-Wallet (Touch 'n Go, GrabPay)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="cod"
                />
                <label className="form-check-label" htmlFor="cod">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-12">
          <div className="card border">
            <div className="card-header bg-light fw-bold">
              <ClipboardCheck className="me-2" />
              Order Summary
            </div>
            <div className="card-body">
              <table className="table table-sm mb-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th className="text-end">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Organic Forest Honey</td>
                    <td>1</td>
                    <td className="text-end">RM 29.99</td>
                  </tr>
                  <tr>
                    <td>Homemade Jam</td>
                    <td>2</td>
                    <td className="text-end">RM 39.98</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end fw-bold">
                      Subtotal
                    </td>
                    <td className="text-end">RM 69.97</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-end fw-bold">
                      Delivery Fee
                    </td>
                    <td className="text-end">RM 5.00</td>
                  </tr>
                  <tr className="table-active">
                    <td colSpan={2} className="text-end fw-bold">
                      Total
                    </td>
                    <td className="text-end fw-bold text-success">RM 74.97</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-end">
          <button className="btn btn-success px-4">
            <Truck className="me-2" />
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}
