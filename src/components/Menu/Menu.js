import React from 'react'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'

import { ReactComponent as Properties } from '../../assets/SVGs/properties.svg';
import { ReactComponent as United } from '../../assets/SVGs/united.svg';
import Quote from '../Quote/Quote';
import './Menu.css'


const Menu = ({ quote }) => {
    return (
        <div className='menu'>
            <div className="menu__container">

                <div className="logo">
                    <United className='logo__united' />
                    <Properties className='logo__properties' />
                </div>

                <ul>
                    <li>
                        <div className="pretty p-default p-curve p-thick">
                            <input type="checkbox" />
                            <div className="state">
                                <label>Contact details</label>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="pretty p-default p-curve p-thick">
                            <input type="checkbox" />
                            <div className="state">
                                <label>Investment plans</label>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="pretty p-default p-curve p-thick">
                            <input type="checkbox" />
                            <div className="state">
                                <label>Investment preferences</label>
                            </div>
                        </div>
                    </li>
                </ul>

                <Quote quote={quote} />
            </div>
        </div>
    )
}

export default Menu
