
import { useState } from 'react';
import './Donations.css'; // Import your custom CSS file

const Donations = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ amount, name, email, message });
    alert('Thank you for your donation!');
  };

  return (
    <section className="donations-section container">
      <h2 className="text-center">Make a Donation</h2>
      
      <form className="donation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount (₹):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Donate</button>
      </form>
    </section>
  );
};

export default Donations;
