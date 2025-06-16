// src/pages/ShopDetailPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
  GeoAltFill,
  TelephoneFill,
  ClockFill,
  StarFill,
  Facebook,
  Instagram,
  EnvelopeFill,
  BoxArrowUpRight,
  Truck,
  Gift,
  PatchCheckFill,
} from 'react-bootstrap-icons'

const mockProducts = [
  {
    id: 1,
    name: 'Organic Honey',
    description: '100% pure and natural honey from local farms. Ideal for tea, toast, and baking.',
    price: 29.99,
    image: 'https://via.placeholder.com/300x200?text=Honey',
  },
  {
    id: 2,
    name: 'Homemade Jam',
    description: 'Freshly made mixed berry jam with no added preservatives. Perfect on bread or yogurt.',
    price: 19.99,
    image: 'https://via.placeholder.com/300x200?text=Jam',
  },
]

export default function ShopDetailPage() {
  return (
    <div className="row">
      <aside className="col-md-3">
        <div className="card mb-4 border">
          <img
            src="https://via.placeholder.com/400x200?text=Shop+Logo"
            className="card-img-top"
            alt="Shop Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Berry Delight</h5>
            <p className="text-muted mb-2">Artisanal Local Shop</p>
            <p className="small">
              We specialize in handcrafted, small-batch foods using traditional methods and local ingredients.
            </p>
            <ul className="list-unstyled small mb-3">
              <li className="mb-2 d-flex align-items-center">
                <GeoAltFill className="me-2" />
                123 Market Street, Kuala Lumpur
              </li>
              <li className="mb-2 d-flex align-items-center">
                <TelephoneFill className="me-2" />
                +60 12-345 6789
              </li>
              <li className="mb-2 d-flex align-items-center">
                <EnvelopeFill className="me-2" />
                support@berrydelight.my
              </li>
              <li className="mb-2 d-flex align-items-center">
                <ClockFill className="me-2" />
                Mon–Sat: 9:00AM – 6:00PM
              </li>
              <li className="d-flex align-items-center">
                <StarFill className="me-2 text-warning" />
                4.8 / 5.0 (215 reviews)
              </li>
            </ul>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none" title="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-decoration-none" title="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-decoration-none" title="Website">
                <BoxArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="card border">
            <div className="card-body small">
              <h6 className="mb-3">Why Shop With Us?</h6>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center">
                  <Truck className="me-2 text-success" />
                  Same-day delivery available
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <PatchCheckFill className="me-2 text-primary" />
                  100% Satisfaction Guarantee
                </li>
                <li className="d-flex align-items-center">
                  <Gift className="me-2 text-danger" />
                  Free gift wrapping on orders above RM50
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="alert alert-info small">
          Get RM10 off your first purchase! Use code <strong>WELCOME10</strong> at checkout.
        </div>
      </aside>

      <section className="col-md-9">
        <h3 className="mb-4">Our Featured Products</h3>
        <p className="text-muted mb-4">
          Carefully selected for their popularity and quality. Discover what our customers love most.
        </p>
        <div className="row g-4">
          {mockProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border shadow-sm">
                <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text small text-muted">{product.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="fw-bold">RM {product.price.toFixed(2)}</span>
                      <button className="btn btn-sm btn-outline-primary">View</button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="mb-3">About Berry Delight</h4>
          <p>
            Founded in 2018, Berry Delight is committed to providing high-quality, handcrafted food items
            that are free from additives and artificial preservatives. We use only fresh, locally sourced ingredients
            to create products that reflect the richness of our culture and community.
          </p>
          <p>
            Our team believes in sustainability, transparency, and a deep connection with our customers.
            From our kitchen to your table — it’s all made with heart. Every purchase supports small-scale
            local producers and helps sustain ethical food systems.
          </p>
          <p>
            Whether you're shopping for yourself or looking for a gift, Berry Delight offers a personalized
            and delightful shopping experience, both online and in-store.
          </p>
        </div>
      </section>
    </div>
  )
}
