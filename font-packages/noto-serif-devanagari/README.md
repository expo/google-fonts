# @expo-google-fonts/noto-serif-devanagari

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-devanagari)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-devanagari)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-devanagari)

This package lets you use the [**Noto Serif Devanagari**](https://fonts.google.com/specimen/Noto+Serif+Devanagari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Devanagari

![Noto Serif Devanagari](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifDevanagari_100Thin`
- `NotoSerifDevanagari_200ExtraLight`
- `NotoSerifDevanagari_300Light`
- `NotoSerifDevanagari_400Regular`
- `NotoSerifDevanagari_500Medium`
- `NotoSerifDevanagari_600SemiBold`
- `NotoSerifDevanagari_700Bold`
- `NotoSerifDevanagari_800ExtraBold`
- `NotoSerifDevanagari_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-devanagari expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-devanagari/useFonts';
import { NotoSerifDevanagari_100Thin } from '@expo-google-fonts/noto-serif-devanagari/100Thin';
import { NotoSerifDevanagari_200ExtraLight } from '@expo-google-fonts/noto-serif-devanagari/200ExtraLight';
import { NotoSerifDevanagari_300Light } from '@expo-google-fonts/noto-serif-devanagari/300Light';
import { NotoSerifDevanagari_400Regular } from '@expo-google-fonts/noto-serif-devanagari/400Regular';
import { NotoSerifDevanagari_500Medium } from '@expo-google-fonts/noto-serif-devanagari/500Medium';
import { NotoSerifDevanagari_600SemiBold } from '@expo-google-fonts/noto-serif-devanagari/600SemiBold';
import { NotoSerifDevanagari_700Bold } from '@expo-google-fonts/noto-serif-devanagari/700Bold';
import { NotoSerifDevanagari_800ExtraBold } from '@expo-google-fonts/noto-serif-devanagari/800ExtraBold';
import { NotoSerifDevanagari_900Black } from '@expo-google-fonts/noto-serif-devanagari/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifDevanagari_100Thin, 
    NotoSerifDevanagari_200ExtraLight, 
    NotoSerifDevanagari_300Light, 
    NotoSerifDevanagari_400Regular, 
    NotoSerifDevanagari_500Medium, 
    NotoSerifDevanagari_600SemiBold, 
    NotoSerifDevanagari_700Bold, 
    NotoSerifDevanagari_800ExtraBold, 
    NotoSerifDevanagari_900Black
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
          fontFamily: "NotoSerifDevanagari_100Thin"
        }}>
          Noto Serif Devanagari Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_200ExtraLight"
        }}>
          Noto Serif Devanagari Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_300Light"
        }}>
          Noto Serif Devanagari Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_400Regular"
        }}>
          Noto Serif Devanagari Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_500Medium"
        }}>
          Noto Serif Devanagari Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_600SemiBold"
        }}>
          Noto Serif Devanagari Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_700Bold"
        }}>
          Noto Serif Devanagari Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_800ExtraBold"
        }}>
          Noto Serif Devanagari Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDevanagari_900Black"
        }}>
          Noto Serif Devanagari Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifDevanagari_100Thin](./100Thin/NotoSerifDevanagari_100Thin.ttf.png)|![NotoSerifDevanagari_200ExtraLight](./200ExtraLight/NotoSerifDevanagari_200ExtraLight.ttf.png)|![NotoSerifDevanagari_300Light](./300Light/NotoSerifDevanagari_300Light.ttf.png)||
|![NotoSerifDevanagari_400Regular](./400Regular/NotoSerifDevanagari_400Regular.ttf.png)|![NotoSerifDevanagari_500Medium](./500Medium/NotoSerifDevanagari_500Medium.ttf.png)|![NotoSerifDevanagari_600SemiBold](./600SemiBold/NotoSerifDevanagari_600SemiBold.ttf.png)||
|![NotoSerifDevanagari_700Bold](./700Bold/NotoSerifDevanagari_700Bold.ttf.png)|![NotoSerifDevanagari_800ExtraBold](./800ExtraBold/NotoSerifDevanagari_800ExtraBold.ttf.png)|![NotoSerifDevanagari_900Black](./900Black/NotoSerifDevanagari_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-devanagari` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Devanagari page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Devanagari) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Devanagari on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Devanagari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-devanagari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-devanagari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
