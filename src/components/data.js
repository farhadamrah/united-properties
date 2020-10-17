import React from 'react'
import ContactDetails from './Content/Parts/ContactDetails'
import InvestmentPlans from './Content/Parts/InvestmentPlans'
import InvestmentPreferences from './Content/Parts/InvestmentPreferences'

export default [
    {
        heading: 'Contact details',
        description: 'Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you',
        back: 'Back to the homepage',
        mainPart: <ContactDetails />,
        quote:
        {
            content: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
            author: {
                name: 'William Mac',
                job: 'CO-FOUNDER, INVESTOR'
            },
        }

    },
    {
        heading: 'Investment plans',
        description: 'Let us know about your investment plans. This will help us get you to the right expert who will help you further',
        back: 'Back to the previous step',
        mainPart: <InvestmentPlans />,
        quote:
        {
            content: `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`,
            author: {
                name: 'Jodie Sears',
                job: 'UNITEDPROPERTIES’ AGENT'
            },
        }
    },
    {
        heading: 'Investment preferences',
        description: 'This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals',
        back: 'Back to the previous step',
        mainPart: <InvestmentPreferences />,
        quote:
        {
            content: `United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side`,
            author: {
                name: 'Ollie Mcmahon',
                job: 'MANAGING DIRECTOR'
            },
        }
    }
]