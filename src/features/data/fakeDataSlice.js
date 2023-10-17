import { createSlice } from "@reduxjs/toolkit";
import photo1 from '../../assets/card/card_photo.png'

const savedCart = localStorage.getItem('shoppingCart') !== null ? JSON.parse(localStorage.getItem('shoppingCart')) : []

const initialState = {
  data: [
    {
      id: 1,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 2,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 3,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 4,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 5,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 6,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 7,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 8,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 9,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 10,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 11,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 12,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 13,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 14,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 15,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 16,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 17,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 18,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    },
    {
      id: 19,
      name: 'Неоновое худи',
      desc: '•Мы отобрали качественную турецкую ткань «футер» в соотношении 80% - хлопка и 20% - полиэстера, безопасный гибкий неон, плотный материал «оксфорд» •Изготавливаем неоновые принты любой сложности. •Патч с неоновым принтом крепится на липучках, его можно легко снять перед стиркой.',
      price: 1000,
      image: [photo1, photo1]
    }
  ],
  selectedData: [],
  shoppingCart: savedCart
}

export const fakeDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    showSelected: (state, action) => {
      state.selectedData = state.data.find(item => item.id === action.payload)
    },
    addToCart: (state, action) => {
      const { selectedDataId, counterNumber, selectedSize } = action.payload
      state.shoppingCart.push((state.data.find(item => item.id === selectedDataId)))
      state.shoppingCart.find(item => item.id === selectedDataId)['count'] = counterNumber
      state.shoppingCart.find(item => item.id === selectedDataId)['size'] = selectedSize
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart.map(item => item)))
    },
    deleteFromCart: (state, action) => {
      state.shoppingCart.forEach((el, i) => el.id === action.payload && state.shoppingCart.splice(i, 1))
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart.map(item => item)))
    },
  }
})

export const { showSelected, addToCart, deleteFromCart } = fakeDataSlice.actions
export default fakeDataSlice.reducer