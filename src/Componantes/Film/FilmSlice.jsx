import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



//Action
export const fetchFilm = createAsyncThunk('fetchFilm', async () => {
    const response = await fetch('https://www.omdbapi.com/?s=kabhi&apikey=43946add')
    const finaldata = await response.json()
    return finaldata
    console.log(finaldata.Search)
});


const FlimSlice = createSlice({
    name: 'film',
    initialState:  {
        isLoading: false,
        film : [],
        data: null,
        isError: false
    },
    reducers: {
        setLoading: (state, action) => {
          console.log("state", state);
          state.loading = action.payload;
        },
       
      },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilm.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(fetchFilm.fulfilled, (state,action) => {
            state.isLoading = false;
            state.film = action.payload;

        })
        .addCase(fetchFilm.rejected, (state,action) => {
            state.isError = true;
            console.log("Error", action.payload)

        })
    }


})
export const {setLoading} = FlimSlice.actions

export const filmReducer = FlimSlice.reducer