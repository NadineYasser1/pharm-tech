export const API = {
    login: '/auth',
    listPharmacies: 'pharmacies/management',
    pharmacy: '/pharmacies/{pharmacyId}/full',
    listWholesalers: '/pharmacies/{pharmacyId}/wholesalers',
    requests: '/pharmacies/{pharmacyId}/returnrequests',
    getRequest: '/pharmacies/{pharmacyId}/returnrequests/{returnRequestId}',
    items: '/pharmacies/{pharmacyId}/returnrequests/{returnRequestId}/items',
    item: '/pharmacies/{pharmacyId}/returnrequests/{returnRequestId}/items/{itemId}'
}