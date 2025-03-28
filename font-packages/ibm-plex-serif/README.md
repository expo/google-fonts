# @expo-google-fonts/ibm-plex-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-serif)

This package lets you use the [**IBM Plex Serif**](https://fonts.google.com/specimen/IBM+Plex+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Serif

![IBM Plex Serif](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSerif_100Thin`
- `IBMPlexSerif_100Thin_Italic`
- `IBMPlexSerif_200ExtraLight`
- `IBMPlexSerif_200ExtraLight_Italic`
- `IBMPlexSerif_300Light`
- `IBMPlexSerif_300Light_Italic`
- `IBMPlexSerif_400Regular`
- `IBMPlexSerif_400Regular_Italic`
- `IBMPlexSerif_500Medium`
- `IBMPlexSerif_500Medium_Italic`
- `IBMPlexSerif_600SemiBold`
- `IBMPlexSerif_600SemiBold_Italic`
- `IBMPlexSerif_700Bold`
- `IBMPlexSerif_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-serif expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-serif/useFonts';
import { IBMPlexSerif_100Thin } from '@expo-google-fonts/ibm-plex-serif/100Thin';
import { IBMPlexSerif_100Thin_Italic } from '@expo-google-fonts/ibm-plex-serif/100Thin_Italic';
import { IBMPlexSerif_200ExtraLight } from '@expo-google-fonts/ibm-plex-serif/200ExtraLight';
import { IBMPlexSerif_200ExtraLight_Italic } from '@expo-google-fonts/ibm-plex-serif/200ExtraLight_Italic';
import { IBMPlexSerif_300Light } from '@expo-google-fonts/ibm-plex-serif/300Light';
import { IBMPlexSerif_300Light_Italic } from '@expo-google-fonts/ibm-plex-serif/300Light_Italic';
import { IBMPlexSerif_400Regular } from '@expo-google-fonts/ibm-plex-serif/400Regular';
import { IBMPlexSerif_400Regular_Italic } from '@expo-google-fonts/ibm-plex-serif/400Regular_Italic';
import { IBMPlexSerif_500Medium } from '@expo-google-fonts/ibm-plex-serif/500Medium';
import { IBMPlexSerif_500Medium_Italic } from '@expo-google-fonts/ibm-plex-serif/500Medium_Italic';
import { IBMPlexSerif_600SemiBold } from '@expo-google-fonts/ibm-plex-serif/600SemiBold';
import { IBMPlexSerif_600SemiBold_Italic } from '@expo-google-fonts/ibm-plex-serif/600SemiBold_Italic';
import { IBMPlexSerif_700Bold } from '@expo-google-fonts/ibm-plex-serif/700Bold';
import { IBMPlexSerif_700Bold_Italic } from '@expo-google-fonts/ibm-plex-serif/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSerif_100Thin, 
    IBMPlexSerif_100Thin_Italic, 
    IBMPlexSerif_200ExtraLight, 
    IBMPlexSerif_200ExtraLight_Italic, 
    IBMPlexSerif_300Light, 
    IBMPlexSerif_300Light_Italic, 
    IBMPlexSerif_400Regular, 
    IBMPlexSerif_400Regular_Italic, 
    IBMPlexSerif_500Medium, 
    IBMPlexSerif_500Medium_Italic, 
    IBMPlexSerif_600SemiBold, 
    IBMPlexSerif_600SemiBold_Italic, 
    IBMPlexSerif_700Bold, 
    IBMPlexSerif_700Bold_Italic
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
          fontFamily: "IBMPlexSerif_100Thin"
        }}>
          IBM Plex Serif Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_100Thin_Italic"
        }}>
          IBM Plex Serif Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_200ExtraLight"
        }}>
          IBM Plex Serif Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_200ExtraLight_Italic"
        }}>
          IBM Plex Serif Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_300Light"
        }}>
          IBM Plex Serif Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_300Light_Italic"
        }}>
          IBM Plex Serif Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_400Regular"
        }}>
          IBM Plex Serif Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_400Regular_Italic"
        }}>
          IBM Plex Serif Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_500Medium"
        }}>
          IBM Plex Serif Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_500Medium_Italic"
        }}>
          IBM Plex Serif Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_600SemiBold"
        }}>
          IBM Plex Serif Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_600SemiBold_Italic"
        }}>
          IBM Plex Serif Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_700Bold"
        }}>
          IBM Plex Serif Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSerif_700Bold_Italic"
        }}>
          IBM Plex Serif Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSerif_100Thin](./100Thin/IBMPlexSerif_100Thin.ttf.png)|![IBMPlexSerif_100Thin_Italic](./100Thin_Italic/IBMPlexSerif_100Thin_Italic.ttf.png)|![IBMPlexSerif_200ExtraLight](./200ExtraLight/IBMPlexSerif_200ExtraLight.ttf.png)||
|![IBMPlexSerif_200ExtraLight_Italic](./200ExtraLight_Italic/IBMPlexSerif_200ExtraLight_Italic.ttf.png)|![IBMPlexSerif_300Light](./300Light/IBMPlexSerif_300Light.ttf.png)|![IBMPlexSerif_300Light_Italic](./300Light_Italic/IBMPlexSerif_300Light_Italic.ttf.png)||
|![IBMPlexSerif_400Regular](./400Regular/IBMPlexSerif_400Regular.ttf.png)|![IBMPlexSerif_400Regular_Italic](./400Regular_Italic/IBMPlexSerif_400Regular_Italic.ttf.png)|![IBMPlexSerif_500Medium](./500Medium/IBMPlexSerif_500Medium.ttf.png)||
|![IBMPlexSerif_500Medium_Italic](./500Medium_Italic/IBMPlexSerif_500Medium_Italic.ttf.png)|![IBMPlexSerif_600SemiBold](./600SemiBold/IBMPlexSerif_600SemiBold.ttf.png)|![IBMPlexSerif_600SemiBold_Italic](./600SemiBold_Italic/IBMPlexSerif_600SemiBold_Italic.ttf.png)||
|![IBMPlexSerif_700Bold](./700Bold/IBMPlexSerif_700Bold.ttf.png)|![IBMPlexSerif_700Bold_Italic](./700Bold_Italic/IBMPlexSerif_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Serif page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Serif on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
