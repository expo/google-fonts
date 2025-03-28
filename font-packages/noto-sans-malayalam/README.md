# @expo-google-fonts/noto-sans-malayalam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-malayalam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-malayalam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-malayalam)

This package lets you use the [**Noto Sans Malayalam**](https://fonts.google.com/specimen/Noto+Sans+Malayalam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Malayalam

![Noto Sans Malayalam](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansMalayalam_100Thin`
- `NotoSansMalayalam_200ExtraLight`
- `NotoSansMalayalam_300Light`
- `NotoSansMalayalam_400Regular`
- `NotoSansMalayalam_500Medium`
- `NotoSansMalayalam_600SemiBold`
- `NotoSansMalayalam_700Bold`
- `NotoSansMalayalam_800ExtraBold`
- `NotoSansMalayalam_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-malayalam expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-malayalam/useFonts';
import { NotoSansMalayalam_100Thin } from '@expo-google-fonts/noto-sans-malayalam/100Thin';
import { NotoSansMalayalam_200ExtraLight } from '@expo-google-fonts/noto-sans-malayalam/200ExtraLight';
import { NotoSansMalayalam_300Light } from '@expo-google-fonts/noto-sans-malayalam/300Light';
import { NotoSansMalayalam_400Regular } from '@expo-google-fonts/noto-sans-malayalam/400Regular';
import { NotoSansMalayalam_500Medium } from '@expo-google-fonts/noto-sans-malayalam/500Medium';
import { NotoSansMalayalam_600SemiBold } from '@expo-google-fonts/noto-sans-malayalam/600SemiBold';
import { NotoSansMalayalam_700Bold } from '@expo-google-fonts/noto-sans-malayalam/700Bold';
import { NotoSansMalayalam_800ExtraBold } from '@expo-google-fonts/noto-sans-malayalam/800ExtraBold';
import { NotoSansMalayalam_900Black } from '@expo-google-fonts/noto-sans-malayalam/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansMalayalam_100Thin, 
    NotoSansMalayalam_200ExtraLight, 
    NotoSansMalayalam_300Light, 
    NotoSansMalayalam_400Regular, 
    NotoSansMalayalam_500Medium, 
    NotoSansMalayalam_600SemiBold, 
    NotoSansMalayalam_700Bold, 
    NotoSansMalayalam_800ExtraBold, 
    NotoSansMalayalam_900Black
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
          fontFamily: "NotoSansMalayalam_100Thin"
        }}>
          Noto Sans Malayalam Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_200ExtraLight"
        }}>
          Noto Sans Malayalam Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_300Light"
        }}>
          Noto Sans Malayalam Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_400Regular"
        }}>
          Noto Sans Malayalam Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_500Medium"
        }}>
          Noto Sans Malayalam Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_600SemiBold"
        }}>
          Noto Sans Malayalam Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_700Bold"
        }}>
          Noto Sans Malayalam Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_800ExtraBold"
        }}>
          Noto Sans Malayalam Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMalayalam_900Black"
        }}>
          Noto Sans Malayalam Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansMalayalam_100Thin](./100Thin/NotoSansMalayalam_100Thin.ttf.png)|![NotoSansMalayalam_200ExtraLight](./200ExtraLight/NotoSansMalayalam_200ExtraLight.ttf.png)|![NotoSansMalayalam_300Light](./300Light/NotoSansMalayalam_300Light.ttf.png)||
|![NotoSansMalayalam_400Regular](./400Regular/NotoSansMalayalam_400Regular.ttf.png)|![NotoSansMalayalam_500Medium](./500Medium/NotoSansMalayalam_500Medium.ttf.png)|![NotoSansMalayalam_600SemiBold](./600SemiBold/NotoSansMalayalam_600SemiBold.ttf.png)||
|![NotoSansMalayalam_700Bold](./700Bold/NotoSansMalayalam_700Bold.ttf.png)|![NotoSansMalayalam_800ExtraBold](./800ExtraBold/NotoSansMalayalam_800ExtraBold.ttf.png)|![NotoSansMalayalam_900Black](./900Black/NotoSansMalayalam_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-malayalam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Malayalam page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Malayalam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Malayalam on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Malayalam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-malayalam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-malayalam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
