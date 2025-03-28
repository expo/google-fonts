# @expo-google-fonts/noto-sans-arabic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-arabic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-arabic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-arabic)

This package lets you use the [**Noto Sans Arabic**](https://fonts.google.com/specimen/Noto+Sans+Arabic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Arabic

![Noto Sans Arabic](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansArabic_100Thin`
- `NotoSansArabic_200ExtraLight`
- `NotoSansArabic_300Light`
- `NotoSansArabic_400Regular`
- `NotoSansArabic_500Medium`
- `NotoSansArabic_600SemiBold`
- `NotoSansArabic_700Bold`
- `NotoSansArabic_800ExtraBold`
- `NotoSansArabic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-arabic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-arabic/useFonts';
import { NotoSansArabic_100Thin } from '@expo-google-fonts/noto-sans-arabic/100Thin';
import { NotoSansArabic_200ExtraLight } from '@expo-google-fonts/noto-sans-arabic/200ExtraLight';
import { NotoSansArabic_300Light } from '@expo-google-fonts/noto-sans-arabic/300Light';
import { NotoSansArabic_400Regular } from '@expo-google-fonts/noto-sans-arabic/400Regular';
import { NotoSansArabic_500Medium } from '@expo-google-fonts/noto-sans-arabic/500Medium';
import { NotoSansArabic_600SemiBold } from '@expo-google-fonts/noto-sans-arabic/600SemiBold';
import { NotoSansArabic_700Bold } from '@expo-google-fonts/noto-sans-arabic/700Bold';
import { NotoSansArabic_800ExtraBold } from '@expo-google-fonts/noto-sans-arabic/800ExtraBold';
import { NotoSansArabic_900Black } from '@expo-google-fonts/noto-sans-arabic/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansArabic_100Thin, 
    NotoSansArabic_200ExtraLight, 
    NotoSansArabic_300Light, 
    NotoSansArabic_400Regular, 
    NotoSansArabic_500Medium, 
    NotoSansArabic_600SemiBold, 
    NotoSansArabic_700Bold, 
    NotoSansArabic_800ExtraBold, 
    NotoSansArabic_900Black
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
          fontFamily: "NotoSansArabic_100Thin"
        }}>
          Noto Sans Arabic Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_200ExtraLight"
        }}>
          Noto Sans Arabic Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_300Light"
        }}>
          Noto Sans Arabic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_400Regular"
        }}>
          Noto Sans Arabic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_500Medium"
        }}>
          Noto Sans Arabic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_600SemiBold"
        }}>
          Noto Sans Arabic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_700Bold"
        }}>
          Noto Sans Arabic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_800ExtraBold"
        }}>
          Noto Sans Arabic Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansArabic_900Black"
        }}>
          Noto Sans Arabic Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansArabic_100Thin](./100Thin/NotoSansArabic_100Thin.ttf.png)|![NotoSansArabic_200ExtraLight](./200ExtraLight/NotoSansArabic_200ExtraLight.ttf.png)|![NotoSansArabic_300Light](./300Light/NotoSansArabic_300Light.ttf.png)||
|![NotoSansArabic_400Regular](./400Regular/NotoSansArabic_400Regular.ttf.png)|![NotoSansArabic_500Medium](./500Medium/NotoSansArabic_500Medium.ttf.png)|![NotoSansArabic_600SemiBold](./600SemiBold/NotoSansArabic_600SemiBold.ttf.png)||
|![NotoSansArabic_700Bold](./700Bold/NotoSansArabic_700Bold.ttf.png)|![NotoSansArabic_800ExtraBold](./800ExtraBold/NotoSansArabic_800ExtraBold.ttf.png)|![NotoSansArabic_900Black](./900Black/NotoSansArabic_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-arabic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Arabic page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Arabic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Arabic on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Arabic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-arabic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-arabic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
