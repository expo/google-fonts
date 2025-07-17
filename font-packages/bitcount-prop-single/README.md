# @expo-google-fonts/bitcount-prop-single

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-prop-single)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-prop-single)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-prop-single)

This package lets you use the [**Bitcount Prop Single**](https://fonts.google.com/specimen/Bitcount+Prop+Single) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Prop Single

![Bitcount Prop Single](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountPropSingle_100Thin`
- `BitcountPropSingle_200ExtraLight`
- `BitcountPropSingle_300Light`
- `BitcountPropSingle_400Regular`
- `BitcountPropSingle_500Medium`
- `BitcountPropSingle_600SemiBold`
- `BitcountPropSingle_700Bold`
- `BitcountPropSingle_800ExtraBold`
- `BitcountPropSingle_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-prop-single expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-prop-single/useFonts';
import { BitcountPropSingle_100Thin } from '@expo-google-fonts/bitcount-prop-single/100Thin';
import { BitcountPropSingle_200ExtraLight } from '@expo-google-fonts/bitcount-prop-single/200ExtraLight';
import { BitcountPropSingle_300Light } from '@expo-google-fonts/bitcount-prop-single/300Light';
import { BitcountPropSingle_400Regular } from '@expo-google-fonts/bitcount-prop-single/400Regular';
import { BitcountPropSingle_500Medium } from '@expo-google-fonts/bitcount-prop-single/500Medium';
import { BitcountPropSingle_600SemiBold } from '@expo-google-fonts/bitcount-prop-single/600SemiBold';
import { BitcountPropSingle_700Bold } from '@expo-google-fonts/bitcount-prop-single/700Bold';
import { BitcountPropSingle_800ExtraBold } from '@expo-google-fonts/bitcount-prop-single/800ExtraBold';
import { BitcountPropSingle_900Black } from '@expo-google-fonts/bitcount-prop-single/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountPropSingle_100Thin, 
    BitcountPropSingle_200ExtraLight, 
    BitcountPropSingle_300Light, 
    BitcountPropSingle_400Regular, 
    BitcountPropSingle_500Medium, 
    BitcountPropSingle_600SemiBold, 
    BitcountPropSingle_700Bold, 
    BitcountPropSingle_800ExtraBold, 
    BitcountPropSingle_900Black
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
          fontFamily: "BitcountPropSingle_100Thin"
        }}>
          Bitcount Prop Single Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_200ExtraLight"
        }}>
          Bitcount Prop Single Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_300Light"
        }}>
          Bitcount Prop Single Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_400Regular"
        }}>
          Bitcount Prop Single Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_500Medium"
        }}>
          Bitcount Prop Single Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_600SemiBold"
        }}>
          Bitcount Prop Single Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_700Bold"
        }}>
          Bitcount Prop Single Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_800ExtraBold"
        }}>
          Bitcount Prop Single Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropSingle_900Black"
        }}>
          Bitcount Prop Single Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountPropSingle_100Thin](./100Thin/BitcountPropSingle_100Thin.ttf.png)|![BitcountPropSingle_200ExtraLight](./200ExtraLight/BitcountPropSingle_200ExtraLight.ttf.png)|![BitcountPropSingle_300Light](./300Light/BitcountPropSingle_300Light.ttf.png)||
|![BitcountPropSingle_400Regular](./400Regular/BitcountPropSingle_400Regular.ttf.png)|![BitcountPropSingle_500Medium](./500Medium/BitcountPropSingle_500Medium.ttf.png)|![BitcountPropSingle_600SemiBold](./600SemiBold/BitcountPropSingle_600SemiBold.ttf.png)||
|![BitcountPropSingle_700Bold](./700Bold/BitcountPropSingle_700Bold.ttf.png)|![BitcountPropSingle_800ExtraBold](./800ExtraBold/BitcountPropSingle_800ExtraBold.ttf.png)|![BitcountPropSingle_900Black](./900Black/BitcountPropSingle_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-prop-single` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Prop Single page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Single) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Prop Single on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Single)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-prop-single)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-prop-single)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
