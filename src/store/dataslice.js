import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




export const dataFetch = createAsyncThunk('data/dataFetch', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch("http://localhost:3005/data");
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const deleteData = createAsyncThunk("data/deleteData", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch(`http://localhost:3005/data/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        return id
    } catch (error) {
        return rejectWithValue(error.message)
    }

})

export const insertData = createAsyncThunk("data/insertData", async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch("http://localhost:3005/data", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

})

export const dataslice = createSlice({
    name: "data",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        //----------------------------fetch data-----------------------//

        builder.addCase(dataFetch.pending, (state) => {
            state.loading = true
        });
        builder.addCase(dataFetch.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload

        });
        builder.addCase(dataFetch.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
        //----------------------------indert data--------------------//

        builder.addCase(insertData.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(insertData.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.data.push(action.payload)
        });
        builder.addCase(insertData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });

        //------------------------delete data---------------------//

        builder.addCase(deleteData.pending, (state) => {
            state.loading = true
            state.error = null

        });
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.data = state.data.filter((el) => el.id !== action.payload)

        });
        builder.addCase(deleteData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });

    },
})

export const { increment } = dataslice.actions

export default dataslice.reducer