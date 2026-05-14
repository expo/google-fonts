# @expo-google-fonts/finlandica-headline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/finlandica-headline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/finlandica-headline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/finlandica-headline)

This package lets you use the [**Finlandica Headline**](https://fonts.google.com/specimen/Finlandica+Headline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Finlandica Headline

![Finlandica Headline](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FinlandicaHeadline_100Thin`
- `FinlandicaHeadline_200ExtraLight`
- `FinlandicaHeadline_300Light`
- `FinlandicaHeadline_400Regular`
- `FinlandicaHeadline_500Medium`
- `FinlandicaHeadline_600SemiBold`
- `FinlandicaHeadline_700Bold`
- `FinlandicaHeadline_800ExtraBold`
- `FinlandicaHeadline_900Black`
- `FinlandicaHeadline_100Thin_Italic`
- `FinlandicaHeadline_200ExtraLight_Italic`
- `FinlandicaHeadline_300Light_Italic`
- `FinlandicaHeadline_400Regular_Italic`
- `FinlandicaHeadline_500Medium_Italic`
- `FinlandicaHeadline_600SemiBold_Italic`
- `FinlandicaHeadline_700Bold_Italic`
- `FinlandicaHeadline_800ExtraBold_Italic`
- `FinlandicaHeadline_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/finlandica-headline expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/finlandica-headline/useFonts';
import { FinlandicaHeadline_100Thin } from '@expo-google-fonts/finlandica-headline/100Thin';
import { FinlandicaHeadline_200ExtraLight } from '@expo-google-fonts/finlandica-headline/200ExtraLight';
import { FinlandicaHeadline_300Light } from '@expo-google-fonts/finlandica-headline/300Light';
import { FinlandicaHeadline_400Regular } from '@expo-google-fonts/finlandica-headline/400Regular';
import { FinlandicaHeadline_500Medium } from '@expo-google-fonts/finlandica-headline/500Medium';
import { FinlandicaHeadline_600SemiBold } from '@expo-google-fonts/finlandica-headline/600SemiBold';
import { FinlandicaHeadline_700Bold } from '@expo-google-fonts/finlandica-headline/700Bold';
import { FinlandicaHeadline_800ExtraBold } from '@expo-google-fonts/finlandica-headline/800ExtraBold';
import { FinlandicaHeadline_900Black } from '@expo-google-fonts/finlandica-headline/900Black';
import { FinlandicaHeadline_100Thin_Italic } from '@expo-google-fonts/finlandica-headline/100Thin_Italic';
import { FinlandicaHeadline_200ExtraLight_Italic } from '@expo-google-fonts/finlandica-headline/200ExtraLight_Italic';
import { FinlandicaHeadline_300Light_Italic } from '@expo-google-fonts/finlandica-headline/300Light_Italic';
import { FinlandicaHeadline_400Regular_Italic } from '@expo-google-fonts/finlandica-headline/400Regular_Italic';
import { FinlandicaHeadline_500Medium_Italic } from '@expo-google-fonts/finlandica-headline/500Medium_Italic';
import { FinlandicaHeadline_600SemiBold_Italic } from '@expo-google-fonts/finlandica-headline/600SemiBold_Italic';
import { FinlandicaHeadline_700Bold_Italic } from '@expo-google-fonts/finlandica-headline/700Bold_Italic';
import { FinlandicaHeadline_800ExtraBold_Italic } from '@expo-google-fonts/finlandica-headline/800ExtraBold_Italic';
import { FinlandicaHeadline_900Black_Italic } from '@expo-google-fonts/finlandica-headline/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    FinlandicaHeadline_100Thin, 
    FinlandicaHeadline_200ExtraLight, 
    FinlandicaHeadline_300Light, 
    FinlandicaHeadline_400Regular, 
    FinlandicaHeadline_500Medium, 
    FinlandicaHeadline_600SemiBold, 
    FinlandicaHeadline_700Bold, 
    FinlandicaHeadline_800ExtraBold, 
    FinlandicaHeadline_900Black, 
    FinlandicaHeadline_100Thin_Italic, 
    FinlandicaHeadline_200ExtraLight_Italic, 
    FinlandicaHeadline_300Light_Italic, 
    FinlandicaHeadline_400Regular_Italic, 
    FinlandicaHeadline_500Medium_Italic, 
    FinlandicaHeadline_600SemiBold_Italic, 
    FinlandicaHeadline_700Bold_Italic, 
    FinlandicaHeadline_800ExtraBold_Italic, 
    FinlandicaHeadline_900Black_Italic
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
          fontFamily: "FinlandicaHeadline_100Thin"
        }}>
          Finlandica Headline Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_200ExtraLight"
        }}>
          Finlandica Headline Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_300Light"
        }}>
          Finlandica Headline Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_400Regular"
        }}>
          Finlandica Headline Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_500Medium"
        }}>
          Finlandica Headline Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_600SemiBold"
        }}>
          Finlandica Headline Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_700Bold"
        }}>
          Finlandica Headline Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_800ExtraBold"
        }}>
          Finlandica Headline Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_900Black"
        }}>
          Finlandica Headline Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_100Thin_Italic"
        }}>
          Finlandica Headline Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_200ExtraLight_Italic"
        }}>
          Finlandica Headline Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_300Light_Italic"
        }}>
          Finlandica Headline Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_400Regular_Italic"
        }}>
          Finlandica Headline Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_500Medium_Italic"
        }}>
          Finlandica Headline Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_600SemiBold_Italic"
        }}>
          Finlandica Headline Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_700Bold_Italic"
        }}>
          Finlandica Headline Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_800ExtraBold_Italic"
        }}>
          Finlandica Headline Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaHeadline_900Black_Italic"
        }}>
          Finlandica Headline Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FinlandicaHeadline_100Thin](./100Thin/FinlandicaHeadline_100Thin.ttf.png)|![FinlandicaHeadline_200ExtraLight](./200ExtraLight/FinlandicaHeadline_200ExtraLight.ttf.png)|![FinlandicaHeadline_300Light](./300Light/FinlandicaHeadline_300Light.ttf.png)||
