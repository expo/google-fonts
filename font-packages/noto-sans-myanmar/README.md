# @expo-google-fonts/noto-sans-myanmar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-myanmar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-myanmar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-myanmar)

This package lets you use the [**Noto Sans Myanmar**](https://fonts.google.com/specimen/Noto+Sans+Myanmar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Myanmar

![Noto Sans Myanmar](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansMyanmar_100Thin`
- `NotoSansMyanmar_200ExtraLight`
- `NotoSansMyanmar_300Light`
- `NotoSansMyanmar_400Regular`
- `NotoSansMyanmar_500Medium`
- `NotoSansMyanmar_600SemiBold`
- `NotoSansMyanmar_700Bold`
- `NotoSansMyanmar_800ExtraBold`
- `NotoSansMyanmar_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-myanmar expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-myanmar/useFonts';
import { NotoSansMyanmar_100Thin } from '@expo-google-fonts/noto-sans-myanmar/100Thin';
import { NotoSansMyanmar_200ExtraLight } from '@expo-google-fonts/noto-sans-myanmar/200ExtraLight';
import { NotoSansMyanmar_300Light } from '@expo-google-fonts/noto-sans-myanmar/300Light';
import { NotoSansMyanmar_400Regular } from '@expo-google-fonts/noto-sans-myanmar/400Regular';
import { NotoSansMyanmar_500Medium } from '@expo-google-fonts/noto-sans-myanmar/500Medium';
import { NotoSansMyanmar_600SemiBold } from '@expo-google-fonts/noto-sans-myanmar/600SemiBold';
import { NotoSansMyanmar_700Bold } from '@expo-google-fonts/noto-sans-myanmar/700Bold';
import { NotoSansMyanmar_800ExtraBold } from '@expo-google-fonts/noto-sans-myanmar/800ExtraBold';
import { NotoSansMyanmar_900Black } from '@expo-google-fonts/noto-sans-myanmar/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansMyanmar_100Thin, 
    NotoSansMyanmar_200ExtraLight, 
    NotoSansMyanmar_300Light, 
    NotoSansMyanmar_400Regular, 
    NotoSansMyanmar_500Medium, 
    NotoSansMyanmar_600SemiBold, 
    NotoSansMyanmar_700Bold, 
    NotoSansMyanmar_800ExtraBold, 
    NotoSansMyanmar_900Black
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
          fontFamily: "NotoSansMyanmar_100Thin"
        }}>
          Noto Sans Myanmar Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_200ExtraLight"
        }}>
          Noto Sans Myanmar Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_300Light"
        }}>
          Noto Sans Myanmar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_400Regular"
        }}>
          Noto Sans Myanmar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_500Medium"
        }}>
          Noto Sans Myanmar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_600SemiBold"
        }}>
          Noto Sans Myanmar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_700Bold"
        }}>
          Noto Sans Myanmar Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_800ExtraBold"
        }}>
          Noto Sans Myanmar Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_900Black"
        }}>
          Noto Sans Myanmar Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansMyanmar_100Thin](./100Thin/NotoSansMyanmar_100Thin.ttf.png)|![NotoSansMyanmar_200ExtraLight](./200ExtraLight/NotoSansMyanmar_200ExtraLight.ttf.png)|![NotoSansMyanmar_300Light](./300Light/NotoSansMyanmar_300Light.ttf.png)||
|![NotoSansMyanmar_400Regular](./400Regular/NotoSansMyanmar_400Regular.ttf.png)|![NotoSansMyanmar_500Medium](./500Medium/NotoSansMyanmar_500Medium.ttf.png)|![NotoSansMyanmar_600SemiBold](./600SemiBold/NotoSansMyanmar_600SemiBold.ttf.png)||
|![NotoSansMyanmar_700Bold](./700Bold/NotoSansMyanmar_700Bold.ttf.png)|![NotoSansMyanmar_800ExtraBold](./800ExtraBold/NotoSansMyanmar_800ExtraBold.ttf.png)|![NotoSansMyanmar_900Black](./900Black/NotoSansMyanmar_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-myanmar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Myanmar page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Myanmar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Myanmar on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Myanmar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-myanmar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-myanmar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
