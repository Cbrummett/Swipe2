import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase('db.SwipeDB') // returns Database object
const Drawer = createDrawerNavigator();

export default function App() {
  db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS users (UserID PRIMARY KEY AUTOINCREMENT, UserName Text)')
  });
  // example of the constants 
        //const updateName = (id) => {
        //   db.transaction(tx => {
        //     tx.executeSql('UPDATE names SET name = ? WHERE id = ?', [currentName, id],
        //       (txObj, resultSet) => {
        //         if (resultSet.rowsAffected > 0) {
        //           let existingNames = [...names];
        //           const indexToUpdate = existingNames.findIndex(name => name.id === id);
        //           existingNames[indexToUpdate].name = currentName;
        //           setNames(existingNames);
        //           setCurrentName(undefined);
        //         }
        //       },
        //       (txObj, error) => console.log(error)
        //     );
        //   });
        // };

// will need to add tx executes for each of db const and then call within the pages of the drawer navigation or within other const of posting or making a comment

//once inside of the profile I will use buttons that will call the constants of the different sql queryies or actions using this format <Button title='Delete' onPress={() => deleteName(name.id)} />
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="CreateAPost" component={CreateAPost} />
      </Drawer.Navigator>
    </NavigationContainer>

    
    
  );
}
function Profile({ navigation }) {
  return(
    <View>
      <Text>This is the profile page</Text>
    </View>
  )
}

function CreateAPost({ navigation }) {
  return(
    <View>
      <Text>This is the Create a Post page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
