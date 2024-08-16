import React, { useState } from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom'; 
import logo from '../../assets/ecobee_logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Menu, MenuItem, Button } from '@mui/material';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);

  const handleClick = (event, id) => {
    if (menuId === id) {
      setAnchorEl(null);
      setMenuId(null);
    } else {
      setAnchorEl(event.currentTarget);
      setMenuId(id);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const renderMenu = (id, items) => (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={menuId === id}
      onClose={handleClose}
      MenuListProps={{ onClick: handleClose }}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '8px',
          border: '1px solid #ddd',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          padding: '10px 0',
        }
      }}
    >
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          onClick={() => { window.location.href = item.link; }}
          sx={{
            textDecoration: 'none', 
            color: 'black', 
            fontFamily: 'Poppins, sans-serif', 
            fontSize: '16px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#ffd700', // Updated hover color
            },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/home">  
          <img src={logo} alt="Eco Bee Energy Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Button
            aria-controls="grants-menu"
            aria-haspopup="true"
            onClick={(e) => handleClick(e, 'grants-menu')}
            sx={{ 
              textTransform: 'none', 
              color: 'black', 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '16px',
              fontWeight: 600, 
              '&:hover': { backgroundColor: '#ffd700' }, // Updated hover color
              marginRight: '20px', 
            }}
          >
            Grants Available
          </Button>
          {renderMenu('grants-menu', [
            { label: 'Grant 1', link: '/grants/grant1' },
            { label: 'Grant 2', link: '/grants/grant2' },
          ])}

          <Button
            aria-controls="assessments-menu"
            aria-haspopup="true"
            onClick={(e) => handleClick(e, 'assessments-menu')}
            sx={{ 
              textTransform: 'none', 
              color: 'black', 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '16px',
              fontWeight: 600, 
              '&:hover': { backgroundColor: '#ffd700' }, // Updated hover color
              marginRight: '20px', 
            }}
          >
            Assessments & Surveys
          </Button>
          {renderMenu('assessments-menu', [
            { label: 'Assessment 1', link: '/assessments/assessment1' },
            { label: 'Assessment 2', link: '/assessments/assessment2' },
          ])}

          <Button
            aria-controls="products-menu"
            aria-haspopup="true"
            onClick={(e) => handleClick(e, 'products-menu')}
            sx={{ 
              textTransform: 'none', 
              color: 'black', 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '16px',
              fontWeight: 600, 
              '&:hover': { backgroundColor: '#ffd700' }, // Updated hover color
              marginRight: '20px', 
            }}
          >
            Products
          </Button>
          {renderMenu('products-menu', [
            { label: 'Product 1', link: '/products/product1' },
            { label: 'Product 2', link: '/products/product2' },
          ])}

          <Button
            aria-controls="landlords-menu"
            aria-haspopup="true"
            onClick={(e) => handleClick(e, 'landlords-menu')}
            sx={{ 
              textTransform: 'none', 
              color: 'black', 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '16px',
              fontWeight: 600, 
              '&:hover': { backgroundColor: '#ffd700' }, // Updated hover color
              marginRight: '20px', 
            }}
          >
            Landlords & Lettings
          </Button>
          {renderMenu('landlords-menu', [
            { label: 'Landlord 1', link: '/landlords/landlord1' },
            { label: 'Landlord 2', link: '/landlords/landlord2' },
          ])}
        </nav>
      </div>
      <div className="header-right">
        <a href="https://www.facebook.com/ecobeeenergy/" className="social-link" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/ecobeeenergy" className="social-link" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="mailto:office@ecobeeenergy.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
        <button className="apply-now-btn">CONTACT US</button>
      </div>
    </header>
  );
}

export default Header;