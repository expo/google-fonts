# @expo-google-fonts/noto-sans-oriya

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-oriya)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-oriya)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-oriya)

This package lets you use the [**Noto Sans Oriya**](https://fonts.google.com/specimen/Noto+Sans+Oriya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Oriya

![Noto Sans Oriya](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansOriya_100Thin`
- `NotoSansOriya_200ExtraLight`
- `NotoSansOriya_300Light`
- `NotoSansOriya_400Regular`
- `NotoSansOriya_500Medium`
- `NotoSansOriya_600SemiBold`
- `NotoSansOriya_700Bold`
- `NotoSansOriya_800ExtraBold`
- `NotoSansOriya_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-oriya expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-oriya/useFonts';
import { NotoSansOriya_100Thin } from '@expo-google-fonts/noto-sans-oriya/100Thin';
import { NotoSansOriya_200ExtraLight } from '@expo-google-fonts/noto-sans-oriya/200ExtraLight';
import { NotoSansOriya_300Light } from '@expo-google-fonts/noto-sans-oriya/300Light';
import { NotoSansOriya_400Regular } from '@expo-google-fonts/noto-sans-oriya/400Regular';
import { NotoSansOriya_500Medium } from '@expo-google-fonts/noto-sans-oriya/500Medium';
import { NotoSansOriya_600SemiBold } from '@expo-google-fonts/noto-sans-oriya/600SemiBold';
import { NotoSansOriya_700Bold } from '@expo-google-fonts/noto-sans-oriya/700Bold';
import { NotoSansOriya_800ExtraBold } from '@expo-google-fonts/noto-sans-oriya/800ExtraBold';
import { NotoSansOriya_900Black } from '@expo-google-fonts/noto-sans-oriya/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansOriya_100Thin, 
    NotoSansOriya_200ExtraLight, 
    NotoSansOriya_300Light, 
    NotoSansOriya_400Regular, 
    NotoSansOriya_500Medium, 
    NotoSansOriya_600SemiBold, 
    NotoSansOriya_700Bold, 
    NotoSansOriya_800ExtraBold, 
    NotoSansOriya_900Black
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
          fontFamily: "NotoSansOriya_100Thin"
        }}>
          Noto Sans Oriya Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_200ExtraLight"
        }}>
          Noto Sans Oriya Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_300Light"
        }}>
          Noto Sans Oriya Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_400Regular"
        }}>
          Noto Sans Oriya Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_500Medium"
        }}>
          Noto Sans Oriya Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_600SemiBold"
        }}>
          Noto Sans Oriya Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_700Bold"
        }}>
          Noto Sans Oriya Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_800ExtraBold"
        }}>
          Noto Sans Oriya Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOriya_900Black"
        }}>
          Noto Sans Oriya Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansOriya_100Thin](./100Thin/NotoSansOriya_100Thin.ttf.png)|![NotoSansOriya_200ExtraLight](./200ExtraLight/NotoSansOriya_200ExtraLight.ttf.png)|![NotoSansOriya_300Light](./300Light/NotoSansOriya_300Light.ttf.png)||
|![NotoSansOriya_400Regular](./400Regular/NotoSansOriya_400Regular.ttf.png)|![NotoSansOriya_500Medium](./500Medium/NotoSansOriya_500Medium.ttf.png)|![NotoSansOriya_600SemiBold](./600SemiBold/NotoSansOriya_600SemiBold.ttf.png)||
|![NotoSansOriya_700Bold](./700Bold/NotoSansOriya_700Bold.ttf.png)|![NotoSansOriya_800ExtraBold](./800ExtraBold/NotoSansOriya_800ExtraBold.ttf.png)|![NotoSansOriya_900Black](./900Black/NotoSansOriya_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-oriya` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Oriya page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Oriya) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Oriya on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Oriya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-oriya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-oriya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
