# @expo-google-fonts/encode-sans-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-semi-condensed)

This package lets you use the [**Encode Sans Semi Condensed**](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans Semi Condensed

![Encode Sans Semi Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansSemiCondensed_100Thin`
- `EncodeSansSemiCondensed_200ExtraLight`
- `EncodeSansSemiCondensed_300Light`
- `EncodeSansSemiCondensed_400Regular`
- `EncodeSansSemiCondensed_500Medium`
- `EncodeSansSemiCondensed_600SemiBold`
- `EncodeSansSemiCondensed_700Bold`
- `EncodeSansSemiCondensed_800ExtraBold`
- `EncodeSansSemiCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/encode-sans-semi-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/encode-sans-semi-condensed/useFonts';
import { EncodeSansSemiCondensed_100Thin } from '@expo-google-fonts/encode-sans-semi-condensed/100Thin';
import { EncodeSansSemiCondensed_200ExtraLight } from '@expo-google-fonts/encode-sans-semi-condensed/200ExtraLight';
import { EncodeSansSemiCondensed_300Light } from '@expo-google-fonts/encode-sans-semi-condensed/300Light';
import { EncodeSansSemiCondensed_400Regular } from '@expo-google-fonts/encode-sans-semi-condensed/400Regular';
import { EncodeSansSemiCondensed_500Medium } from '@expo-google-fonts/encode-sans-semi-condensed/500Medium';
import { EncodeSansSemiCondensed_600SemiBold } from '@expo-google-fonts/encode-sans-semi-condensed/600SemiBold';
import { EncodeSansSemiCondensed_700Bold } from '@expo-google-fonts/encode-sans-semi-condensed/700Bold';
import { EncodeSansSemiCondensed_800ExtraBold } from '@expo-google-fonts/encode-sans-semi-condensed/800ExtraBold';
import { EncodeSansSemiCondensed_900Black } from '@expo-google-fonts/encode-sans-semi-condensed/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    EncodeSansSemiCondensed_100Thin, 
    EncodeSansSemiCondensed_200ExtraLight, 
    EncodeSansSemiCondensed_300Light, 
    EncodeSansSemiCondensed_400Regular, 
    EncodeSansSemiCondensed_500Medium, 
    EncodeSansSemiCondensed_600SemiBold, 
    EncodeSansSemiCondensed_700Bold, 
    EncodeSansSemiCondensed_800ExtraBold, 
    EncodeSansSemiCondensed_900Black
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
          fontFamily: "EncodeSansSemiCondensed_100Thin"
        }}>
          Encode Sans Semi Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_200ExtraLight"
        }}>
          Encode Sans Semi Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_300Light"
        }}>
          Encode Sans Semi Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_400Regular"
        }}>
          Encode Sans Semi Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_500Medium"
        }}>
          Encode Sans Semi Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_600SemiBold"
        }}>
          Encode Sans Semi Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_700Bold"
        }}>
          Encode Sans Semi Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_800ExtraBold"
        }}>
          Encode Sans Semi Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSemiCondensed_900Black"
        }}>
          Encode Sans Semi Condensed Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EncodeSansSemiCondensed_100Thin](./100Thin/EncodeSansSemiCondensed_100Thin.ttf.png)|![EncodeSansSemiCondensed_200ExtraLight](./200ExtraLight/EncodeSansSemiCondensed_200ExtraLight.ttf.png)|![EncodeSansSemiCondensed_300Light](./300Light/EncodeSansSemiCondensed_300Light.ttf.png)||
|![EncodeSansSemiCondensed_400Regular](./400Regular/EncodeSansSemiCondensed_400Regular.ttf.png)|![EncodeSansSemiCondensed_500Medium](./500Medium/EncodeSansSemiCondensed_500Medium.ttf.png)|![EncodeSansSemiCondensed_600SemiBold](./600SemiBold/EncodeSansSemiCondensed_600SemiBold.ttf.png)||
|![EncodeSansSemiCondensed_700Bold](./700Bold/EncodeSansSemiCondensed_700Bold.ttf.png)|![EncodeSansSemiCondensed_800ExtraBold](./800ExtraBold/EncodeSansSemiCondensed_800ExtraBold.ttf.png)|![EncodeSansSemiCondensed_900Black](./900Black/EncodeSansSemiCondensed_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/encode-sans-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
