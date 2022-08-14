import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseURL = `https://still-wildwood-72982.herokuapp.com/`

const initialState = {
    hobbies: [],
    addHobbyStatus: "",
    addHobbyError: "",
    getHobbiesStatus: "",
    getHobbiesError: "",
    updateHobbyStatus: "",
    updateHobbyError: "",
    deleteHobbyStatus: "",
    deleteHobbyError: "",
}

export const hobbyAdding = createAsyncThunk("hobbies/hobbyAdding", async (hobby, { rejectWithValue }) => {
    try {
        const res = await axios.post(baseURL + "hobby", hobby)
        return res.data
    } catch (error) {
        rejectWithValue(error.res.data)
    }
})

export const getHobbies = createAsyncThunk("hobbies/getHobbies", async () => {
    try {
        const res = await axios.get(baseURL + "hobby")
        return res.data
    } catch (error) {
        return error.message
    }
})

export const deleteHObby = createAsyncThunk("hobbies/deleteHObby", async (_id, { rejectWithValue }) => {
    try {
        const res = await axios.delete(baseURL + "hobby/" + _id)
        return res.data
    } catch (error) {
        return rejectWithValue(error.res.data)
    }
})

export const updateHobby = createAsyncThunk("hobbies/updateHObby", async (hobby, { rejectWithValue }) => {
    console.log(hobby);
    try {
        const res = await axios.put(baseURL + "hobby/" + hobby._id, hobby)
        return res.data
    } catch (error) {
        return rejectWithValue(error.res.data)
    }
})

const hobbiesSlice = createSlice({
    name: 'hobbies',
    initialState,
    reducers: {},
    extraReducers: {
        [hobbyAdding.pending]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: 'pending',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [hobbyAdding.fulfilled]: (state, action) => {
            return {
                hobbies: [action.payload, ...state.hobbies],
                addHobbyStatus: 'success',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [hobbyAdding.rejected]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: 'rejected',
                addHobbyError: action.payload,
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [getHobbies.pending]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "pending",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [getHobbies.fulfilled]: (state, action) => {
            return {
                hobbies: action.payload,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "success",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [getHobbies.rejected]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "rejected",
                getHobbiesError: action.payload,
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [updateHobby.pending]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "pending",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [updateHobby.fulfilled]: (state, action) => {
            const updatedData = state.hobbies.map((hobby) => hobby._id === action.payload._id ? action.payload : hobby)
            return {
                hobbies: updatedData,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "success",
                updateHobbyError: "",
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [updateHobby.rejected]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "rejected",
                updateHobbyError: action.payload,
                deleteHobbyStatus: "",
                deleteHobbyError: "",
            }
        },
        [deleteHObby.pending]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "pending",
                deleteHobbyError: "",
            }
        },
        [deleteHObby.fulfilled]: (state, action) => {
            const currentHobbies = state.hobbies.filter((hobby) => hobby._id !== action.payload._id)
            return {
                hobbies: currentHobbies,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "success",
                deleteHobbyError: "",
            }
        },
        [deleteHObby.rejected]: (state, action) => {
            return {
                ...state,
                addHobbyStatus: '',
                addHobbyError: "",
                getHobbiesStatus: "",
                getHobbiesError: "",
                updateHobbyStatus: "",
                updateHobbyError: "",
                deleteHobbyStatus: "rejected",
                deleteHobbyError: action.payload,
            }
        }
    }
})

export default hobbiesSlice.reducer;