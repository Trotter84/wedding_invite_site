import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form';
import './App.css';

class Rsvp extends Component {
    render() {
        return(
            <NetlifyForm name="contact" method='POST' data-netlify="true">
                {({ loading, error, success }) => (
                    <div>
                        {loading &&
                            <div className='status-txt'>Loading...</div>
                        }
                        {error &&
                            <div className='status-txt'>There was an error. Please try again later.</div>
                        }
                        {success &&
                            <div className='status-txt'>Thank you for your RSVP!</div>
                        }
                        {!loading && !success &&
                            <div className='rsvp-container'>
                                <p>
                                    <label id='name' className='rsvp-txt'>Full Name<input className='rsvp-box' type="text" name="name" required /></label>
                                </p>
                                <p>
                                    <label id='email' className='rsvp-txt'>Email <input className='rsvp-box' type="email" name="email" required /></label>
                                </p>
                                <p>
                                    <label id='quantity' className='rsvp-txt'>Number Attending<input className='rsvp-box guest' type="number" name="quantity" min="1" maxlength="2" required /></label>
                                </p>
                                <p>
                                    <button className='rsvp-btn' type="submit">RSVP</button>
                                </p>
                            </div>
                        }
                    </div>
                )}
            </NetlifyForm>

        )
    }
}

export default Rsvp;