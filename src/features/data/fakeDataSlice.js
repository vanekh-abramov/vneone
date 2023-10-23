import { createSlice } from "@reduxjs/toolkit";
// import photo1 from '../../assets/card/card_photo.png'
import photo1 from '../../assets/card/out_photo.jpg';

const savedCart = localStorage.getItem('shoppingCart') !== null ? JSON.parse(localStorage.getItem('shoppingCart')) : []
console.log(savedCart)

const initialState = {
  data: [
    {
      id: 1,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 3,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 4,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 5,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 6,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 7,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 8,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 9,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 10,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 11,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 12,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 13,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 14,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 15,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 16,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 17,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 18,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 19,
      name: 'Lorem ipsum',
      desc: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi explicabo ipsam nihil autem voluptas accusantium, sit molestias natus culpa vero minima blanditiis maxime eum, obcaecati commodi? Ipsam, qui odit?',
      price: 1000,
      image: [photo1, photo1]
    }
  ],
  selectedData: [],
  shoppingCart: savedCart,
}

export const fakeDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    showSelected: (state, action) => {
      state.selectedData = state.data.find(item => item.id === action.payload)
    },

    addToCart: (state, { ...action }) => {
      const { selectedDataId, counterNumber, selectedSize } = action.payload
      const currentItem = state.data.find(item => item.id === selectedDataId)
      Object.assign(currentItem, { count: counterNumber, size: selectedSize })
      state.shoppingCart = [...state.shoppingCart, currentItem]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart.map(item => item)))
    },

    deleteFromCart: (state, action) => {
      state.shoppingCart.splice(action.payload, 1)
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart.map(item => item)))
    },
  }
})

export const { showSelected, addToCart, deleteFromCart } = fakeDataSlice.actions
export default fakeDataSlice.reducer