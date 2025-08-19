import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://stu-backend-six.vercel.app/students';

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return await response.json();
  }
);

export const addStudentAsync = createAsyncThunk(
  'students/addStudent',
  async (newStudent) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    });
    if (!response.ok) {
      throw new Error('Failed to add student');
    }
    return await response.json();
  }
);

export const updateStudentAsync = createAsyncThunk(
  'students/updateStudent',
  async ({ id, updatedData }) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('failed to update student');
    }
    return await response.json();
  }
);

export const deleteStudentAsync = createAsyncThunk(
  'students/deleteStudent',
  async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete student');
    }
    return id;
  }
);

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    loading: false,
    error: null,
    filter: 'All',
    sortBy: 'Name',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetching students
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //adding students
      .addCase(addStudentAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStudentAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })
      .addCase(addStudentAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // updateStudentAsync
      .addCase(updateStudentAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStudentAsync.fulfilled, (state, action) => {
        state.loading = false;
        const updatedStudent = action.payload;
        const index = state.students.findIndex(
          (s) => s._id === updatedStudent._id
        );
        if (index !== -1) {
          state.students[index] = updatedStudent;
        }
      })
      .addCase(updateStudentAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //delete student
      .addCase(deleteStudentAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStudentAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (student) => student._id !== Number(action.payload)
        );
      })
      .addCase(deleteStudentAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilter, setSortBy } = studentsSlice.actions;
export default studentsSlice.reducer;
