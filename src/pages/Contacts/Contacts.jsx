import React from 'react'
import { ContactsComponent, FiltersComponent, LayoutComponent, Socials } from '../../components'

const Contacts = () => {
    return (
        <LayoutComponent>
            <Socials />
            <FiltersComponent />
            <ContactsComponent />
        </LayoutComponent>
    )
}

export default Contacts