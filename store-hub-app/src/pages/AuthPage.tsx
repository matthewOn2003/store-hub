// src/pages/AuthPage.tsx
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { PersonFill, LockFill, EnvelopeFill } from 'react-bootstrap-icons'

export default function AuthPage() {
  const isLogin = useLocation().pathname === '/login'

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border shadow-sm">
            <div className="card-header text-center bg-white">
              <h3 className="mb-0">{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    <EnvelopeFill className="me-2" />
                    Email Address
                  </label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">
                    <LockFill className="me-2" />
                    Password
                  </label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>

                {/* Confirm Password */}
                {!isLogin && (
                  <div className="mb-3">
                    <label className="form-label">
                      <LockFill className="me-2" />
                      Confirm Password
                    </label>
                    <input type="password" className="form-control" placeholder="Re-enter your password" />
                  </div>
                )}

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center bg-light">
              {isLogin ? (
                <span>
                  Don’t have an account? <Link to="/register">Register here</Link>
                </span>
              ) : (
                <span>
                  Already have an account? <Link to="/login">Login here</Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
