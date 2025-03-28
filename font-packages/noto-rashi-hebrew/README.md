# @expo-google-fonts/noto-rashi-hebrew

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-rashi-hebrew)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-rashi-hebrew)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-rashi-hebrew)

This package lets you use the [**Noto Rashi Hebrew**](https://fonts.google.com/specimen/Noto+Rashi+Hebrew) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Rashi Hebrew

![Noto Rashi Hebrew](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoRashiHebrew_100Thin`
- `NotoRashiHebrew_200ExtraLight`
- `NotoRashiHebrew_300Light`
- `NotoRashiHebrew_400Regular`
- `NotoRashiHebrew_500Medium`
- `NotoRashiHebrew_600SemiBold`
- `NotoRashiHebrew_700Bold`
- `NotoRashiHebrew_800ExtraBold`
- `NotoRashiHebrew_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-rashi-hebrew expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-rashi-hebrew/useFonts';
import { NotoRashiHebrew_100Thin } from '@expo-google-fonts/noto-rashi-hebrew/100Thin';
import { NotoRashiHebrew_200ExtraLight } from '@expo-google-fonts/noto-rashi-hebrew/200ExtraLight';
import { NotoRashiHebrew_300Light } from '@expo-google-fonts/noto-rashi-hebrew/300Light';
import { NotoRashiHebrew_400Regular } from '@expo-google-fonts/noto-rashi-hebrew/400Regular';
import { NotoRashiHebrew_500Medium } from '@expo-google-fonts/noto-rashi-hebrew/500Medium';
import { NotoRashiHebrew_600SemiBold } from '@expo-google-fonts/noto-rashi-hebrew/600SemiBold';
import { NotoRashiHebrew_700Bold } from '@expo-google-fonts/noto-rashi-hebrew/700Bold';
import { NotoRashiHebrew_800ExtraBold } from '@expo-google-fonts/noto-rashi-hebrew/800ExtraBold';
import { NotoRashiHebrew_900Black } from '@expo-google-fonts/noto-rashi-hebrew/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoRashiHebrew_100Thin, 
    NotoRashiHebrew_200ExtraLight, 
    NotoRashiHebrew_300Light, 
    NotoRashiHebrew_400Regular, 
    NotoRashiHebrew_500Medium, 
    NotoRashiHebrew_600SemiBold, 
    NotoRashiHebrew_700Bold, 
    NotoRashiHebrew_800ExtraBold, 
    NotoRashiHebrew_900Black
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
          fontFamily: "NotoRashiHebrew_100Thin"
        }}>
          Noto Rashi Hebrew Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_200ExtraLight"
        }}>
          Noto Rashi Hebrew Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_300Light"
        }}>
          Noto Rashi Hebrew Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_400Regular"
        }}>
          Noto Rashi Hebrew Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_500Medium"
        }}>
          Noto Rashi Hebrew Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_600SemiBold"
        }}>
          Noto Rashi Hebrew Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_700Bold"
        }}>
          Noto Rashi Hebrew Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_800ExtraBold"
        }}>
          Noto Rashi Hebrew Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoRashiHebrew_900Black"
        }}>
          Noto Rashi Hebrew Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoRashiHebrew_100Thin](./100Thin/NotoRashiHebrew_100Thin.ttf.png)|![NotoRashiHebrew_200ExtraLight](./200ExtraLight/NotoRashiHebrew_200ExtraLight.ttf.png)|![NotoRashiHebrew_300Light](./300Light/NotoRashiHebrew_300Light.ttf.png)||
|![NotoRashiHebrew_400Regular](./400Regular/NotoRashiHebrew_400Regular.ttf.png)|![NotoRashiHebrew_500Medium](./500Medium/NotoRashiHebrew_500Medium.ttf.png)|![NotoRashiHebrew_600SemiBold](./600SemiBold/NotoRashiHebrew_600SemiBold.ttf.png)||
|![NotoRashiHebrew_700Bold](./700Bold/NotoRashiHebrew_700Bold.ttf.png)|![NotoRashiHebrew_800ExtraBold](./800ExtraBold/NotoRashiHebrew_800ExtraBold.ttf.png)|![NotoRashiHebrew_900Black](./900Black/NotoRashiHebrew_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-rashi-hebrew` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Rashi Hebrew page on Google Fonts](https://fonts.google.com/specimen/Noto+Rashi+Hebrew) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Rashi Hebrew on Google Fonts](https://fonts.google.com/specimen/Noto+Rashi+Hebrew)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-rashi-hebrew)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-rashi-hebrew)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
