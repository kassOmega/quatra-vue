export type OrderRequest = {
  sender: number
  receiver: number
  tagId: number
  dropOffCity: string
  inCityDriver: number
}

export interface OrderFormModel {
  dropOffCity: string
  receiverFristName: string
  receiverLastName: string
  receiverPhoneNumber: string
  senderFristName: string
  senderLastName: string
  senderPhoneNumber: string
  tagId: number
}
export type CustomerResponse = {
  id: number
  firstName: string
  lastName: string
  phoneNumber: string
}
export type CustomerRequest = {
  firstName: string
  lastName: string
  phoneNumber: string
}
export type CustomerResponseData<CustomerResponse> = {
  data: CustomerResponse
}
