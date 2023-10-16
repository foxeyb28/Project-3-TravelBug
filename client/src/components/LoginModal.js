import React from 'react';
import { Modal, Button, Typography } from 'antd';
import LoginForm from './LoginForm';

const { Title } = Typography;

function LoginModal({ show, handleClose }) {
  return (
    <Modal
      visible={show}
      onCancel={handleClose}
      centered
      footer={null}
      width={300} // Adjust the width as needed
    >
      <div className="login-modal">
        <Title level={3}>Login</Title>
        <LoginForm />
        <div style={{ marginTop: '20px' }}>
          <Button
            type="primary"
            block
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
