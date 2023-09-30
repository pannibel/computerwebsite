import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers/imagesReducer';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;

export const getServerSideProps = () => {
  return async (dispatch) => {
      // Fetch the data from your API endpoint
      const response = await fetch("https://pannibel.com/wordpress/wp-json/wp/v2/image?per_page=100&_embed");
      const data = await response.json();

      // Dispatch the action to update the Redux store with the fetched data
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  };
};