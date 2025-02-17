import React from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

const SignUpPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Implement social signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Form
          name="signup"
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
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
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

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="flex flex-col space-y-2 mt-4">
          <Button onClick={() => handleSocialSignup('Google')} className="w-full bg-red-500 text-white py-2 rounded-md">
            Sign Up with Google
          </Button>
          <Button onClick={() => handleSocialSignup('Facebook')} className="w-full bg-blue-600 text-white py-2 rounded-md">
            Sign Up with Facebook
          </Button>
          <Button onClick={() => handleSocialSignup('Apple')} className="w-full bg-black text-white py-2 rounded-md">
            Sign Up with Apple
          </Button>
        </div>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link href="/login" className="text-blue-500">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
