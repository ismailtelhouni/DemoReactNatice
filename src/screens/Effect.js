import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Effect = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    // Effectuer une requête à une API au chargement du composant
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); // Le tableau vide signifie que cette dépendance n'a pas besoin d'être suivie
    
      // Afficher un indicateur de chargement si les données sont en cours de chargement
      if (loading) {
        return (
          <View style={ styles.container }>
            <ActivityIndicator size="large" color="blue" />
          </View>
        );
      }

  return (
    <View style={ styles.container }>
      <Text>Data from API:</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Effect;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerButton:{
    flexDirection:'row'
  }
});
