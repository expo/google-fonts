# @expo-google-fonts/ibm-plex-sans-devanagari

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-devanagari)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-devanagari)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-devanagari)

This package lets you use the [**IBM Plex Sans Devanagari**](https://fonts.google.com/specimen/IBM+Plex+Sans+Devanagari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Devanagari

![IBM Plex Sans Devanagari](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansDevanagari_100Thin`
- `IBMPlexSansDevanagari_200ExtraLight`
- `IBMPlexSansDevanagari_300Light`
- `IBMPlexSansDevanagari_400Regular`
- `IBMPlexSansDevanagari_500Medium`
- `IBMPlexSansDevanagari_600SemiBold`
- `IBMPlexSansDevanagari_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-sans-devanagari expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-sans-devanagari/useFonts';
import { IBMPlexSansDevanagari_100Thin } from '@expo-google-fonts/ibm-plex-sans-devanagari/100Thin';
import { IBMPlexSansDevanagari_200ExtraLight } from '@expo-google-fonts/ibm-plex-sans-devanagari/200ExtraLight';
import { IBMPlexSansDevanagari_300Light } from '@expo-google-fonts/ibm-plex-sans-devanagari/300Light';
import { IBMPlexSansDevanagari_400Regular } from '@expo-google-fonts/ibm-plex-sans-devanagari/400Regular';
import { IBMPlexSansDevanagari_500Medium } from '@expo-google-fonts/ibm-plex-sans-devanagari/500Medium';
import { IBMPlexSansDevanagari_600SemiBold } from '@expo-google-fonts/ibm-plex-sans-devanagari/600SemiBold';
import { IBMPlexSansDevanagari_700Bold } from '@expo-google-fonts/ibm-plex-sans-devanagari/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSansDevanagari_100Thin, 
    IBMPlexSansDevanagari_200ExtraLight, 
    IBMPlexSansDevanagari_300Light, 
    IBMPlexSansDevanagari_400Regular, 
    IBMPlexSansDevanagari_500Medium, 
    IBMPlexSansDevanagari_600SemiBold, 
    IBMPlexSansDevanagari_700Bold
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
          fontFamily: "IBMPlexSansDevanagari_100Thin"
        }}>
          IBM Plex Sans Devanagari Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_200ExtraLight"
        }}>
          IBM Plex Sans Devanagari Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_300Light"
        }}>
          IBM Plex Sans Devanagari Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_400Regular"
        }}>
          IBM Plex Sans Devanagari Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_500Medium"
        }}>
          IBM Plex Sans Devanagari Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_600SemiBold"
        }}>
          IBM Plex Sans Devanagari Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansDevanagari_700Bold"
        }}>
          IBM Plex Sans Devanagari Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansDevanagari_100Thin](./100Thin/IBMPlexSansDevanagari_100Thin.ttf.png)|![IBMPlexSansDevanagari_200ExtraLight](./200ExtraLight/IBMPlexSansDevanagari_200ExtraLight.ttf.png)|![IBMPlexSansDevanagari_300Light](./300Light/IBMPlexSansDevanagari_300Light.ttf.png)||
|![IBMPlexSansDevanagari_400Regular](./400Regular/IBMPlexSansDevanagari_400Regular.ttf.png)|![IBMPlexSansDevanagari_500Medium](./500Medium/IBMPlexSansDevanagari_500Medium.ttf.png)|![IBMPlexSansDevanagari_600SemiBold](./600SemiBold/IBMPlexSansDevanagari_600SemiBold.ttf.png)||
|![IBMPlexSansDevanagari_700Bold](./700Bold/IBMPlexSansDevanagari_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-sans-devanagari` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Devanagari page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Devanagari) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Devanagari on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Devanagari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-devanagari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-devanagari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
