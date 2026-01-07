import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css'; // We'll create this CSS file later

function UserNavItems() {
  const { user, logout, isLoading } = useAuth();
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  const handleProfileClick = () => {
    history.push('/profile');
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    history.push('/'); // Redirect to home after logout
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  if (user) {
    const userInitial = user.username ? user.username.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : '?');
    return (
      <div className={clsx('navbar__item', styles.avatarContainer)}>
        <button className={styles.avatarButton} onClick={toggleDropdown}>
          <div className={styles.userAvatar}>{userInitial}</div>
        </button>
        {dropdownOpen && (
          <div className={clsx(styles.dropdownMenu, 'dropdown--show')}>
            <button className={clsx('dropdown__link', styles.dropdownItem)} onClick={handleProfileClick}>
              Profile
            </button>
            <button className={clsx('dropdown__link', styles.dropdownItem)} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <a className="navbar__item navbar__link" href="/login">
        Login
      </a>
      <a className="navbar__item navbar__link" href="/signup">
        Sign Up
      </a>
    </>
  );
}

export default UserNavItems;