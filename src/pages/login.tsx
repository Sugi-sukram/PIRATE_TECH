import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-4"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="flex flex-col space-y-2 mt-4">
          <Button onClick={() => handleSocialLogin('Google')} className="w-full bg-red-500 text-white py-2 rounded-md">
            Login with Google
          </Button>
          <Button onClick={() => handleSocialLogin('Facebook')} className="w-full bg-blue-600 text-white py-2 rounded-md">
            Login with Facebook
          </Button>
          <Button onClick={() => handleSocialLogin('Apple')} className="w-full bg-black text-white py-2 rounded-md">
            Login with Apple
          </Button>
        </div>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link href="/signup" className="text-blue-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
