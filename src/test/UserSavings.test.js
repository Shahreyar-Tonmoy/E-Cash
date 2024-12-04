/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query';
import { act } from 'react-dom/test-utils'; // Import act for handling asynchronous behavior
import UserSavings from '../DashBoard/User Home/UserSavings';

// Mock the AuthContext and UseAxiosPublic modules
jest.mock('../Components/Login/Firebase/AuthProvider.jsx', () => ({
  AuthContext: {
    Consumer: ({ children }) => children({ user: { email: 'shahreyartonmoy02@gmail.com' } }),
  },
}));

jest.mock('../Hooks/UseAxiosPublic.jsx', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock the entire react-query module
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <UserSavings />
    </QueryClientProvider>
  );

  describe('UserSavings Component', () => {
    it('renders loading state while fetching data', () => {
      // Your test logic goes here
      expect(true).toBe(true); // Replace with your actual test assertions
    });
  
    // Add more test cases as needed
  });