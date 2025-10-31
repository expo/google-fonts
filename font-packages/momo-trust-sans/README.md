# @expo-google-fonts/momo-trust-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/momo-trust-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/momo-trust-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/momo-trust-sans)

This package lets you use the [**Momo Trust Sans**](https://fonts.google.com/specimen/Momo+Trust+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Momo Trust Sans

![Momo Trust Sans](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MomoTrustSans_200ExtraLight`
- `MomoTrustSans_300Light`
- `MomoTrustSans_400Regular`
- `MomoTrustSans_500Medium`
- `MomoTrustSans_600SemiBold`
- `MomoTrustSans_700Bold`
- `MomoTrustSans_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/momo-trust-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/momo-trust-sans/useFonts';
import { MomoTrustSans_200ExtraLight } from '@expo-google-fonts/momo-trust-sans/200ExtraLight';
import { MomoTrustSans_300Light } from '@expo-google-fonts/momo-trust-sans/300Light';
import { MomoTrustSans_400Regular } from '@expo-google-fonts/momo-trust-sans/400Regular';
import { MomoTrustSans_500Medium } from '@expo-google-fonts/momo-trust-sans/500Medium';
import { MomoTrustSans_600SemiBold } from '@expo-google-fonts/momo-trust-sans/600SemiBold';
import { MomoTrustSans_700Bold } from '@expo-google-fonts/momo-trust-sans/700Bold';
import { MomoTrustSans_800ExtraBold } from '@expo-google-fonts/momo-trust-sans/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    MomoTrustSans_200ExtraLight, 
    MomoTrustSans_300Light, 
    MomoTrustSans_400Regular, 
    MomoTrustSans_500Medium, 
    MomoTrustSans_600SemiBold, 
    MomoTrustSans_700Bold, 
    MomoTrustSans_800ExtraBold
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
          fontFamily: "MomoTrustSans_200ExtraLight"
        }}>
          Momo Trust Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_300Light"
        }}>
          Momo Trust Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_400Regular"
        }}>
          Momo Trust Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_500Medium"
        }}>
          Momo Trust Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_600SemiBold"
        }}>
          Momo Trust Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_700Bold"
        }}>
          Momo Trust Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MomoTrustSans_800ExtraBold"
        }}>
          Momo Trust Sans Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MomoTrustSans_200ExtraLight](./200ExtraLight/MomoTrustSans_200ExtraLight.ttf.png)|![MomoTrustSans_300Light](./300Light/MomoTrustSans_300Light.ttf.png)|![MomoTrustSans_400Regular](./400Regular/MomoTrustSans_400Regular.ttf.png)||
|![MomoTrustSans_500Medium](./500Medium/MomoTrustSans_500Medium.ttf.png)|![MomoTrustSans_600SemiBold](./600SemiBold/MomoTrustSans_600SemiBold.ttf.png)|![MomoTrustSans_700Bold](./700Bold/MomoTrustSans_700Bold.ttf.png)||
|![MomoTrustSans_800ExtraBold](./800ExtraBold/MomoTrustSans_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/momo-trust-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Momo Trust Sans page on Google Fonts](https://fonts.google.com/specimen/Momo+Trust+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Momo Trust Sans on Google Fonts](https://fonts.google.com/specimen/Momo+Trust+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/momo-trust-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/momo-trust-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
