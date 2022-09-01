import firestore from '@react-native-firebase/firestore';

firestore()
  .collection('Workout')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.category, documentSnapshot.data());
    });
  });


