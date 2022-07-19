import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


//  async fetch_data_
export const AllProduct = createAsyncThunk(
    'fetching/AllPreoduct',
    async () => {
        const data = await (await fetch('http://localhost:4000/comfysloth/api/data')).json()
        return data
    }

)

export const singleProduct = createAsyncThunk(
    'fetching/single_product', async (id) => {
        const data = await (await fetch(`http://localhost:4000/comfysloth/api/single/data/${id}`)).json()
        return data
    }
)


//  initialdata

const initialState = {
    //products
    All_Product: null,
    single_product: null,



    //filter
    filterData: null,
    categoryFilterName: 'all',
    colorFilterName: null,


    //cart
    CartData: [],
    Subtotal:0,


    //checkOut
    totalCart:0
}





//slice

const slice = createSlice({
    name: 'product_reducer',
    initialState,
    reducers: {
        //filters
        Search_filter: (state, action) => {
            state.filterData = state.All_Product.filter((elm, val) => {
                return (elm.name).startsWith(action.payload) && elm
            })

        },
        category_filter: (state, action) => {
            state.categoryFilterName = action.payload
            if (action.payload !== 'all') {
                state.filterData = state.All_Product.filter((elm, val) => {
                    return action.payload.includes(elm.category)
                })
            } else {
                state.filterData = state.All_Product
            }
        },
        Company_filter: (state, action) => {
            if (action.payload !== 'all') {
                state.filterData = state.All_Product.filter((elm, val) => {
                    return (elm.company === action.payload) && elm
                })
            } else {
                state.filterData = state.All_Product
            }

        },
        color_filter: (state, action) => {
            state.colorFilterName = action.payload
            if (action.payload !== 'all') {
                state.filterData = state.All_Product.filter((elm, val) => {
                    return elm.colors.includes(action.payload) && elm
                })
            } else {
                state.filterData = state.All_Product
            }
        },
        Price_filter: (state, action) => {
            state.filterData = state.All_Product.filter((elm, val) => {
                return ((elm.price) / 100) <= action.payload / 100 && elm
            })
        },
        free_shipping: (state, action) => {
            if (action.payload === true) {
                state.filterData = state.All_Product.filter((elm, val) => {
                    return (elm.shipping) && elm
                })
            } else {
                state.filterData = state.All_Product
            }

        },
        clear_filter: (state, action) => {
            state.filterData = state.All_Product
        },




        //sort filter
        sort_product: (state, action) => {
            if (action.payload === 'price (lowest)') {
                state.filterData = state.All_Product.sort((a, b) => {
                    return (a.price) / 100 - (b.price) / 100;
                })
            } else if (action.payload === 'price (highest)') {
                state.filterData = state.All_Product.sort((a, b) => {
                    return (b.price) / 100 - (a.price) / 100;
                })
            } else if (action.payload === 'name (a - z)') {
                state.filterData = state.All_Product.sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            } else if (action.payload === 'name (z - a)') {
                state.filterData = state.All_Product.sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                })
            }


        },


        //cart
        addCart: (state, action) => {
            if (action.payload.cart_count > 0) {
                state.CartData.map((val, idx) => {
                    if (val.id === action.payload.id) {
                        const index = state.CartData.indexOf(val)
                        if (index > -1) {
                            state.CartData.splice(index, 1)
                        }
                    }
                })
                state.CartData.push(action.payload)
            }
            let initialValue=0
            state.Subtotal=state.CartData.reduce( (previousValue, currentValue) => previousValue + ((currentValue.single_product_price * currentValue.cart_count) / 100),initialValue)
        },
        UpdateCart:(state,action)=>{
            state.CartData=state.CartData.map((val)=>{
                if(val.id===action.payload.id){
                    return {...val,cart_count:action.payload.cart_count}
                }else{
                    return val
                }
            })
            let initialValue=0
            state.Subtotal=state.CartData.reduce( (previousValue, currentValue) => previousValue + ((currentValue.single_product_price * currentValue.cart_count) / 100),initialValue)
        },
        deliteSingleCartData:(state,action)=>{
            state.CartData=state.CartData.filter((val,id)=>{
                return val.id!==action.payload && val
            })
            let initialValue=0
            state.Subtotal=state.CartData.reduce( (previousValue, currentValue) => previousValue + ((currentValue.single_product_price * currentValue.cart_count) / 100),initialValue)

        },
        clearCartData:(state,action)=>{
            state.CartData=[]
        },


        //checkout
        totalAmount:(state,action)=>{
            state.totalCart=action.payload
        }

        





    }, extraReducers: {
        //all product
        [AllProduct.fulfilled]: (state, action) => {
            state.All_Product = action.payload
            state.filterData = action.payload
        },
        [AllProduct.rejected]: (state, action) => {
            state.All_Product = null
        },
        [AllProduct.pending]: (state, action) => {
            state.All_Product = null
        },

        //single_product
        [singleProduct.rejected]: (state, action) => {
            state.single_product = null
        },
        [singleProduct.fulfilled]: (state, action) => {
            state.single_product = action.payload
        },
        [singleProduct.pending]: (state, action) => {
            state.single_product = null
        },
    }
})




export const {
    //filter
    Search_filter,
    category_filter,
    Company_filter,
    color_filter,
    Price_filter,
    free_shipping,
    clear_filter,

    //sort
    sort_product,

    //cart
    addCart,
    UpdateCart,
    deliteSingleCartData,
    clearCartData,


    //checkout
    totalAmount,

} = slice.actions

export default slice.reducer