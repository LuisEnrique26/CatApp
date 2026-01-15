import { BlurView } from 'expo-blur';
import { Image, StyleSheet, View } from 'react-native';

interface CatCardProps {
    imageUrl: string;
}

export function CatCard({ imageUrl }: CatCardProps) {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUrl }}
                style={{
                    ...styles.image,
                    resizeMode: 'cover',
                    position: 'absolute',
                    height: 180,
                    width: 180,
                }}
            />
            <BlurView
                intensity={100}
                tint='default'
                style={StyleSheet.absoluteFill}
            />
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 180,
        width: 180,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        flex: 1,
    },
});