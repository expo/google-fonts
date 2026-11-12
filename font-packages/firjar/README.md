# @expo-google-fonts/firjar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/firjar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/firjar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/firjar)

This package lets you use the [**Firjar**](https://fonts.google.com/specimen/Firjar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Firjar

![Firjar](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Firjar_100Thin`
- `Firjar_200ExtraLight`
- `Firjar_300Light`
- `Firjar_400Regular`
- `Firjar_500Medium`
- `Firjar_600SemiBold`
- `Firjar_700Bold`
- `Firjar_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/firjar expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/firjar/useFonts';
import { Firjar_100Thin } from '@expo-google-fonts/firjar/100Thin';
import { Firjar_200ExtraLight } from '@expo-google-fonts/firjar/200ExtraLight';
import { Firjar_300Light } from '@expo-google-fonts/firjar/300Light';
import { Firjar_400Regular } from '@expo-google-fonts/firjar/400Regular';
import { Firjar_500Medium } from '@expo-google-fonts/firjar/500Medium';
import { Firjar_600SemiBold } from '@expo-google-fonts/firjar/600SemiBold';
import { Firjar_700Bold } from '@expo-google-fonts/firjar/700Bold';
import { Firjar_800ExtraBold } from '@expo-google-fonts/firjar/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Firjar_100Thin, 
    Firjar_200ExtraLight, 
    Firjar_300Light, 
    Firjar_400Regular, 
    Firjar_500Medium, 
    Firjar_600SemiBold, 
    Firjar_700Bold, 
    Firjar_800ExtraBold
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
          fontFamily: "Firjar_100Thin"
        }}>
          Firjar Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_200ExtraLight"
        }}>
          Firjar Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_300Light"
        }}>
          Firjar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_400Regular"
        }}>
          Firjar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_500Medium"
        }}>
          Firjar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_600SemiBold"
        }}>
          Firjar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_700Bold"
        }}>
          Firjar Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Firjar_800ExtraBold"
        }}>
          Firjar Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Firjar_100Thin](./100Thin/Firjar_100Thin.ttf.png)|![Firjar_200ExtraLight](./200ExtraLight/Firjar_200ExtraLight.ttf.png)|![Firjar_300Light](./300Light/Firjar_300Light.ttf.png)||
|![Firjar_400Regular](./400Regular/Firjar_400Regular.ttf.png)|![Firjar_500Medium](./500Medium/Firjar_500Medium.ttf.png)|![Firjar_600SemiBold](./600SemiBold/Firjar_600SemiBold.ttf.png)||
|![Firjar_700Bold](./700Bold/Firjar_700Bold.ttf.png)|![Firjar_800ExtraBold](./800ExtraBold/Firjar_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/firjar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Firjar page on Google Fonts](https://fonts.google.com/specimen/Firjar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Firjar on Google Fonts](https://fonts.google.com/specimen/Firjar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/firjar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/firjar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
