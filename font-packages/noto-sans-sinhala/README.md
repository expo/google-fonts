# @expo-google-fonts/noto-sans-sinhala

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-sinhala)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-sinhala)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-sinhala)

This package lets you use the [**Noto Sans Sinhala**](https://fonts.google.com/specimen/Noto+Sans+Sinhala) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Sinhala

![Noto Sans Sinhala](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansSinhala_100Thin`
- `NotoSansSinhala_200ExtraLight`
- `NotoSansSinhala_300Light`
- `NotoSansSinhala_400Regular`
- `NotoSansSinhala_500Medium`
- `NotoSansSinhala_600SemiBold`
- `NotoSansSinhala_700Bold`
- `NotoSansSinhala_800ExtraBold`
- `NotoSansSinhala_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-sinhala expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-sinhala/useFonts';
import { NotoSansSinhala_100Thin } from '@expo-google-fonts/noto-sans-sinhala/100Thin';
import { NotoSansSinhala_200ExtraLight } from '@expo-google-fonts/noto-sans-sinhala/200ExtraLight';
import { NotoSansSinhala_300Light } from '@expo-google-fonts/noto-sans-sinhala/300Light';
import { NotoSansSinhala_400Regular } from '@expo-google-fonts/noto-sans-sinhala/400Regular';
import { NotoSansSinhala_500Medium } from '@expo-google-fonts/noto-sans-sinhala/500Medium';
import { NotoSansSinhala_600SemiBold } from '@expo-google-fonts/noto-sans-sinhala/600SemiBold';
import { NotoSansSinhala_700Bold } from '@expo-google-fonts/noto-sans-sinhala/700Bold';
import { NotoSansSinhala_800ExtraBold } from '@expo-google-fonts/noto-sans-sinhala/800ExtraBold';
import { NotoSansSinhala_900Black } from '@expo-google-fonts/noto-sans-sinhala/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansSinhala_100Thin, 
    NotoSansSinhala_200ExtraLight, 
    NotoSansSinhala_300Light, 
    NotoSansSinhala_400Regular, 
    NotoSansSinhala_500Medium, 
    NotoSansSinhala_600SemiBold, 
    NotoSansSinhala_700Bold, 
    NotoSansSinhala_800ExtraBold, 
    NotoSansSinhala_900Black
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
          fontFamily: "NotoSansSinhala_100Thin"
        }}>
          Noto Sans Sinhala Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_200ExtraLight"
        }}>
          Noto Sans Sinhala Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_300Light"
        }}>
          Noto Sans Sinhala Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_400Regular"
        }}>
          Noto Sans Sinhala Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_500Medium"
        }}>
          Noto Sans Sinhala Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_600SemiBold"
        }}>
          Noto Sans Sinhala Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_700Bold"
        }}>
          Noto Sans Sinhala Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_800ExtraBold"
        }}>
          Noto Sans Sinhala Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansSinhala_900Black"
        }}>
          Noto Sans Sinhala Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansSinhala_100Thin](./100Thin/NotoSansSinhala_100Thin.ttf.png)|![NotoSansSinhala_200ExtraLight](./200ExtraLight/NotoSansSinhala_200ExtraLight.ttf.png)|![NotoSansSinhala_300Light](./300Light/NotoSansSinhala_300Light.ttf.png)||
|![NotoSansSinhala_400Regular](./400Regular/NotoSansSinhala_400Regular.ttf.png)|![NotoSansSinhala_500Medium](./500Medium/NotoSansSinhala_500Medium.ttf.png)|![NotoSansSinhala_600SemiBold](./600SemiBold/NotoSansSinhala_600SemiBold.ttf.png)||
|![NotoSansSinhala_700Bold](./700Bold/NotoSansSinhala_700Bold.ttf.png)|![NotoSansSinhala_800ExtraBold](./800ExtraBold/NotoSansSinhala_800ExtraBold.ttf.png)|![NotoSansSinhala_900Black](./900Black/NotoSansSinhala_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-sinhala` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Sinhala page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Sinhala) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Sinhala on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Sinhala)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-sinhala)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-sinhala)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
