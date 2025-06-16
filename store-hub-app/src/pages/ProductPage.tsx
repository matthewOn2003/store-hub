// src/pages/ProductPage.tsx
import React from 'react'
import {
  StarFill,
  Truck,
  ShieldLock,
  Gift,
  Heart,
  Share,
} from 'react-bootstrap-icons'

const product = {
  id: 1,
  name: 'Organic Forest Honey 500ml',
  price: 29.99,
  description:
    'Harvested from wild forest hives, this honey is 100% natural, raw, and unprocessed. Packed with antioxidants and rich flavor, it’s perfect for daily use and a natural sweetener alternative.',
  rating: 4.9,
  reviews: 187,
  stock: 23,
  delivery: 'Free delivery within KL in 1 day.',
  guarantee: '30-day satisfaction guarantee.',
  images: [
    'https://via.placeholder.com/600x400?text=Honey+1',
    'https://via.placeholder.com/600x400?text=Honey+2',
    'https://via.placeholder.com/600x400?text=Honey+3',
  ],
}

export default function ProductPage() {
  return (
    <div className="container">
      <div className="row">
        {/* Image Carousel */}
        <div className="col-md-6">
          <div id="productCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
            <div className="carousel-inner rounded border">
              {product.images.map((src, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                >
                  <img src={src} className="d-block w-100" alt={`Product ${idx + 1}`} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2>

          <div className="mb-2 text-warning d-flex align-items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <StarFill
                key={i}
                className={i < Math.round(product.rating) ? '' : 'text-secondary'}
              />
            ))}
            <small className="text-muted">
              {product.rating} ({product.reviews} reviews)
            </small>
          </div>

          <h4 className="text-success mb-3">RM {product.price.toFixed(2)}</h4>

          <p className="mb-4">{product.description}</p>

          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline-secondary">
              <Heart className="me-1" /> Wishlist
            </button>
            <button className="btn btn-outline-secondary">
              <Share className="me-1" /> Share
            </button>
          </div>

          <div className="mb-2 text-muted small">
            <Truck className="me-2 text-success" />
            {product.delivery}
          </div>
          <div className="mb-2 text-muted small">
            <ShieldLock className="me-2 text-success" />
            {product.guarantee}
          </div>
          <div className="text-muted small">
            <Gift className="me-2 text-success" />
            Stock left: {product.stock}
          </div>
        </div>
      </div>
    </div>
  )
}
