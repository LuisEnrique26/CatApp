import { CatCard } from "@/components/cats/CatCard";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {/*<ThemedView>*/}
        <CatCard name="Maine Coon" origin="Maine, USA" description="Large, friendly cats with a thick coat." imageUrl="https://cdn2.thecatapi.com/images/p8.jpg" />
      {/*</ThemedView>*/}
    </SafeAreaView>    
  );
}