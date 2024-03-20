// Partie d'import
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Partie de définition des composants
const Structure = () => {
  // Partie traitement / gestion d'état
  const [state, setState] = useState(initialState);

  // Fonctions utilitaires ou gestionnaires d'événements
  const handlePress = () => {
    // Logique de traitement
  };

  // Partie rendu / vue
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.button}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

// Partie de définition des styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
  },
});

export default Structure;
