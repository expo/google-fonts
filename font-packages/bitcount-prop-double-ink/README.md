# @expo-google-fonts/bitcount-prop-double-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-prop-double-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-prop-double-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-prop-double-ink)

This package lets you use the [**Bitcount Prop Double Ink**](https://fonts.google.com/specimen/Bitcount+Prop+Double+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Prop Double Ink

![Bitcount Prop Double Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountPropDoubleInk_100Thin`
- `BitcountPropDoubleInk_200ExtraLight`
- `BitcountPropDoubleInk_300Light`
- `BitcountPropDoubleInk_400Regular`
- `BitcountPropDoubleInk_500Medium`
- `BitcountPropDoubleInk_600SemiBold`
- `BitcountPropDoubleInk_700Bold`
- `BitcountPropDoubleInk_800ExtraBold`
- `BitcountPropDoubleInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-prop-double-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-prop-double-ink/useFonts';
import { BitcountPropDoubleInk_100Thin } from '@expo-google-fonts/bitcount-prop-double-ink/100Thin';
import { BitcountPropDoubleInk_200ExtraLight } from '@expo-google-fonts/bitcount-prop-double-ink/200ExtraLight';
import { BitcountPropDoubleInk_300Light } from '@expo-google-fonts/bitcount-prop-double-ink/300Light';
import { BitcountPropDoubleInk_400Regular } from '@expo-google-fonts/bitcount-prop-double-ink/400Regular';
import { BitcountPropDoubleInk_500Medium } from '@expo-google-fonts/bitcount-prop-double-ink/500Medium';
import { BitcountPropDoubleInk_600SemiBold } from '@expo-google-fonts/bitcount-prop-double-ink/600SemiBold';
import { BitcountPropDoubleInk_700Bold } from '@expo-google-fonts/bitcount-prop-double-ink/700Bold';
import { BitcountPropDoubleInk_800ExtraBold } from '@expo-google-fonts/bitcount-prop-double-ink/800ExtraBold';
import { BitcountPropDoubleInk_900Black } from '@expo-google-fonts/bitcount-prop-double-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountPropDoubleInk_100Thin, 
    BitcountPropDoubleInk_200ExtraLight, 
    BitcountPropDoubleInk_300Light, 
    BitcountPropDoubleInk_400Regular, 
    BitcountPropDoubleInk_500Medium, 
    BitcountPropDoubleInk_600SemiBold, 
    BitcountPropDoubleInk_700Bold, 
    BitcountPropDoubleInk_800ExtraBold, 
    BitcountPropDoubleInk_900Black
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
          fontFamily: "BitcountPropDoubleInk_100Thin"
        }}>
          Bitcount Prop Double Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_200ExtraLight"
        }}>
          Bitcount Prop Double Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_300Light"
        }}>
          Bitcount Prop Double Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_400Regular"
        }}>
          Bitcount Prop Double Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_500Medium"
        }}>
          Bitcount Prop Double Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_600SemiBold"
        }}>
          Bitcount Prop Double Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_700Bold"
        }}>
          Bitcount Prop Double Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_800ExtraBold"
        }}>
          Bitcount Prop Double Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDoubleInk_900Black"
        }}>
          Bitcount Prop Double Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountPropDoubleInk_100Thin](./100Thin/BitcountPropDoubleInk_100Thin.ttf.png)|![BitcountPropDoubleInk_200ExtraLight](./200ExtraLight/BitcountPropDoubleInk_200ExtraLight.ttf.png)|![BitcountPropDoubleInk_300Light](./300Light/BitcountPropDoubleInk_300Light.ttf.png)||
|![BitcountPropDoubleInk_400Regular](./400Regular/BitcountPropDoubleInk_400Regular.ttf.png)|![BitcountPropDoubleInk_500Medium](./500Medium/BitcountPropDoubleInk_500Medium.ttf.png)|![BitcountPropDoubleInk_600SemiBold](./600SemiBold/BitcountPropDoubleInk_600SemiBold.ttf.png)||
|![BitcountPropDoubleInk_700Bold](./700Bold/BitcountPropDoubleInk_700Bold.ttf.png)|![BitcountPropDoubleInk_800ExtraBold](./800ExtraBold/BitcountPropDoubleInk_800ExtraBold.ttf.png)|![BitcountPropDoubleInk_900Black](./900Black/BitcountPropDoubleInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-prop-double-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Prop Double Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Double+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Prop Double Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Double+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-prop-double-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-prop-double-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
