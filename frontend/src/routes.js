import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const SharingCenter = React.lazy(() => import('./views/SharingCenter/SharingCenter'))
const Password = React.lazy(() => import('./views/items/Password/Password'))
const Notes = React.lazy(() => import('./views/items/Notes/Notes'))
const Addresses = React.lazy(() => import('./views/items/Addresses/Addresses'))
const PaymentCards = React.lazy(() => import('./views/items/PaymentCards/PaymentCards'))
const BankAccounts = React.lazy(() => import('./views/items/BankAccounts/BankAccounts'))
const Security = React.lazy(() => import('./views/items/Security/Security'))
const EmergencyAccess = React.lazy(() => import('./views/items/EmergencyAccess/EmergencyAccess'))
const AccountSetting = React.lazy(() => import('./views/AccountSetting/AccountSetting'))
const AdvancedOption = React.lazy(() => import('./views/AdvancedOption/AdvancedOption'))
const Help = React.lazy(() => import('./views/Help/Help'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'All items', element: Dashboard },
  { path: '/sharingcenter', name: 'Sharing Center', element: SharingCenter },
  { path: '/items/passwords', name: 'Password', element: Password },
  { path: '/items/notes', name: 'Notes', element: Notes },
  { path: '/items/addresses', name: 'Addresses', element: Addresses },
  { path: '/items/paymentcards', name: 'Payment Cards', element: PaymentCards },
  { path: '/items/bankaccounts', name: 'Bank Accounts', element: BankAccounts },
  { path: '/security', name: 'Security Dashboard', element: Security },
  { path: '/emergencyaccess', name: 'Emergency Access', element: EmergencyAccess },
  { path: '/accountsettings', name: 'Account Settings', element: AccountSetting },
  { path: '/adancedoptions', name: 'Advanced Options', element: AdvancedOption },
  { path: '/help', name: 'Help', element: Help },
]

export default routes
