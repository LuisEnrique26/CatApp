import { CatCard } from "@/components/cats/CatCard";
import { useRandomCat } from "@/hooks/useCatApi";
import { ActivityIndicator, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';


export default function HomeScreen() {

  const { cat, loading, error, refresh } = useRandomCat();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedView>
        <ThemedText>
          Cat of the day
        </ThemedText>

          { loading && <ActivityIndicator size="large" color="#2b2385" /> }

          { error && <ThemedText>{error}</ThemedText> }

          { cat && (
            <>
              <CatCard imageUrl={cat.imageUrl} />
              <Button title="See other cat" onPress={refresh}/>
            </>
          )}
        
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
});