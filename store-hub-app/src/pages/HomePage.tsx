// src/pages/HomePage.tsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  House,
  Shop,
  Lightning,
  Star,
  People,
  BoxSeam,
  GeoAlt,
  PersonBoundingBox,
  ArrowRightCircle,
  Phone,
} from 'react-bootstrap-icons'
import { JSX } from 'react/jsx-runtime'

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Hero */}
      <header className="py-5 text-center bg-light border-bottom">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Welcome to StoreHub</h1>
          <p className="lead text-muted mb-4">
            Discover local stores, place orders instantly, and enjoy a seamless shopping experience.
          </p>
          <NavLink to="/shops" className="btn btn-primary btn-lg px-4">
            Browse Stores
          </NavLink>
        </div>
      </header>

      {/* Features */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center g-4">
            <Feature
              icon={<House size={48} className="text-primary mb-3" />}
              title="Local Favorites"
              desc="Find curated stores around your neighborhood with instant delivery options."
            />
            <Feature
              icon={<Shop size={48} className="text-success mb-3" />}
              title="Multi-Store System"
              desc="Each vendor has their own storefront to showcase products and brand identity."
            />
            <Feature
              icon={<Lightning size={48} className="text-warning mb-3" />}
              title="Blazing Fast"
              desc="Powered by Vite & React for lightning-fast performance and navigation."
            />
          </div>
        </div>
      </section>

      {/* Store Categories */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Popular Store Categories</h2>
          <div className="row text-center g-4">
            <Category icon={<BoxSeam size={36} />} label="Groceries" />
            <Category icon={<People size={36} />} label="Beauty & Wellness" />
            <Category icon={<GeoAlt size={36} />} label="Nearby Cafes" />
            <Category icon={<Phone size={36} />} label="Electronics" />
            <Category icon={<PersonBoundingBox size={36} />} label="Fashion & Apparel" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What Our Users Say</h2>
          <div className="row g-4">
            <Testimonial
              name="Sarah L."
              quote="Amazing experience! I found everything I needed from local stores without leaving home."
            />
            <Testimonial
              name="Marcus W."
              quote="Very smooth UI and fast loading. I especially love the separate pages for each store."
            />
            <Testimonial
              name="Emily C."
              quote="Super convenient. Will definitely continue using this platform for regular shopping."
            />
          </div>
        </div>
      </section>

      {/* Merchant CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Are You a Local Business Owner?</h2>
          <p className="mb-4">
            Join StoreHub and showcase your products to thousands of nearby customers.
          </p>
          <NavLink to="/register" className="btn btn-light btn-lg">
            Join Now
          </NavLink>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-5 text-center bg-light border-top">
        <div className="container">
          <h2 className="fw-bold mb-3">Coming Soon on Mobile</h2>
          <p className="text-muted mb-4">
            We're working on our mobile apps. Stay tuned for the Android and iOS versions!
          </p>
          <div>
            <button className="btn btn-outline-secondary me-2" disabled>Google Play</button>
            <button className="btn btn-outline-secondary" disabled>App Store</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 text-center bg-white border-top">
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to explore?</h3>
          <NavLink to="/shops" className="btn btn-success btn-lg">
            Start Browsing <ArrowRightCircle className="ms-2" />
          </NavLink>
        </div>
      </section>
    </>
  )
}

// Reusable components
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="col-12 col-md-4">
      {icon}
      <h5 className="fw-bold">{title}</h5>
      <p className="text-muted">{desc}</p>
    </div>
  )
}

function Category({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="col-6 col-md-2 offset-md-1">
      <div className="p-3 border rounded bg-white h-100">
        <div className="mb-2">{icon}</div>
        <div className="fw-semibold">{label}</div>
      </div>
    </div>
  )
}

function Testimonial({
  name,
  quote,
}: {
  name: string
  quote: string
}) {
  return (
    <div className="col-md-4">
      <div className="p-4 border rounded h-100 shadow-sm bg-light">
        <p className="fst-italic">“{quote}”</p>
        <div className="mt-3 text-end text-muted">– {name}</div>
      </div>
    </div>
  )
}
