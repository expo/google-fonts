# @expo-google-fonts/noto-serif-malayalam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-malayalam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-malayalam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-malayalam)

This package lets you use the [**Noto Serif Malayalam**](https://fonts.google.com/specimen/Noto+Serif+Malayalam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Malayalam

![Noto Serif Malayalam](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifMalayalam_100Thin`
- `NotoSerifMalayalam_200ExtraLight`
- `NotoSerifMalayalam_300Light`
- `NotoSerifMalayalam_400Regular`
- `NotoSerifMalayalam_500Medium`
- `NotoSerifMalayalam_600SemiBold`
- `NotoSerifMalayalam_700Bold`
- `NotoSerifMalayalam_800ExtraBold`
- `NotoSerifMalayalam_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-malayalam expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-malayalam/useFonts';
import { NotoSerifMalayalam_100Thin } from '@expo-google-fonts/noto-serif-malayalam/100Thin';
import { NotoSerifMalayalam_200ExtraLight } from '@expo-google-fonts/noto-serif-malayalam/200ExtraLight';
import { NotoSerifMalayalam_300Light } from '@expo-google-fonts/noto-serif-malayalam/300Light';
import { NotoSerifMalayalam_400Regular } from '@expo-google-fonts/noto-serif-malayalam/400Regular';
import { NotoSerifMalayalam_500Medium } from '@expo-google-fonts/noto-serif-malayalam/500Medium';
import { NotoSerifMalayalam_600SemiBold } from '@expo-google-fonts/noto-serif-malayalam/600SemiBold';
import { NotoSerifMalayalam_700Bold } from '@expo-google-fonts/noto-serif-malayalam/700Bold';
import { NotoSerifMalayalam_800ExtraBold } from '@expo-google-fonts/noto-serif-malayalam/800ExtraBold';
import { NotoSerifMalayalam_900Black } from '@expo-google-fonts/noto-serif-malayalam/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifMalayalam_100Thin, 
    NotoSerifMalayalam_200ExtraLight, 
    NotoSerifMalayalam_300Light, 
    NotoSerifMalayalam_400Regular, 
    NotoSerifMalayalam_500Medium, 
    NotoSerifMalayalam_600SemiBold, 
    NotoSerifMalayalam_700Bold, 
    NotoSerifMalayalam_800ExtraBold, 
    NotoSerifMalayalam_900Black
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
          fontFamily: "NotoSerifMalayalam_100Thin"
        }}>
          Noto Serif Malayalam Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_200ExtraLight"
        }}>
          Noto Serif Malayalam Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_300Light"
        }}>
          Noto Serif Malayalam Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_400Regular"
        }}>
          Noto Serif Malayalam Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_500Medium"
        }}>
          Noto Serif Malayalam Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_600SemiBold"
        }}>
          Noto Serif Malayalam Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_700Bold"
        }}>
          Noto Serif Malayalam Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_800ExtraBold"
        }}>
          Noto Serif Malayalam Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMalayalam_900Black"
        }}>
          Noto Serif Malayalam Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifMalayalam_100Thin](./100Thin/NotoSerifMalayalam_100Thin.ttf.png)|![NotoSerifMalayalam_200ExtraLight](./200ExtraLight/NotoSerifMalayalam_200ExtraLight.ttf.png)|![NotoSerifMalayalam_300Light](./300Light/NotoSerifMalayalam_300Light.ttf.png)||
|![NotoSerifMalayalam_400Regular](./400Regular/NotoSerifMalayalam_400Regular.ttf.png)|![NotoSerifMalayalam_500Medium](./500Medium/NotoSerifMalayalam_500Medium.ttf.png)|![NotoSerifMalayalam_600SemiBold](./600SemiBold/NotoSerifMalayalam_600SemiBold.ttf.png)||
|![NotoSerifMalayalam_700Bold](./700Bold/NotoSerifMalayalam_700Bold.ttf.png)|![NotoSerifMalayalam_800ExtraBold](./800ExtraBold/NotoSerifMalayalam_800ExtraBold.ttf.png)|![NotoSerifMalayalam_900Black](./900Black/NotoSerifMalayalam_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-malayalam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Malayalam page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Malayalam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Malayalam on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Malayalam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-malayalam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-malayalam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
