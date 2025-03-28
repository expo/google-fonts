# @expo-google-fonts/eb-garamond

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/eb-garamond)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/eb-garamond)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/eb-garamond)

This package lets you use the [**EB Garamond**](https://fonts.google.com/specimen/EB+Garamond) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## EB Garamond

![EB Garamond](./font-family.png)

This font family contains [10 styles](#-gallery).

- `EBGaramond_400Regular`
- `EBGaramond_500Medium`
- `EBGaramond_600SemiBold`
- `EBGaramond_700Bold`
- `EBGaramond_800ExtraBold`
- `EBGaramond_400Regular_Italic`
- `EBGaramond_500Medium_Italic`
- `EBGaramond_600SemiBold_Italic`
- `EBGaramond_700Bold_Italic`
- `EBGaramond_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/eb-garamond expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/eb-garamond/useFonts';
import { EBGaramond_400Regular } from '@expo-google-fonts/eb-garamond/400Regular';
import { EBGaramond_500Medium } from '@expo-google-fonts/eb-garamond/500Medium';
import { EBGaramond_600SemiBold } from '@expo-google-fonts/eb-garamond/600SemiBold';
import { EBGaramond_700Bold } from '@expo-google-fonts/eb-garamond/700Bold';
import { EBGaramond_800ExtraBold } from '@expo-google-fonts/eb-garamond/800ExtraBold';
import { EBGaramond_400Regular_Italic } from '@expo-google-fonts/eb-garamond/400Regular_Italic';
import { EBGaramond_500Medium_Italic } from '@expo-google-fonts/eb-garamond/500Medium_Italic';
import { EBGaramond_600SemiBold_Italic } from '@expo-google-fonts/eb-garamond/600SemiBold_Italic';
import { EBGaramond_700Bold_Italic } from '@expo-google-fonts/eb-garamond/700Bold_Italic';
import { EBGaramond_800ExtraBold_Italic } from '@expo-google-fonts/eb-garamond/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    EBGaramond_400Regular, 
    EBGaramond_500Medium, 
    EBGaramond_600SemiBold, 
    EBGaramond_700Bold, 
    EBGaramond_800ExtraBold, 
    EBGaramond_400Regular_Italic, 
    EBGaramond_500Medium_Italic, 
    EBGaramond_600SemiBold_Italic, 
    EBGaramond_700Bold_Italic, 
    EBGaramond_800ExtraBold_Italic
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
          fontFamily: "EBGaramond_400Regular"
        }}>
          EB Garamond Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_500Medium"
        }}>
          EB Garamond Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_600SemiBold"
        }}>
          EB Garamond Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_700Bold"
        }}>
          EB Garamond Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_800ExtraBold"
        }}>
          EB Garamond Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_400Regular_Italic"
        }}>
          EB Garamond Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_500Medium_Italic"
        }}>
          EB Garamond Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_600SemiBold_Italic"
        }}>
          EB Garamond Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_700Bold_Italic"
        }}>
          EB Garamond Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EBGaramond_800ExtraBold_Italic"
        }}>
          EB Garamond Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EBGaramond_400Regular](./400Regular/EBGaramond_400Regular.ttf.png)|![EBGaramond_500Medium](./500Medium/EBGaramond_500Medium.ttf.png)|![EBGaramond_600SemiBold](./600SemiBold/EBGaramond_600SemiBold.ttf.png)||
|![EBGaramond_700Bold](./700Bold/EBGaramond_700Bold.ttf.png)|![EBGaramond_800ExtraBold](./800ExtraBold/EBGaramond_800ExtraBold.ttf.png)|![EBGaramond_400Regular_Italic](./400Regular_Italic/EBGaramond_400Regular_Italic.ttf.png)||
|![EBGaramond_500Medium_Italic](./500Medium_Italic/EBGaramond_500Medium_Italic.ttf.png)|![EBGaramond_600SemiBold_Italic](./600SemiBold_Italic/EBGaramond_600SemiBold_Italic.ttf.png)|![EBGaramond_700Bold_Italic](./700Bold_Italic/EBGaramond_700Bold_Italic.ttf.png)||
|![EBGaramond_800ExtraBold_Italic](./800ExtraBold_Italic/EBGaramond_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/eb-garamond` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [EB Garamond page on Google Fonts](https://fonts.google.com/specimen/EB+Garamond) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [EB Garamond on Google Fonts](https://fonts.google.com/specimen/EB+Garamond)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/eb-garamond)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/eb-garamond)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
