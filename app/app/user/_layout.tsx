import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useRouter } from 'expo-router';

const UserLayout = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <Tabs>
          <Tabs.Screen name="store" options={{ title: 'Store' }} />
          <Tabs.Screen name="in-game" options={{ title: 'In Game' }} />
        </Tabs>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserLayout;
