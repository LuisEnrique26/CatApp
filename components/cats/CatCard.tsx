import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '../themed-text';

interface CatCardProps {
    name: string;
    origin: string;
    description: string;
    imageUrl: string;
}

export function CatCard({ name, origin, description, imageUrl }: CatCardProps) {
    return (
        <View style={styles.card}>
            <BlurView
                intensity={50}
                tint='default'
                style={StyleSheet.absoluteFill}
            ></BlurView>
            <LinearGradient
                colors={[
                    'rgba(0, 120, 255, 0.45)',
                    'rgba(0, 0, 0, 0)',
                ]}
                start={{x:0, y:0}}
                end={{x:.8, y:.8}}
                style={StyleSheet.absoluteFill}
            />
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View
                style={styles.cardBody}
            >
                <ThemedText
                    type="title"
                >{name}</ThemedText>
                <ThemedText
                    type="subtitle"
                >
                    {origin}
                </ThemedText>
                <ThemedText
                    type="default"
                >{description}</ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        width: 170,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        flex: 1,
    },
    cardBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }

});