# @expo-google-fonts/noto-sans-tamil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-tamil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-tamil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-tamil)

This package lets you use the [**Noto Sans Tamil**](https://fonts.google.com/specimen/Noto+Sans+Tamil) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Tamil

![Noto Sans Tamil](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansTamil_100Thin`
- `NotoSansTamil_200ExtraLight`
- `NotoSansTamil_300Light`
- `NotoSansTamil_400Regular`
- `NotoSansTamil_500Medium`
- `NotoSansTamil_600SemiBold`
- `NotoSansTamil_700Bold`
- `NotoSansTamil_800ExtraBold`
- `NotoSansTamil_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-tamil expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-tamil/useFonts';
import { NotoSansTamil_100Thin } from '@expo-google-fonts/noto-sans-tamil/100Thin';
import { NotoSansTamil_200ExtraLight } from '@expo-google-fonts/noto-sans-tamil/200ExtraLight';
import { NotoSansTamil_300Light } from '@expo-google-fonts/noto-sans-tamil/300Light';
import { NotoSansTamil_400Regular } from '@expo-google-fonts/noto-sans-tamil/400Regular';
import { NotoSansTamil_500Medium } from '@expo-google-fonts/noto-sans-tamil/500Medium';
import { NotoSansTamil_600SemiBold } from '@expo-google-fonts/noto-sans-tamil/600SemiBold';
import { NotoSansTamil_700Bold } from '@expo-google-fonts/noto-sans-tamil/700Bold';
import { NotoSansTamil_800ExtraBold } from '@expo-google-fonts/noto-sans-tamil/800ExtraBold';
import { NotoSansTamil_900Black } from '@expo-google-fonts/noto-sans-tamil/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansTamil_100Thin, 
    NotoSansTamil_200ExtraLight, 
    NotoSansTamil_300Light, 
    NotoSansTamil_400Regular, 
    NotoSansTamil_500Medium, 
    NotoSansTamil_600SemiBold, 
    NotoSansTamil_700Bold, 
    NotoSansTamil_800ExtraBold, 
    NotoSansTamil_900Black
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
          fontFamily: "NotoSansTamil_100Thin"
        }}>
          Noto Sans Tamil Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_200ExtraLight"
        }}>
          Noto Sans Tamil Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_300Light"
        }}>
          Noto Sans Tamil Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_400Regular"
        }}>
          Noto Sans Tamil Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_500Medium"
        }}>
          Noto Sans Tamil Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_600SemiBold"
        }}>
          Noto Sans Tamil Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_700Bold"
        }}>
          Noto Sans Tamil Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_800ExtraBold"
        }}>
          Noto Sans Tamil Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTamil_900Black"
        }}>
          Noto Sans Tamil Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansTamil_100Thin](./100Thin/NotoSansTamil_100Thin.ttf.png)|![NotoSansTamil_200ExtraLight](./200ExtraLight/NotoSansTamil_200ExtraLight.ttf.png)|![NotoSansTamil_300Light](./300Light/NotoSansTamil_300Light.ttf.png)||
|![NotoSansTamil_400Regular](./400Regular/NotoSansTamil_400Regular.ttf.png)|![NotoSansTamil_500Medium](./500Medium/NotoSansTamil_500Medium.ttf.png)|![NotoSansTamil_600SemiBold](./600SemiBold/NotoSansTamil_600SemiBold.ttf.png)||
|![NotoSansTamil_700Bold](./700Bold/NotoSansTamil_700Bold.ttf.png)|![NotoSansTamil_800ExtraBold](./800ExtraBold/NotoSansTamil_800ExtraBold.ttf.png)|![NotoSansTamil_900Black](./900Black/NotoSansTamil_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-tamil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Tamil page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Tamil) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Tamil on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Tamil)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-tamil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-tamil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
