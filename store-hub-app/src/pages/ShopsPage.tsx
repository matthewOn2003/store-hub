// src/pages/ShopsPage.tsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Shop, StarFill, GeoAlt } from 'react-bootstrap-icons'

interface Shop {
  id: number
  name: string
  description: string
  location: string
  rating: number
  coverImage: string
}

const mockShops: Shop[] = [
  {
    id: 1,
    name: 'DailyMart',
    description: 'Fresh groceries & essentials every day.',
    location: 'Kuala Lumpur',
    rating: 4.6,
    coverImage: 'https://via.placeholder.com/300x180?text=DailyMart',
  },
  {
    id: 2,
    name: 'Tech Haven',
    description: 'Your gadget paradise with latest tech.',
    location: 'Petaling Jaya',
    rating: 4.8,
    coverImage: 'https://via.placeholder.com/300x180?text=Tech+Haven',
  },
  {
    id: 3,
    name: 'Eco Beauty',
    description: 'Natural skincare & wellness products.',
    location: 'Subang',
    rating: 4.3,
    coverImage: 'https://via.placeholder.com/300x180?text=Eco+Beauty',
  },
  {
    id: 4,
    name: 'Street Bites',
    description: 'Tasty local food from trusted vendors.',
    location: 'Cheras',
    rating: 4.7,
    coverImage: 'https://via.placeholder.com/300x180?text=Street+Bites',
  },
]

export default function ShopsPage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Explore All Shops</h2>
        <p className="text-muted">
          Discover your next favorite store. Order direct from verified local merchants.
        </p>
      </div>

      <div className="row g-4">
        {mockShops.map((shop) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={shop.id}>
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline-primary px-4">Load More</button>
      </div>
    </section>
  )
}

// Shop Card Component
function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={shop.coverImage}
        className="card-img-top"
        alt={`${shop.name} cover`}
        style={{ objectFit: 'cover', height: '180px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{shop.name}</h5>
        <p className="card-text text-muted small mb-2">{shop.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="text-muted small">
            <GeoAlt className="me-1" size={14} />
            {shop.location}
          </div>
          <div className="text-warning small">
            <StarFill className="me-1" size={14} />
            {shop.rating.toFixed(1)}
          </div>
        </div>
        <NavLink
          to={`/shops/${shop.id}`}
          className="stretched-link"
          aria-label={`Visit ${shop.name}`}
        />
      </div>
    </div>
  )
}
