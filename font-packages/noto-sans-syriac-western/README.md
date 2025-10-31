# @expo-google-fonts/noto-sans-syriac-western

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-syriac-western)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-syriac-western)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-syriac-western)

This package lets you use the [**Noto Sans Syriac Western**](https://fonts.google.com/specimen/Noto+Sans+Syriac+Western) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Syriac Western

![Noto Sans Syriac Western](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansSyriacWestern_100Thin`
- `NotoSansSyriacWestern_200ExtraLight`
- `NotoSansSyriacWestern_300Light`
- `NotoSansSyriacWestern_400Regular`
- `NotoSansSyriacWestern_500Medium`
- `NotoSansSyriacWestern_600SemiBold`
- `NotoSansSyriacWestern_700Bold`
- `NotoSansSyriacWestern_800ExtraBold`
- `NotoSansSyriacWestern_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-syriac-western expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-syriac-western/useFonts';
import { NotoSansSyriacWestern_100Thin } from '@expo-google-fonts/noto-sans-syriac-western/100Thin';
import { NotoSansSyriacWestern_200ExtraLight } from '@expo-google-fonts/noto-sans-syriac-western/200ExtraLight';
import { NotoSansSyriacWestern_300Light } from '@expo-google-fonts/noto-sans-syriac-western/300Light';
import { NotoSansSyriacWestern_400Regular } from '@expo-google-fonts/noto-sans-syriac-western/400Regular';
import { NotoSansSyriacWestern_500Medium } from '@expo-google-fonts/noto-sans-syriac-western/500Medium';
import { NotoSansSyriacWestern_600SemiBold } from '@expo-google-fonts/noto-sans-syriac-western/600SemiBold';
import { NotoSansSyriacWestern_700Bold } from '@expo-google-fonts/noto-sans-syriac-western/700Bold';
import { NotoSansSyriacWestern_800ExtraBold } from '@expo-google-fonts/noto-sans-syriac-western/800ExtraBold';
import { NotoSansSyriacWestern_900Black } from '@expo-google-fonts/noto-sans-syriac-western/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansSyriacWestern_100Thin, 
    NotoSansSyriacWestern_200ExtraLight, 
    NotoSansSyriacWestern_300Light, 
    NotoSansSyriacWestern_400Regular, 
    NotoSansSyriacWestern_500Medium, 
    NotoSansSyriacWestern_600SemiBold, 
    NotoSansSyriacWestern_700Bold, 
    NotoSansSyriacWestern_800ExtraBold, 
    NotoSansSyriacWestern_900Black
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
          fontFamily: "NotoSansSyriacWestern_100Thin"
        }}>
          Noto Sans Syriac Western Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_200ExtraLight"
        }}>
          Noto Sans Syriac Western Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_300Light"
        }}>
          Noto Sans Syriac Western Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_400Regular"
        }}>
          Noto Sans Syriac Western Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_500Medium"
        }}>
          Noto Sans Syriac Western Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_600SemiBold"
        }}>
          Noto Sans Syriac Western Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_700Bold"
        }}>
          Noto Sans Syriac Western Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_800ExtraBold"
        }}>
          Noto Sans Syriac Western Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSyriacWestern_900Black"
        }}>
          Noto Sans Syriac Western Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansSyriacWestern_100Thin](./100Thin/NotoSansSyriacWestern_100Thin.ttf.png)|![NotoSansSyriacWestern_200ExtraLight](./200ExtraLight/NotoSansSyriacWestern_200ExtraLight.ttf.png)|![NotoSansSyriacWestern_300Light](./300Light/NotoSansSyriacWestern_300Light.ttf.png)||
|![NotoSansSyriacWestern_400Regular](./400Regular/NotoSansSyriacWestern_400Regular.ttf.png)|![NotoSansSyriacWestern_500Medium](./500Medium/NotoSansSyriacWestern_500Medium.ttf.png)|![NotoSansSyriacWestern_600SemiBold](./600SemiBold/NotoSansSyriacWestern_600SemiBold.ttf.png)||
|![NotoSansSyriacWestern_700Bold](./700Bold/NotoSansSyriacWestern_700Bold.ttf.png)|![NotoSansSyriacWestern_800ExtraBold](./800ExtraBold/NotoSansSyriacWestern_800ExtraBold.ttf.png)|![NotoSansSyriacWestern_900Black](./900Black/NotoSansSyriacWestern_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-syriac-western` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Syriac Western page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac+Western) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Syriac Western on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac+Western)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-syriac-western)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-syriac-western)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
