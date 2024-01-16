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
