<script lang="ts">
import TextField from '@/common/TextField.vue'
import type { OrderFormModel } from './order-model'
import axios from 'axios'
import { getGustomers } from '@/api/api'
function createTypedObject<T>(): T {
  return {} as T
}
const { data, isLoading } = getGustomers
export default {
  data() {
    return {
      orderData: createTypedObject<OrderFormModel>(),
      data: data
    }
  },
  methods: {
    registerOrder() {
      // Implement your order registration logic here,
      // using the values in the `orderData` object.
      axios
        .post('http://localhost:3000/api/order', this.orderData)
        .then((res) => console.log(res))
        .catch((error) => {
          console.error('Error:', error)
          // Handle error gracefully, e.g., display an error message to the user
        })
    }
  },
  mounted() {
    console.log(data)
  },
  components: { TextField }
}
</script>
<template>
  <form @submit.prevent="registerOrder">
    <div class="parent">
      <!-- sender -->
      <TextField
        v-model="orderData.senderPhoneNumber"
        id="senderPhoneNumber"
        label="sender Phone Number"
        @input="orderData.senderPhoneNumber"
      />
      <div class="name-field">
        <TextField
          v-model="orderData.senderFristName"
          id="senderFristName"
          label="sender Frist Name"
          @input="orderData.senderFristName"
        />
        <TextField
          v-model="orderData.senderLastName"
          id="senderLastName"
          label="sender Last Name"
          @input="orderData.senderLastName"
        />
      </div>
      <!-- reciever -->
      <TextField
        v-model="orderData.receiverPhoneNumber"
        id="receiverPhoneNumber"
        label="receiver Phone Numbere"
        @input="orderData.receiverPhoneNumber"
      />
      <div class="name-field">
        <TextField
          v-model="orderData.receiverFristName"
          id="receiverFristName"
          label="receiver Frist Name"
          @input="orderData.receiverFristName"
        />
        <TextField
          v-model="orderData.receiverLastName"
          id="receiverLastName"
          label="receiver Frist Name"
          @input="orderData.receiverLastName"
        />
      </div>
      <TextField
        v-model="orderData.dropOffCity"
        id="dropOffCity"
        label="DropOff City"
        @input="orderData.dropOffCity"
      />
      <TextField v-model="orderData.tagId" id="tagId" label="Tag ID" @input="orderData.tagId" />
      <!-- package -->
    </div>
    <div class="buttton-container">
      <button type="submit">Register Order</button>
      <button>Register Order</button>
    </div>
  </form>
</template>
<style>
form {
  align-self: center;
  width: 100%;
}
.parent {
  widows: 100%;
  align-items: center;
  padding: 10px;
}
.name-field {
  display: grid;
  grid-template-columns: 50% 50%;
}

.buttton-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-items: center;
  gap: 4px;
}
</style>
