import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setError('Please fill name, email, and phone number.');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(trimmedPhone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setIsBooked(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#111',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {!isBooked ? (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '420px',
            background: '#1c1c1c',
            padding: '24px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <h1 style={{ color: '#f5c518', margin: 0, textAlign: 'center' }}>Book Your Seat</h1>
          <p style={{ margin: 0, color: '#bbb', textAlign: 'center' }}>Movie ID: {id}</p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444' }}
          />
          <input
            type="tel"
            placeholder="10-digit Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid #444' }}
          />

          {error ? <p style={{ color: '#f87171', margin: 0 }}>{error}</p> : null}

          <button
            type="submit"
            style={{
              background: '#f5c518',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Confirm Booking
          </button>
        </form>
      ) : (
        <>
          <h1 style={{ color: '#f5c518', margin: 0 }}>Booking Confirmed</h1>
          <p style={{ margin: 0 }}>Name: {name}</p>
          <p style={{ margin: 0 }}>Email: {email}</p>
          <p style={{ margin: 0 }}>Phone: {phone}</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              background: '#f5c518',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Back to Movies
          </button>
        </>
      )}
    </div>
  );
}

export default BookingPage;
