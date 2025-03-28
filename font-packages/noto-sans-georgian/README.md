# @expo-google-fonts/noto-sans-georgian

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-georgian)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-georgian)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-georgian)

This package lets you use the [**Noto Sans Georgian**](https://fonts.google.com/specimen/Noto+Sans+Georgian) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Georgian

![Noto Sans Georgian](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansGeorgian_100Thin`
- `NotoSansGeorgian_200ExtraLight`
- `NotoSansGeorgian_300Light`
- `NotoSansGeorgian_400Regular`
- `NotoSansGeorgian_500Medium`
- `NotoSansGeorgian_600SemiBold`
- `NotoSansGeorgian_700Bold`
- `NotoSansGeorgian_800ExtraBold`
- `NotoSansGeorgian_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-georgian expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-georgian/useFonts';
import { NotoSansGeorgian_100Thin } from '@expo-google-fonts/noto-sans-georgian/100Thin';
import { NotoSansGeorgian_200ExtraLight } from '@expo-google-fonts/noto-sans-georgian/200ExtraLight';
import { NotoSansGeorgian_300Light } from '@expo-google-fonts/noto-sans-georgian/300Light';
import { NotoSansGeorgian_400Regular } from '@expo-google-fonts/noto-sans-georgian/400Regular';
import { NotoSansGeorgian_500Medium } from '@expo-google-fonts/noto-sans-georgian/500Medium';
import { NotoSansGeorgian_600SemiBold } from '@expo-google-fonts/noto-sans-georgian/600SemiBold';
import { NotoSansGeorgian_700Bold } from '@expo-google-fonts/noto-sans-georgian/700Bold';
import { NotoSansGeorgian_800ExtraBold } from '@expo-google-fonts/noto-sans-georgian/800ExtraBold';
import { NotoSansGeorgian_900Black } from '@expo-google-fonts/noto-sans-georgian/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansGeorgian_100Thin, 
    NotoSansGeorgian_200ExtraLight, 
    NotoSansGeorgian_300Light, 
    NotoSansGeorgian_400Regular, 
    NotoSansGeorgian_500Medium, 
    NotoSansGeorgian_600SemiBold, 
    NotoSansGeorgian_700Bold, 
    NotoSansGeorgian_800ExtraBold, 
    NotoSansGeorgian_900Black
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
          fontFamily: "NotoSansGeorgian_100Thin"
        }}>
          Noto Sans Georgian Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_200ExtraLight"
        }}>
          Noto Sans Georgian Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_300Light"
        }}>
          Noto Sans Georgian Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_400Regular"
        }}>
          Noto Sans Georgian Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_500Medium"
        }}>
          Noto Sans Georgian Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_600SemiBold"
        }}>
          Noto Sans Georgian Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_700Bold"
        }}>
          Noto Sans Georgian Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_800ExtraBold"
        }}>
          Noto Sans Georgian Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGeorgian_900Black"
        }}>
          Noto Sans Georgian Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansGeorgian_100Thin](./100Thin/NotoSansGeorgian_100Thin.ttf.png)|![NotoSansGeorgian_200ExtraLight](./200ExtraLight/NotoSansGeorgian_200ExtraLight.ttf.png)|![NotoSansGeorgian_300Light](./300Light/NotoSansGeorgian_300Light.ttf.png)||
|![NotoSansGeorgian_400Regular](./400Regular/NotoSansGeorgian_400Regular.ttf.png)|![NotoSansGeorgian_500Medium](./500Medium/NotoSansGeorgian_500Medium.ttf.png)|![NotoSansGeorgian_600SemiBold](./600SemiBold/NotoSansGeorgian_600SemiBold.ttf.png)||
|![NotoSansGeorgian_700Bold](./700Bold/NotoSansGeorgian_700Bold.ttf.png)|![NotoSansGeorgian_800ExtraBold](./800ExtraBold/NotoSansGeorgian_800ExtraBold.ttf.png)|![NotoSansGeorgian_900Black](./900Black/NotoSansGeorgian_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-georgian` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Georgian page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Georgian) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Georgian on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Georgian)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-georgian)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-georgian)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
