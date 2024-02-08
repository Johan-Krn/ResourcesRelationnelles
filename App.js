import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import Toast, {BaseToast, ErrorToast} from "react-native-toast-message";

export default function App() {
  return (
      <SafeAreaProvider>
          <Navigation />

          <Toast
            config={{
                success: props => (
                    <BaseToast
                        {...props}
                        style={{
                            borderLeftColor: 'green',
                            height: 100,
                        }}
                        contentContainerStyle={{
                            paddingHorizontal: 15
                        }}
                        text1Style={{
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}
                        text2Style={{
                            fontSize: 15,
                        }}
                        text2NumberOfLines={3}
                    />
                ),
                error: props => (
                    <ErrorToast
                        {...props}
                        style={{
                            borderLeftColor: 'red',
                            height: 100,
                        }}
                        text1Style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                        text2Style={{
                            fontSize: 17,
                        }}
                        text2NumberOfLines={3}
                    />
                ),
            }}
          />
      </SafeAreaProvider>
  );
}
