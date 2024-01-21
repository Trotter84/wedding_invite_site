import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import NetlifyForm from 'react-netlify-form';
import './App.css';

class Rsvp extends Component {
    render() {
        return(
            <form name="contact" method='POST' data-netlify="true">
                            <div className='rsvp-container'>
                                <p>
                                    <label id='name' className='rsvp-txt'>Name Full<input className='rsvp-box' type="text" name="name" required /></label>
                                </p>
                                <p>
                                    <label id='email' className='rsvp-txt'>Email <input className='rsvp-box' type="email" name="email" required /></label>
                                </p>
                                <p>
                                    <button className='rsvp-btn' type="submit">RSVP</button>
                                </p>
                            </div>
                 
            </form>

        )
    }
}

export default Rsvp;