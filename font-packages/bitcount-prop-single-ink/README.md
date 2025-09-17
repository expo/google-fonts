# @expo-google-fonts/bitcount-prop-single-ink

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-prop-single-ink)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-prop-single-ink)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-prop-single-ink)

This package lets you use the [**Bitcount Prop Single Ink**](https://fonts.google.com/specimen/Bitcount+Prop+Single+Ink) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Prop Single Ink

![Bitcount Prop Single Ink](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountPropSingleInk_100Thin`
- `BitcountPropSingleInk_200ExtraLight`
- `BitcountPropSingleInk_300Light`
- `BitcountPropSingleInk_400Regular`
- `BitcountPropSingleInk_500Medium`
- `BitcountPropSingleInk_600SemiBold`
- `BitcountPropSingleInk_700Bold`
- `BitcountPropSingleInk_800ExtraBold`
- `BitcountPropSingleInk_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-prop-single-ink expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-prop-single-ink/useFonts';
import { BitcountPropSingleInk_100Thin } from '@expo-google-fonts/bitcount-prop-single-ink/100Thin';
import { BitcountPropSingleInk_200ExtraLight } from '@expo-google-fonts/bitcount-prop-single-ink/200ExtraLight';
import { BitcountPropSingleInk_300Light } from '@expo-google-fonts/bitcount-prop-single-ink/300Light';
import { BitcountPropSingleInk_400Regular } from '@expo-google-fonts/bitcount-prop-single-ink/400Regular';
import { BitcountPropSingleInk_500Medium } from '@expo-google-fonts/bitcount-prop-single-ink/500Medium';
import { BitcountPropSingleInk_600SemiBold } from '@expo-google-fonts/bitcount-prop-single-ink/600SemiBold';
import { BitcountPropSingleInk_700Bold } from '@expo-google-fonts/bitcount-prop-single-ink/700Bold';
import { BitcountPropSingleInk_800ExtraBold } from '@expo-google-fonts/bitcount-prop-single-ink/800ExtraBold';
import { BitcountPropSingleInk_900Black } from '@expo-google-fonts/bitcount-prop-single-ink/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountPropSingleInk_100Thin, 
    BitcountPropSingleInk_200ExtraLight, 
    BitcountPropSingleInk_300Light, 
    BitcountPropSingleInk_400Regular, 
    BitcountPropSingleInk_500Medium, 
    BitcountPropSingleInk_600SemiBold, 
    BitcountPropSingleInk_700Bold, 
    BitcountPropSingleInk_800ExtraBold, 
    BitcountPropSingleInk_900Black
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
          fontFamily: "BitcountPropSingleInk_100Thin"
        }}>
          Bitcount Prop Single Ink Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_200ExtraLight"
        }}>
          Bitcount Prop Single Ink Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_300Light"
        }}>
          Bitcount Prop Single Ink Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_400Regular"
        }}>
          Bitcount Prop Single Ink Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_500Medium"
        }}>
          Bitcount Prop Single Ink Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_600SemiBold"
        }}>
          Bitcount Prop Single Ink Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_700Bold"
        }}>
          Bitcount Prop Single Ink Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_800ExtraBold"
        }}>
          Bitcount Prop Single Ink Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingleInk_900Black"
        }}>
          Bitcount Prop Single Ink Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountPropSingleInk_100Thin](./100Thin/BitcountPropSingleInk_100Thin.ttf.png)|![BitcountPropSingleInk_200ExtraLight](./200ExtraLight/BitcountPropSingleInk_200ExtraLight.ttf.png)|![BitcountPropSingleInk_300Light](./300Light/BitcountPropSingleInk_300Light.ttf.png)||
|![BitcountPropSingleInk_400Regular](./400Regular/BitcountPropSingleInk_400Regular.ttf.png)|![BitcountPropSingleInk_500Medium](./500Medium/BitcountPropSingleInk_500Medium.ttf.png)|![BitcountPropSingleInk_600SemiBold](./600SemiBold/BitcountPropSingleInk_600SemiBold.ttf.png)||
|![BitcountPropSingleInk_700Bold](./700Bold/BitcountPropSingleInk_700Bold.ttf.png)|![BitcountPropSingleInk_800ExtraBold](./800ExtraBold/BitcountPropSingleInk_800ExtraBold.ttf.png)|![BitcountPropSingleInk_900Black](./900Black/BitcountPropSingleInk_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-prop-single-ink` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Prop Single Ink page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Single+Ink) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Prop Single Ink on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Single+Ink)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-prop-single-ink)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-prop-single-ink)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
