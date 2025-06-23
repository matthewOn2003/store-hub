// src/layouts/MainLayout.tsx
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import { JSX } from 'react/jsx-runtime'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/shops', label: 'Shops' },
  { to: '/cart', label: 'Cart' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/login', label: 'Login' },
]

export default function MainLayout(): JSX.Element {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <div className="container">
          <Navbar.Brand as={NavLink} to="/" className="fw-bold">
            StoreHub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              {NAV_ITEMS.map(({ to, label }) => (
                <Nav.Item key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `nav-link${isActive ? ' active fw-bold' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <main className="">
        <Outlet />
      </main>

      <footer className="text-center py-3 border-top">
        <div className="container-fluid">
          © {new Date().getFullYear()} StoreHub
        </div>
      </footer>
    </>
  )
}
