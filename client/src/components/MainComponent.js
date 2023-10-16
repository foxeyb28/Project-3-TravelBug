import React, { useState } from 'react';
import NavTabs from './Navtabs';
import LoginForm from './LoginForm';
import LoginModal from './LoginModal';

function MainComponent() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // If the "Login" tab is clicked, show the login modal.
    if (page === 'Login') {
      setShowLoginModal(true);
    }
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <LoginModal show={showLoginModal} handleClose={closeLoginModal} />
      {/* Other components */}
    </div>
  );
}

export default MainComponent;
