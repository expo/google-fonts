# @expo-google-fonts/akt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/akt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/akt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/akt)

This package lets you use the [**Akt**](https://fonts.google.com/specimen/Akt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Akt

![Akt](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Akt_100Thin`
- `Akt_200ExtraLight`
- `Akt_300Light`
- `Akt_400Regular`
- `Akt_500Medium`
- `Akt_600SemiBold`
- `Akt_700Bold`
- `Akt_800ExtraBold`
- `Akt_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/akt expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/akt/useFonts';
import { Akt_100Thin } from '@expo-google-fonts/akt/100Thin';
import { Akt_200ExtraLight } from '@expo-google-fonts/akt/200ExtraLight';
import { Akt_300Light } from '@expo-google-fonts/akt/300Light';
import { Akt_400Regular } from '@expo-google-fonts/akt/400Regular';
import { Akt_500Medium } from '@expo-google-fonts/akt/500Medium';
import { Akt_600SemiBold } from '@expo-google-fonts/akt/600SemiBold';
import { Akt_700Bold } from '@expo-google-fonts/akt/700Bold';
import { Akt_800ExtraBold } from '@expo-google-fonts/akt/800ExtraBold';
import { Akt_900Black } from '@expo-google-fonts/akt/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Akt_100Thin, 
    Akt_200ExtraLight, 
    Akt_300Light, 
    Akt_400Regular, 
    Akt_500Medium, 
    Akt_600SemiBold, 
    Akt_700Bold, 
    Akt_800ExtraBold, 
    Akt_900Black
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
          fontFamily: "Akt_100Thin"
        }}>
          Akt Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_200ExtraLight"
        }}>
          Akt Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_300Light"
        }}>
          Akt Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_400Regular"
        }}>
          Akt Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_500Medium"
        }}>
          Akt Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_600SemiBold"
        }}>
          Akt Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_700Bold"
        }}>
          Akt Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_800ExtraBold"
        }}>
          Akt Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akt_900Black"
        }}>
          Akt Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Akt_100Thin](./100Thin/Akt_100Thin.ttf.png)|![Akt_200ExtraLight](./200ExtraLight/Akt_200ExtraLight.ttf.png)|![Akt_300Light](./300Light/Akt_300Light.ttf.png)||
|![Akt_400Regular](./400Regular/Akt_400Regular.ttf.png)|![Akt_500Medium](./500Medium/Akt_500Medium.ttf.png)|![Akt_600SemiBold](./600SemiBold/Akt_600SemiBold.ttf.png)||
|![Akt_700Bold](./700Bold/Akt_700Bold.ttf.png)|![Akt_800ExtraBold](./800ExtraBold/Akt_800ExtraBold.ttf.png)|![Akt_900Black](./900Black/Akt_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/akt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Akt page on Google Fonts](https://fonts.google.com/specimen/Akt) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Akt on Google Fonts](https://fonts.google.com/specimen/Akt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/akt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/akt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
