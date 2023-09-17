import {connect} from 'mongoose';

const dbURI = 'mongodb://localhost:27017';

export default () => {
  return connect(dbURI, {dbName: 'SIH'})
    .then(data => {
      console.log('Connected to database successfully');
      return data;
    })
    .catch(error => {
      throw error;
    });
};
