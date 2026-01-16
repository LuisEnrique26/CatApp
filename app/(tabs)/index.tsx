import { CatCard } from "@/components/cats/CatCard";
import { useRandomCat } from "@/hooks/useCatApi";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';

export default function HomeScreen() {

  const { cats, loading, error, loadMoreCats } = useRandomCat();

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
          onEndReached={loadMoreCats}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
          ListFooterComponent={() => (
            loading ? <ActivityIndicator size="large" color="#2b2385" /> : null
          )}
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