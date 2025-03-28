# @expo-google-fonts/noto-sans-devanagari

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-devanagari)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-devanagari)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-devanagari)

This package lets you use the [**Noto Sans Devanagari**](https://fonts.google.com/specimen/Noto+Sans+Devanagari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Devanagari

![Noto Sans Devanagari](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansDevanagari_100Thin`
- `NotoSansDevanagari_200ExtraLight`
- `NotoSansDevanagari_300Light`
- `NotoSansDevanagari_400Regular`
- `NotoSansDevanagari_500Medium`
- `NotoSansDevanagari_600SemiBold`
- `NotoSansDevanagari_700Bold`
- `NotoSansDevanagari_800ExtraBold`
- `NotoSansDevanagari_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-devanagari expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-devanagari/useFonts';
import { NotoSansDevanagari_100Thin } from '@expo-google-fonts/noto-sans-devanagari/100Thin';
import { NotoSansDevanagari_200ExtraLight } from '@expo-google-fonts/noto-sans-devanagari/200ExtraLight';
import { NotoSansDevanagari_300Light } from '@expo-google-fonts/noto-sans-devanagari/300Light';
import { NotoSansDevanagari_400Regular } from '@expo-google-fonts/noto-sans-devanagari/400Regular';
import { NotoSansDevanagari_500Medium } from '@expo-google-fonts/noto-sans-devanagari/500Medium';
import { NotoSansDevanagari_600SemiBold } from '@expo-google-fonts/noto-sans-devanagari/600SemiBold';
import { NotoSansDevanagari_700Bold } from '@expo-google-fonts/noto-sans-devanagari/700Bold';
import { NotoSansDevanagari_800ExtraBold } from '@expo-google-fonts/noto-sans-devanagari/800ExtraBold';
import { NotoSansDevanagari_900Black } from '@expo-google-fonts/noto-sans-devanagari/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansDevanagari_100Thin, 
    NotoSansDevanagari_200ExtraLight, 
    NotoSansDevanagari_300Light, 
    NotoSansDevanagari_400Regular, 
    NotoSansDevanagari_500Medium, 
    NotoSansDevanagari_600SemiBold, 
    NotoSansDevanagari_700Bold, 
    NotoSansDevanagari_800ExtraBold, 
    NotoSansDevanagari_900Black
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
          fontFamily: "NotoSansDevanagari_100Thin"
        }}>
          Noto Sans Devanagari Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_200ExtraLight"
        }}>
          Noto Sans Devanagari Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_300Light"
        }}>
          Noto Sans Devanagari Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_400Regular"
        }}>
          Noto Sans Devanagari Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_500Medium"
        }}>
          Noto Sans Devanagari Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_600SemiBold"
        }}>
          Noto Sans Devanagari Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_700Bold"
        }}>
          Noto Sans Devanagari Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_800ExtraBold"
        }}>
          Noto Sans Devanagari Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDevanagari_900Black"
        }}>
          Noto Sans Devanagari Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansDevanagari_100Thin](./100Thin/NotoSansDevanagari_100Thin.ttf.png)|![NotoSansDevanagari_200ExtraLight](./200ExtraLight/NotoSansDevanagari_200ExtraLight.ttf.png)|![NotoSansDevanagari_300Light](./300Light/NotoSansDevanagari_300Light.ttf.png)||
|![NotoSansDevanagari_400Regular](./400Regular/NotoSansDevanagari_400Regular.ttf.png)|![NotoSansDevanagari_500Medium](./500Medium/NotoSansDevanagari_500Medium.ttf.png)|![NotoSansDevanagari_600SemiBold](./600SemiBold/NotoSansDevanagari_600SemiBold.ttf.png)||
|![NotoSansDevanagari_700Bold](./700Bold/NotoSansDevanagari_700Bold.ttf.png)|![NotoSansDevanagari_800ExtraBold](./800ExtraBold/NotoSansDevanagari_800ExtraBold.ttf.png)|![NotoSansDevanagari_900Black](./900Black/NotoSansDevanagari_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-devanagari` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Devanagari page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Devanagari) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Devanagari on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Devanagari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-devanagari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-devanagari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
