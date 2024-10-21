'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TenantPayments() {
  const [payments, setPayments] = useState([
    { id: 1, date: '2023-05-01', amount: 1000, status: 'Paid' },
    { id: 2, date: '2023-06-01', amount: 1000, status: 'Paid' },
    { id: 3, date: '2023-07-01', amount: 1000, status: 'Pending' },
  ]);

  const chartData = {
    labels: payments.map(payment => payment.date),
    datasets: [
      {
        label: 'Payment Amount',
        data: payments.map(payment => payment.amount),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Payment History',
      },
    },
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Payments</h1>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{payment.date}</td>
                  <td className="py-2 px-4">${payment.amount}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded ${
                      payment.status === 'Paid' ? 'bg-green-500' :
                      payment.status === 'Pending' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Payment Trend</h2>
        <Line options={chartOptions} data={chartData} />
      </div>
      <div className="glassmorphism p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-bg text-transparent bg-clip-text">Make a Payment</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="amount" className="block mb-2">Amount</label>
            <input type="number" id="amount" className="w-full p-2 bg-gray-800 rounded" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2">Payment Date</label>
            <input type="date" id="date" className="w-full p-2 bg-gray-800 rounded" />
          </div>
          <button type="submit" className="w-full bg-primary text-background p-3 rounded font-bold hover:bg-secondary transition-all">
            Pay Now
          </button>
        </form>
      </div>
      <Link href="/tenant" className="block text-center neon-text hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}