|![FinlandicaHeadline_400Regular](./400Regular/FinlandicaHeadline_400Regular.ttf.png)|![FinlandicaHeadline_500Medium](./500Medium/FinlandicaHeadline_500Medium.ttf.png)|![FinlandicaHeadline_600SemiBold](./600SemiBold/FinlandicaHeadline_600SemiBold.ttf.png)||
|![FinlandicaHeadline_700Bold](./700Bold/FinlandicaHeadline_700Bold.ttf.png)|![FinlandicaHeadline_800ExtraBold](./800ExtraBold/FinlandicaHeadline_800ExtraBold.ttf.png)|![FinlandicaHeadline_900Black](./900Black/FinlandicaHeadline_900Black.ttf.png)||
|![FinlandicaHeadline_100Thin_Italic](./100Thin_Italic/FinlandicaHeadline_100Thin_Italic.ttf.png)|![FinlandicaHeadline_200ExtraLight_Italic](./200ExtraLight_Italic/FinlandicaHeadline_200ExtraLight_Italic.ttf.png)|![FinlandicaHeadline_300Light_Italic](./300Light_Italic/FinlandicaHeadline_300Light_Italic.ttf.png)||
|![FinlandicaHeadline_400Regular_Italic](./400Regular_Italic/FinlandicaHeadline_400Regular_Italic.ttf.png)|![FinlandicaHeadline_500Medium_Italic](./500Medium_Italic/FinlandicaHeadline_500Medium_Italic.ttf.png)|![FinlandicaHeadline_600SemiBold_Italic](./600SemiBold_Italic/FinlandicaHeadline_600SemiBold_Italic.ttf.png)||
|![FinlandicaHeadline_700Bold_Italic](./700Bold_Italic/FinlandicaHeadline_700Bold_Italic.ttf.png)|![FinlandicaHeadline_800ExtraBold_Italic](./800ExtraBold_Italic/FinlandicaHeadline_800ExtraBold_Italic.ttf.png)|![FinlandicaHeadline_900Black_Italic](./900Black_Italic/FinlandicaHeadline_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/finlandica-headline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Finlandica Headline page on Google Fonts](https://fonts.google.com/specimen/Finlandica+Headline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Finlandica Headline on Google Fonts](https://fonts.google.com/specimen/Finlandica+Headline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/finlandica-headline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/finlandica-headline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
