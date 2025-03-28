# @expo-google-fonts/noto-sans-telugu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-telugu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-telugu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-telugu)

This package lets you use the [**Noto Sans Telugu**](https://fonts.google.com/specimen/Noto+Sans+Telugu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Telugu

![Noto Sans Telugu](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansTelugu_100Thin`
- `NotoSansTelugu_200ExtraLight`
- `NotoSansTelugu_300Light`
- `NotoSansTelugu_400Regular`
- `NotoSansTelugu_500Medium`
- `NotoSansTelugu_600SemiBold`
- `NotoSansTelugu_700Bold`
- `NotoSansTelugu_800ExtraBold`
- `NotoSansTelugu_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-telugu expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-telugu/useFonts';
import { NotoSansTelugu_100Thin } from '@expo-google-fonts/noto-sans-telugu/100Thin';
import { NotoSansTelugu_200ExtraLight } from '@expo-google-fonts/noto-sans-telugu/200ExtraLight';
import { NotoSansTelugu_300Light } from '@expo-google-fonts/noto-sans-telugu/300Light';
import { NotoSansTelugu_400Regular } from '@expo-google-fonts/noto-sans-telugu/400Regular';
import { NotoSansTelugu_500Medium } from '@expo-google-fonts/noto-sans-telugu/500Medium';
import { NotoSansTelugu_600SemiBold } from '@expo-google-fonts/noto-sans-telugu/600SemiBold';
import { NotoSansTelugu_700Bold } from '@expo-google-fonts/noto-sans-telugu/700Bold';
import { NotoSansTelugu_800ExtraBold } from '@expo-google-fonts/noto-sans-telugu/800ExtraBold';
import { NotoSansTelugu_900Black } from '@expo-google-fonts/noto-sans-telugu/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansTelugu_100Thin, 
    NotoSansTelugu_200ExtraLight, 
    NotoSansTelugu_300Light, 
    NotoSansTelugu_400Regular, 
    NotoSansTelugu_500Medium, 
    NotoSansTelugu_600SemiBold, 
    NotoSansTelugu_700Bold, 
    NotoSansTelugu_800ExtraBold, 
    NotoSansTelugu_900Black
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
          fontFamily: "NotoSansTelugu_100Thin"
        }}>
          Noto Sans Telugu Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_200ExtraLight"
        }}>
          Noto Sans Telugu Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_300Light"
        }}>
          Noto Sans Telugu Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_400Regular"
        }}>
          Noto Sans Telugu Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_500Medium"
        }}>
          Noto Sans Telugu Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_600SemiBold"
        }}>
          Noto Sans Telugu Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_700Bold"
        }}>
          Noto Sans Telugu Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_800ExtraBold"
        }}>
          Noto Sans Telugu Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansTelugu_900Black"
        }}>
          Noto Sans Telugu Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansTelugu_100Thin](./100Thin/NotoSansTelugu_100Thin.ttf.png)|![NotoSansTelugu_200ExtraLight](./200ExtraLight/NotoSansTelugu_200ExtraLight.ttf.png)|![NotoSansTelugu_300Light](./300Light/NotoSansTelugu_300Light.ttf.png)||
|![NotoSansTelugu_400Regular](./400Regular/NotoSansTelugu_400Regular.ttf.png)|![NotoSansTelugu_500Medium](./500Medium/NotoSansTelugu_500Medium.ttf.png)|![NotoSansTelugu_600SemiBold](./600SemiBold/NotoSansTelugu_600SemiBold.ttf.png)||
|![NotoSansTelugu_700Bold](./700Bold/NotoSansTelugu_700Bold.ttf.png)|![NotoSansTelugu_800ExtraBold](./800ExtraBold/NotoSansTelugu_800ExtraBold.ttf.png)|![NotoSansTelugu_900Black](./900Black/NotoSansTelugu_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-telugu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Telugu page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Telugu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Telugu on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Telugu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-telugu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-telugu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
