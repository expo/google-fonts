# @expo-google-fonts/ibm-plex-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-mono)

This package lets you use the [**IBM Plex Mono**](https://fonts.google.com/specimen/IBM+Plex+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Mono

![IBM Plex Mono](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexMono_100Thin`
- `IBMPlexMono_100Thin_Italic`
- `IBMPlexMono_200ExtraLight`
- `IBMPlexMono_200ExtraLight_Italic`
- `IBMPlexMono_300Light`
- `IBMPlexMono_300Light_Italic`
- `IBMPlexMono_400Regular`
- `IBMPlexMono_400Regular_Italic`
- `IBMPlexMono_500Medium`
- `IBMPlexMono_500Medium_Italic`
- `IBMPlexMono_600SemiBold`
- `IBMPlexMono_600SemiBold_Italic`
- `IBMPlexMono_700Bold`
- `IBMPlexMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-mono/useFonts';
import { IBMPlexMono_100Thin } from '@expo-google-fonts/ibm-plex-mono/100Thin';
import { IBMPlexMono_100Thin_Italic } from '@expo-google-fonts/ibm-plex-mono/100Thin_Italic';
import { IBMPlexMono_200ExtraLight } from '@expo-google-fonts/ibm-plex-mono/200ExtraLight';
import { IBMPlexMono_200ExtraLight_Italic } from '@expo-google-fonts/ibm-plex-mono/200ExtraLight_Italic';
import { IBMPlexMono_300Light } from '@expo-google-fonts/ibm-plex-mono/300Light';
import { IBMPlexMono_300Light_Italic } from '@expo-google-fonts/ibm-plex-mono/300Light_Italic';
import { IBMPlexMono_400Regular } from '@expo-google-fonts/ibm-plex-mono/400Regular';
import { IBMPlexMono_400Regular_Italic } from '@expo-google-fonts/ibm-plex-mono/400Regular_Italic';
import { IBMPlexMono_500Medium } from '@expo-google-fonts/ibm-plex-mono/500Medium';
import { IBMPlexMono_500Medium_Italic } from '@expo-google-fonts/ibm-plex-mono/500Medium_Italic';
import { IBMPlexMono_600SemiBold } from '@expo-google-fonts/ibm-plex-mono/600SemiBold';
import { IBMPlexMono_600SemiBold_Italic } from '@expo-google-fonts/ibm-plex-mono/600SemiBold_Italic';
import { IBMPlexMono_700Bold } from '@expo-google-fonts/ibm-plex-mono/700Bold';
import { IBMPlexMono_700Bold_Italic } from '@expo-google-fonts/ibm-plex-mono/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexMono_100Thin, 
    IBMPlexMono_100Thin_Italic, 
    IBMPlexMono_200ExtraLight, 
    IBMPlexMono_200ExtraLight_Italic, 
    IBMPlexMono_300Light, 
    IBMPlexMono_300Light_Italic, 
    IBMPlexMono_400Regular, 
    IBMPlexMono_400Regular_Italic, 
    IBMPlexMono_500Medium, 
    IBMPlexMono_500Medium_Italic, 
    IBMPlexMono_600SemiBold, 
    IBMPlexMono_600SemiBold_Italic, 
    IBMPlexMono_700Bold, 
    IBMPlexMono_700Bold_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_100Thin"
        }}>
          IBM Plex Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_100Thin_Italic"
        }}>
          IBM Plex Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_200ExtraLight"
        }}>
          IBM Plex Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_200ExtraLight_Italic"
        }}>
          IBM Plex Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_300Light"
        }}>
          IBM Plex Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_300Light_Italic"
        }}>
          IBM Plex Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_400Regular"
        }}>
          IBM Plex Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_400Regular_Italic"
        }}>
          IBM Plex Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_500Medium"
        }}>
          IBM Plex Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_500Medium_Italic"
        }}>
          IBM Plex Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_600SemiBold"
        }}>
          IBM Plex Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_600SemiBold_Italic"
        }}>
          IBM Plex Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_700Bold"
        }}>
          IBM Plex Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexMono_700Bold_Italic"
        }}>
          IBM Plex Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexMono_100Thin](./100Thin/IBMPlexMono_100Thin.ttf.png)|![IBMPlexMono_100Thin_Italic](./100Thin_Italic/IBMPlexMono_100Thin_Italic.ttf.png)|![IBMPlexMono_200ExtraLight](./200ExtraLight/IBMPlexMono_200ExtraLight.ttf.png)||
|![IBMPlexMono_200ExtraLight_Italic](./200ExtraLight_Italic/IBMPlexMono_200ExtraLight_Italic.ttf.png)|![IBMPlexMono_300Light](./300Light/IBMPlexMono_300Light.ttf.png)|![IBMPlexMono_300Light_Italic](./300Light_Italic/IBMPlexMono_300Light_Italic.ttf.png)||
|![IBMPlexMono_400Regular](./400Regular/IBMPlexMono_400Regular.ttf.png)|![IBMPlexMono_400Regular_Italic](./400Regular_Italic/IBMPlexMono_400Regular_Italic.ttf.png)|![IBMPlexMono_500Medium](./500Medium/IBMPlexMono_500Medium.ttf.png)||
|![IBMPlexMono_500Medium_Italic](./500Medium_Italic/IBMPlexMono_500Medium_Italic.ttf.png)|![IBMPlexMono_600SemiBold](./600SemiBold/IBMPlexMono_600SemiBold.ttf.png)|![IBMPlexMono_600SemiBold_Italic](./600SemiBold_Italic/IBMPlexMono_600SemiBold_Italic.ttf.png)||
|![IBMPlexMono_700Bold](./700Bold/IBMPlexMono_700Bold.ttf.png)|![IBMPlexMono_700Bold_Italic](./700Bold_Italic/IBMPlexMono_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Mono page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Mono on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
