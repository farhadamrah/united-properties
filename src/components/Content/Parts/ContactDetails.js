import React from 'react'
import '../../Content/Content.css'
import '../Parts/ContactDetails.css'

const ContactDetails = () => {

    return (
        <div className='contact-details'>
            <form class="ui form details__form">
                <div class="field row">
                    <label>Full name</label>
                    <div class="two fields">
                        <div class="field">
                            <input className='sline' type="text" name="fullName" />
                        </div>

                        <div class="field number">
                            <select>
                                <option value=' AZE'>AZE</option>
                            </select>
                            <input className='sline' type="number" name="number" />
                        </div>
                    </div>
                </div>

                <div class="field row">
                    <label>E-mail address</label>
                    <div class="fields">
                        <div class="wide field ">
                            <input className='line' type="email" name="email" />
                        </div>
                    </div>
                </div>

                <div class="two fields row">
                    <div class="field">
                        <label>Country</label>
                        <br />
                        <select class="ui fluid dropdown line">
                            <option value="AZE">Azerbaijan</option>
                        </select>
                    </div>
                </div>

            </form>

            <div className='policy'>
                <h3>Privacy policy</h3>
                <p className='p-text grey-color'>We know you care about how your personal information is used and shared, so we take your privacy seriously</p>

                <div className='expand blue-color'>
                    <a to='#'> Expand privacy policy</a>
                </div>
            </div>

        </div>
    )
}


{/* <form className='details__form'>
                <label>Full name
                    <input type='text'>{data.fullName}</input>
                </label>

                <select>
                    <option value='ie'>
                        <i class="ie flag ">Ireland</i>
                    </option>
                </select>
                <input type='number'>{data.phone}</input>

                <label>E-mail address
                    <input type='text'>{data.email}</input>
                </label>

                <label>Country
                        <select>
                        <option value='Ukraine'>{data.country}</option>
                    </select>
                </label>
            </form> */}


export default ContactDetails
