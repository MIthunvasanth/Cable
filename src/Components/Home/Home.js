import { useRef, React,useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, DrawerLayoutAndroid, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
  
    const changeDrawerPosition = () => {
      setDrawerPosition(drawerPosition === 'left' ? 'right' : 'left');
    };
  
  const data = [
    { key: '1', text: 'Example Chip 1' },
    { key: '2', text: 'Example Chip 2' },
    { key: '3', text: 'Example Chip 3' },
    { key: '4', text: 'Example Chip 4' },
    { key: '5', text: 'Example Chip 5' },
    { key: '6', text: 'Example Chip 6' },
    { key: '7', text: 'Example Chip 7' },
    { key: '8', text: 'Example Chip 8' },
    { key: '9', text: 'Example Chip 9' },
  ];

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={[styles.container, styles.navigationContainer]}>
          <View style={styles.headernav}>
            <Text style={styles.headernavname}>TEST</Text>
          </View>
          <View style={styles.buttoncontainer}>
            <Button title="Close drawer" onPress={() => drawer.current.closeDrawer()} />
          </View>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title="Open drawer" onPress={() => drawer.current.openDrawer()} />
        </View>

        <FlatList
          data={data}
          horizontal={true}
          contentContainerStyle={styles.chipContainer}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>
              {item.text}
            </Chip>
          )}
        />

        <View style={styles.bottomNavigation}>
          <Button title="Tab 1" onPress={() => {}} />
          <Button title="Tab 2" onPress={() => {}} />
          <Button title="Tab 3" onPress={() => {}} />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    margin: 0,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  buttoncontainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  headernav: {
    height: 100,
    backgroundColor: '#7a42f4',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headernavname: {
    fontSize: 20,
  },
  chipContainer: {
    paddingHorizontal: 10,
    paddingTop:10
  },
  chip: {
    marginHorizontal: 5,
    height:40
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
});

export default App;
