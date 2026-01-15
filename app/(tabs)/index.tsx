import { CatCard } from "@/components/cats/CatCard";
import { useRandomCat } from "@/hooks/useCatApi";
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';

export default function HomeScreen() {

  const { cats, loading, error, refresh } = useRandomCat();

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView
        style={styles.secView}
      >
        <ThemedText
          style= {styles.title}
        >
          Cats of the day
        </ThemedText>

        { loading && <ActivityIndicator size="large" color="#2b2385" /> }
        { error && <ThemedText>{error}</ThemedText> }

        <FlatList
          data={cats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CatCard imageUrl={item.imageUrl} />}
          numColumns={2}
          contentContainerStyle={{ padding: 16 }}
          columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 15 }}
          ListFooterComponent={
            cats.length > 0 ?
              <TouchableOpacity onPress={refresh}>
                <View
                  style={styles.button}
                >
                  <ThemedText
                    style={{
                      ...styles.title,
                      fontSize: 22,
                      marginTop: 0,
                    }}
                  >
                    Load more cats
                  </ThemedText>
                </View>
              </TouchableOpacity>
              : null
          }
        />
          
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secView: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#3223d6',
    borderRadius: 10,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  }
});