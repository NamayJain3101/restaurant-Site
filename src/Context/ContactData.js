import React from 'react';
import {} from 'react-icons'
import { FiPhoneCall, FiMap, FiSend } from 'react-icons/fi';

export const ContactData = [
    {
        id: 1,
        icon: <FiPhoneCall className='icon' />,
        link: <a href="tel:1-800-123-1234">1-800-123-1234</a>,
        subtitle: "You can call us anytime"
    },
    {
        id: 2,
        icon: <FiMap className='icon' />,
        link: "51 Francis Street, San Diego, CA 91702 United States",
        subtitle: ""
    },
    {
        id: 3,
        icon: <FiSend className='icon' />,
        link: <a href="mailto:info@demolink.org">info@demolink.org</a>,
        subtitle: "Feel free to email us your questions"
    },
    
]