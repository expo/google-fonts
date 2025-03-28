# @expo-google-fonts/noto-sans-jp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-jp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-jp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-jp)

This package lets you use the [**Noto Sans JP**](https://fonts.google.com/specimen/Noto+Sans+JP) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans JP

![Noto Sans JP](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansJP_100Thin`
- `NotoSansJP_200ExtraLight`
- `NotoSansJP_300Light`
- `NotoSansJP_400Regular`
- `NotoSansJP_500Medium`
- `NotoSansJP_600SemiBold`
- `NotoSansJP_700Bold`
- `NotoSansJP_800ExtraBold`
- `NotoSansJP_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-jp expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-jp/useFonts';
import { NotoSansJP_100Thin } from '@expo-google-fonts/noto-sans-jp/100Thin';
import { NotoSansJP_200ExtraLight } from '@expo-google-fonts/noto-sans-jp/200ExtraLight';
import { NotoSansJP_300Light } from '@expo-google-fonts/noto-sans-jp/300Light';
import { NotoSansJP_400Regular } from '@expo-google-fonts/noto-sans-jp/400Regular';
import { NotoSansJP_500Medium } from '@expo-google-fonts/noto-sans-jp/500Medium';
import { NotoSansJP_600SemiBold } from '@expo-google-fonts/noto-sans-jp/600SemiBold';
import { NotoSansJP_700Bold } from '@expo-google-fonts/noto-sans-jp/700Bold';
import { NotoSansJP_800ExtraBold } from '@expo-google-fonts/noto-sans-jp/800ExtraBold';
import { NotoSansJP_900Black } from '@expo-google-fonts/noto-sans-jp/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansJP_100Thin, 
    NotoSansJP_200ExtraLight, 
    NotoSansJP_300Light, 
    NotoSansJP_400Regular, 
    NotoSansJP_500Medium, 
    NotoSansJP_600SemiBold, 
    NotoSansJP_700Bold, 
    NotoSansJP_800ExtraBold, 
    NotoSansJP_900Black
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
          fontFamily: "NotoSansJP_100Thin"
        }}>
          Noto Sans JP Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_200ExtraLight"
        }}>
          Noto Sans JP Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_300Light"
        }}>
          Noto Sans JP Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_400Regular"
        }}>
          Noto Sans JP Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_500Medium"
        }}>
          Noto Sans JP Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_600SemiBold"
        }}>
          Noto Sans JP Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_700Bold"
        }}>
          Noto Sans JP Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_800ExtraBold"
        }}>
          Noto Sans JP Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansJP_900Black"
        }}>
          Noto Sans JP Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansJP_100Thin](./100Thin/NotoSansJP_100Thin.ttf.png)|![NotoSansJP_200ExtraLight](./200ExtraLight/NotoSansJP_200ExtraLight.ttf.png)|![NotoSansJP_300Light](./300Light/NotoSansJP_300Light.ttf.png)||
|![NotoSansJP_400Regular](./400Regular/NotoSansJP_400Regular.ttf.png)|![NotoSansJP_500Medium](./500Medium/NotoSansJP_500Medium.ttf.png)|![NotoSansJP_600SemiBold](./600SemiBold/NotoSansJP_600SemiBold.ttf.png)||
|![NotoSansJP_700Bold](./700Bold/NotoSansJP_700Bold.ttf.png)|![NotoSansJP_800ExtraBold](./800ExtraBold/NotoSansJP_800ExtraBold.ttf.png)|![NotoSansJP_900Black](./900Black/NotoSansJP_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-jp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans JP page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+JP) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans JP on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+JP)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-jp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-jp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
