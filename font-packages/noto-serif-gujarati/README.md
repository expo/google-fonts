# @expo-google-fonts/noto-serif-gujarati

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-gujarati)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-gujarati)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-gujarati)

This package lets you use the [**Noto Serif Gujarati**](https://fonts.google.com/specimen/Noto+Serif+Gujarati) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Gujarati

![Noto Serif Gujarati](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifGujarati_100Thin`
- `NotoSerifGujarati_200ExtraLight`
- `NotoSerifGujarati_300Light`
- `NotoSerifGujarati_400Regular`
- `NotoSerifGujarati_500Medium`
- `NotoSerifGujarati_600SemiBold`
- `NotoSerifGujarati_700Bold`
- `NotoSerifGujarati_800ExtraBold`
- `NotoSerifGujarati_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-gujarati expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-gujarati/useFonts';
import { NotoSerifGujarati_100Thin } from '@expo-google-fonts/noto-serif-gujarati/100Thin';
import { NotoSerifGujarati_200ExtraLight } from '@expo-google-fonts/noto-serif-gujarati/200ExtraLight';
import { NotoSerifGujarati_300Light } from '@expo-google-fonts/noto-serif-gujarati/300Light';
import { NotoSerifGujarati_400Regular } from '@expo-google-fonts/noto-serif-gujarati/400Regular';
import { NotoSerifGujarati_500Medium } from '@expo-google-fonts/noto-serif-gujarati/500Medium';
import { NotoSerifGujarati_600SemiBold } from '@expo-google-fonts/noto-serif-gujarati/600SemiBold';
import { NotoSerifGujarati_700Bold } from '@expo-google-fonts/noto-serif-gujarati/700Bold';
import { NotoSerifGujarati_800ExtraBold } from '@expo-google-fonts/noto-serif-gujarati/800ExtraBold';
import { NotoSerifGujarati_900Black } from '@expo-google-fonts/noto-serif-gujarati/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifGujarati_100Thin, 
    NotoSerifGujarati_200ExtraLight, 
    NotoSerifGujarati_300Light, 
    NotoSerifGujarati_400Regular, 
    NotoSerifGujarati_500Medium, 
    NotoSerifGujarati_600SemiBold, 
    NotoSerifGujarati_700Bold, 
    NotoSerifGujarati_800ExtraBold, 
    NotoSerifGujarati_900Black
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
          fontFamily: "NotoSerifGujarati_100Thin"
        }}>
          Noto Serif Gujarati Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_200ExtraLight"
        }}>
          Noto Serif Gujarati Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_300Light"
        }}>
          Noto Serif Gujarati Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_400Regular"
        }}>
          Noto Serif Gujarati Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_500Medium"
        }}>
          Noto Serif Gujarati Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_600SemiBold"
        }}>
          Noto Serif Gujarati Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_700Bold"
        }}>
          Noto Serif Gujarati Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_800ExtraBold"
        }}>
          Noto Serif Gujarati Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGujarati_900Black"
        }}>
          Noto Serif Gujarati Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifGujarati_100Thin](./100Thin/NotoSerifGujarati_100Thin.ttf.png)|![NotoSerifGujarati_200ExtraLight](./200ExtraLight/NotoSerifGujarati_200ExtraLight.ttf.png)|![NotoSerifGujarati_300Light](./300Light/NotoSerifGujarati_300Light.ttf.png)||
|![NotoSerifGujarati_400Regular](./400Regular/NotoSerifGujarati_400Regular.ttf.png)|![NotoSerifGujarati_500Medium](./500Medium/NotoSerifGujarati_500Medium.ttf.png)|![NotoSerifGujarati_600SemiBold](./600SemiBold/NotoSerifGujarati_600SemiBold.ttf.png)||
|![NotoSerifGujarati_700Bold](./700Bold/NotoSerifGujarati_700Bold.ttf.png)|![NotoSerifGujarati_800ExtraBold](./800ExtraBold/NotoSerifGujarati_800ExtraBold.ttf.png)|![NotoSerifGujarati_900Black](./900Black/NotoSerifGujarati_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-gujarati` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Gujarati page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Gujarati) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Gujarati on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Gujarati)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-gujarati)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-gujarati)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
