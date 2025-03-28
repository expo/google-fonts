# @expo-google-fonts/lexend-peta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-peta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-peta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-peta)

This package lets you use the [**Lexend Peta**](https://fonts.google.com/specimen/Lexend+Peta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Peta

![Lexend Peta](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendPeta_100Thin`
- `LexendPeta_200ExtraLight`
- `LexendPeta_300Light`
- `LexendPeta_400Regular`
- `LexendPeta_500Medium`
- `LexendPeta_600SemiBold`
- `LexendPeta_700Bold`
- `LexendPeta_800ExtraBold`
- `LexendPeta_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lexend-peta expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lexend-peta/useFonts';
import { LexendPeta_100Thin } from '@expo-google-fonts/lexend-peta/100Thin';
import { LexendPeta_200ExtraLight } from '@expo-google-fonts/lexend-peta/200ExtraLight';
import { LexendPeta_300Light } from '@expo-google-fonts/lexend-peta/300Light';
import { LexendPeta_400Regular } from '@expo-google-fonts/lexend-peta/400Regular';
import { LexendPeta_500Medium } from '@expo-google-fonts/lexend-peta/500Medium';
import { LexendPeta_600SemiBold } from '@expo-google-fonts/lexend-peta/600SemiBold';
import { LexendPeta_700Bold } from '@expo-google-fonts/lexend-peta/700Bold';
import { LexendPeta_800ExtraBold } from '@expo-google-fonts/lexend-peta/800ExtraBold';
import { LexendPeta_900Black } from '@expo-google-fonts/lexend-peta/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    LexendPeta_100Thin, 
    LexendPeta_200ExtraLight, 
    LexendPeta_300Light, 
    LexendPeta_400Regular, 
    LexendPeta_500Medium, 
    LexendPeta_600SemiBold, 
    LexendPeta_700Bold, 
    LexendPeta_800ExtraBold, 
    LexendPeta_900Black
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
          fontFamily: "LexendPeta_100Thin"
        }}>
          Lexend Peta Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_200ExtraLight"
        }}>
          Lexend Peta Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_300Light"
        }}>
          Lexend Peta Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_400Regular"
        }}>
          Lexend Peta Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_500Medium"
        }}>
          Lexend Peta Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_600SemiBold"
        }}>
          Lexend Peta Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_700Bold"
        }}>
          Lexend Peta Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_800ExtraBold"
        }}>
          Lexend Peta Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendPeta_900Black"
        }}>
          Lexend Peta Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LexendPeta_100Thin](./100Thin/LexendPeta_100Thin.ttf.png)|![LexendPeta_200ExtraLight](./200ExtraLight/LexendPeta_200ExtraLight.ttf.png)|![LexendPeta_300Light](./300Light/LexendPeta_300Light.ttf.png)||
|![LexendPeta_400Regular](./400Regular/LexendPeta_400Regular.ttf.png)|![LexendPeta_500Medium](./500Medium/LexendPeta_500Medium.ttf.png)|![LexendPeta_600SemiBold](./600SemiBold/LexendPeta_600SemiBold.ttf.png)||
|![LexendPeta_700Bold](./700Bold/LexendPeta_700Bold.ttf.png)|![LexendPeta_800ExtraBold](./800ExtraBold/LexendPeta_800ExtraBold.ttf.png)|![LexendPeta_900Black](./900Black/LexendPeta_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lexend-peta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Peta page on Google Fonts](https://fonts.google.com/specimen/Lexend+Peta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Peta on Google Fonts](https://fonts.google.com/specimen/Lexend+Peta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-peta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-peta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
