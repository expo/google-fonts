# @expo-google-fonts/bitcount-prop-double

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitcount-prop-double)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitcount-prop-double)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitcount-prop-double)

This package lets you use the [**Bitcount Prop Double**](https://fonts.google.com/specimen/Bitcount+Prop+Double) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitcount Prop Double

![Bitcount Prop Double](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BitcountPropDouble_100Thin`
- `BitcountPropDouble_200ExtraLight`
- `BitcountPropDouble_300Light`
- `BitcountPropDouble_400Regular`
- `BitcountPropDouble_500Medium`
- `BitcountPropDouble_600SemiBold`
- `BitcountPropDouble_700Bold`
- `BitcountPropDouble_800ExtraBold`
- `BitcountPropDouble_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitcount-prop-double expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitcount-prop-double/useFonts';
import { BitcountPropDouble_100Thin } from '@expo-google-fonts/bitcount-prop-double/100Thin';
import { BitcountPropDouble_200ExtraLight } from '@expo-google-fonts/bitcount-prop-double/200ExtraLight';
import { BitcountPropDouble_300Light } from '@expo-google-fonts/bitcount-prop-double/300Light';
import { BitcountPropDouble_400Regular } from '@expo-google-fonts/bitcount-prop-double/400Regular';
import { BitcountPropDouble_500Medium } from '@expo-google-fonts/bitcount-prop-double/500Medium';
import { BitcountPropDouble_600SemiBold } from '@expo-google-fonts/bitcount-prop-double/600SemiBold';
import { BitcountPropDouble_700Bold } from '@expo-google-fonts/bitcount-prop-double/700Bold';
import { BitcountPropDouble_800ExtraBold } from '@expo-google-fonts/bitcount-prop-double/800ExtraBold';
import { BitcountPropDouble_900Black } from '@expo-google-fonts/bitcount-prop-double/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    BitcountPropDouble_100Thin, 
    BitcountPropDouble_200ExtraLight, 
    BitcountPropDouble_300Light, 
    BitcountPropDouble_400Regular, 
    BitcountPropDouble_500Medium, 
    BitcountPropDouble_600SemiBold, 
    BitcountPropDouble_700Bold, 
    BitcountPropDouble_800ExtraBold, 
    BitcountPropDouble_900Black
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
          fontFamily: "BitcountPropDouble_100Thin"
        }}>
          Bitcount Prop Double Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_200ExtraLight"
        }}>
          Bitcount Prop Double Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_300Light"
        }}>
          Bitcount Prop Double Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_400Regular"
        }}>
          Bitcount Prop Double Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_500Medium"
        }}>
          Bitcount Prop Double Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_600SemiBold"
        }}>
          Bitcount Prop Double Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_700Bold"
        }}>
          Bitcount Prop Double Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_800ExtraBold"
        }}>
          Bitcount Prop Double Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BitcountPropDouble_900Black"
        }}>
          Bitcount Prop Double Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BitcountPropDouble_100Thin](./100Thin/BitcountPropDouble_100Thin.ttf.png)|![BitcountPropDouble_200ExtraLight](./200ExtraLight/BitcountPropDouble_200ExtraLight.ttf.png)|![BitcountPropDouble_300Light](./300Light/BitcountPropDouble_300Light.ttf.png)||
|![BitcountPropDouble_400Regular](./400Regular/BitcountPropDouble_400Regular.ttf.png)|![BitcountPropDouble_500Medium](./500Medium/BitcountPropDouble_500Medium.ttf.png)|![BitcountPropDouble_600SemiBold](./600SemiBold/BitcountPropDouble_600SemiBold.ttf.png)||
|![BitcountPropDouble_700Bold](./700Bold/BitcountPropDouble_700Bold.ttf.png)|![BitcountPropDouble_800ExtraBold](./800ExtraBold/BitcountPropDouble_800ExtraBold.ttf.png)|![BitcountPropDouble_900Black](./900Black/BitcountPropDouble_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitcount-prop-double` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitcount Prop Double page on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Double) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitcount Prop Double on Google Fonts](https://fonts.google.com/specimen/Bitcount+Prop+Double)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitcount-prop-double)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitcount-prop-double)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
