// filepath: src/components/RSVPForm.tsx
import React, { useState } from 'react';
import './RSVPForm.scss';

interface RSVPFormProps {
    submitClicked: (formData: { name: string; email: string; attending: string; message: string }) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ submitClicked }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        submitClicked(formData);
    };

    return (
        <div className="rsvp-container">
            <h1 className="rsvp-title">Wedding RSVP</h1>
            <form className="rsvp-form" onSubmit={handleSubmit}>
                <label className="rsvp-label">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rsvp-input"
                        required
                    />
                </label>
                <label className="rsvp-label">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rsvp-input"
                        required
                    />
                </label>
                <label className="rsvp-label">
                    Attending:
                    <input
                        type="text"
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        className="rsvp-input"
                        required
                    />
                </label>
                <label className="rsvp-label">
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rsvp-textarea"
                    />
                </label>
                <button type="submit" className="rsvp-button">Submit RSVP</button>
            </form>
        </div>
    );
};

export default RSVPForm;