import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart,FaServicestack,FaHome } from 'react-icons/fa';
import './MyNav.css';

export default function MyNav({ userName, onLogout, cartCount }) { 
	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<span className="shopapp-part1">Shop</span>
					<span className="shopapp-part2">ee</span>
				</NavLink>

				<button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item me-3">
							<NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">
							<FaHome style={{ marginRight: '5px' }} /> Home
							</NavLink>
						</li>
						<li className="nav-item me-3">
							<NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/products">
							<FaServicestack style={{ marginRight: '5px' }} />Products
							</NavLink>
						</li>
						<li className="nav-item me-3">
							<NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/cart">
							<FaShoppingCart style={{ marginRight: '5px' }} />	Cart
							{cartCount > 0 && (
                                    <span className="badge bg-danger" style={{ marginLeft: '5px' }}>
                                        {cartCount}
                                    </span>)}
									
							</NavLink>
						</li>
						<li className="nav-item ms-3">
							<NavLink 
								className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
								to="/login" 
								onClick={onLogout} 
							>
								{userName || "Guest"} | Logout
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
