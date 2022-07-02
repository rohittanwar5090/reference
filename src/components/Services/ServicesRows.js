import React from 'react'
import ServicesRow from './ServicesRow'
function ServicesRows() {
    return (
        <div>
            <ServicesRow
                src='/images/services/services-marketing-w.webp'
                mainheading='"I can finally focus on my Online course and delegate the rest" '
                maintext='What if you could get all your website tasks off your plate and focus only on creating the best course content? Working with EZ Colab allows you to scale your marketing and grow faster with beautiful, responsive and converting websites all without becoming a designer or developer yourself.'
            />
            <ServicesRow
                src='/images/services/services-webdesigner-w.webp'
                mainheading='Never Feel Embarrassed About Your Web Design Again!'
                maintext='Not happy with the way your website looks? Our designers can help make it look like the latest trend while also boosting conversions.'
            />
        </div>
    )
}

export default ServicesRows
