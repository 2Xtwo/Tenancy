'use client';
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

export default function NotificationBell() {
  const { user, notifications, addNotification } = useAppContext();

  useEffect(() => {
    if (user) {
      // Simulating real-time notifications only for logged-in users
      const interval = setInterval(() => {
        const newNotification = `New notification ${Date.now()}`;
        addNotification(newNotification);
      }, 30000); // Add a new notification every 30 seconds

      return () => clearInterval(interval);
    }
  }, [user, addNotification]);

  if (!user) {
    return null; // Don't render the notification bell for non-logged-in users
  }

  return (
    <div className="relative">
      <span className="text-2xl cursor-pointer">🔔</span>
      {notifications.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {notifications.length}
        </span>
      )}
    </div>
  );
}