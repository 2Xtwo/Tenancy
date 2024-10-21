'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import FormInput from '../components/FormInput';

export default function Auth() {
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [pin, setPin] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const { setUser } = useAppContext();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 'phone' && !phoneNumber) {
      newErrors.phone = 'Phone number is required';
    }
    if (step === 'otp' && !otp) {
      newErrors.otp = 'OTP is required';
    }
    if (step === 'pin' && (!pin || pin.length !== 4)) {
      newErrors.pin = 'PIN must be 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (step === 'phone') setStep('otp');
      else if (step === 'otp') setStep('pin');
      else if (step === 'pin') {
        // Mock authentication
        setUser({ phoneNumber });
        router.push('/');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 glassmorphism p-8">
      <h2 className="text-3xl font-bold mb-6 neon-text text-center">Login / Register</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 'phone' && (
          <FormInput
            id="phone"
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={errors.phone}
            required
          />
        )}
        {step === 'otp' && (
          <FormInput
            id="otp"
            label="OTP"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            error={errors.otp}
            required
          />
        )}
        {step === 'pin' && (
          <FormInput
            id="pin"
            label="4-digit PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            error={errors.pin}
            required
          />
        )}
        <button type="submit" className="w-full bg-primary text-background p-3 rounded font-bold hover:bg-secondary transition-all">
          {step === 'pin' ? 'Login' : 'Next'}
        </button>
      </form>
    </div>
  );
}