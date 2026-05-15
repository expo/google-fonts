# @expo-google-fonts/estedad

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/estedad)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/estedad)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/estedad)

This package lets you use the [**Estedad**](https://fonts.google.com/specimen/Estedad) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Estedad

![Estedad](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Estedad_100Thin`
- `Estedad_200ExtraLight`
- `Estedad_300Light`
- `Estedad_400Regular`
- `Estedad_500Medium`
- `Estedad_600SemiBold`
- `Estedad_700Bold`
- `Estedad_800ExtraBold`
- `Estedad_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/estedad expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/estedad/useFonts';
import { Estedad_100Thin } from '@expo-google-fonts/estedad/100Thin';
import { Estedad_200ExtraLight } from '@expo-google-fonts/estedad/200ExtraLight';
import { Estedad_300Light } from '@expo-google-fonts/estedad/300Light';
import { Estedad_400Regular } from '@expo-google-fonts/estedad/400Regular';
import { Estedad_500Medium } from '@expo-google-fonts/estedad/500Medium';
import { Estedad_600SemiBold } from '@expo-google-fonts/estedad/600SemiBold';
import { Estedad_700Bold } from '@expo-google-fonts/estedad/700Bold';
import { Estedad_800ExtraBold } from '@expo-google-fonts/estedad/800ExtraBold';
import { Estedad_900Black } from '@expo-google-fonts/estedad/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Estedad_100Thin, 
    Estedad_200ExtraLight, 
    Estedad_300Light, 
    Estedad_400Regular, 
    Estedad_500Medium, 
    Estedad_600SemiBold, 
    Estedad_700Bold, 
    Estedad_800ExtraBold, 
    Estedad_900Black
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
          fontFamily: "Estedad_100Thin"
        }}>
          Estedad Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_200ExtraLight"
        }}>
          Estedad Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_300Light"
        }}>
          Estedad Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_400Regular"
        }}>
          Estedad Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_500Medium"
        }}>
          Estedad Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_600SemiBold"
        }}>
          Estedad Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_700Bold"
        }}>
          Estedad Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_800ExtraBold"
        }}>
          Estedad Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Estedad_900Black"
        }}>
          Estedad Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Estedad_100Thin](./100Thin/Estedad_100Thin.ttf.png)|![Estedad_200ExtraLight](./200ExtraLight/Estedad_200ExtraLight.ttf.png)|![Estedad_300Light](./300Light/Estedad_300Light.ttf.png)||
|![Estedad_400Regular](./400Regular/Estedad_400Regular.ttf.png)|![Estedad_500Medium](./500Medium/Estedad_500Medium.ttf.png)|![Estedad_600SemiBold](./600SemiBold/Estedad_600SemiBold.ttf.png)||
|![Estedad_700Bold](./700Bold/Estedad_700Bold.ttf.png)|![Estedad_800ExtraBold](./800ExtraBold/Estedad_800ExtraBold.ttf.png)|![Estedad_900Black](./900Black/Estedad_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/estedad` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Estedad page on Google Fonts](https://fonts.google.com/specimen/Estedad) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Estedad on Google Fonts](https://fonts.google.com/specimen/Estedad)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/estedad)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/estedad)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
