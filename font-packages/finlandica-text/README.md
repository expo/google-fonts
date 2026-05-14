# @expo-google-fonts/finlandica-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/finlandica-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/finlandica-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/finlandica-text)

This package lets you use the [**Finlandica Text**](https://fonts.google.com/specimen/Finlandica+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Finlandica Text

![Finlandica Text](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FinlandicaText_100Thin`
- `FinlandicaText_200ExtraLight`
- `FinlandicaText_300Light`
- `FinlandicaText_400Regular`
- `FinlandicaText_500Medium`
- `FinlandicaText_600SemiBold`
- `FinlandicaText_700Bold`
- `FinlandicaText_800ExtraBold`
- `FinlandicaText_900Black`
- `FinlandicaText_100Thin_Italic`
- `FinlandicaText_200ExtraLight_Italic`
- `FinlandicaText_300Light_Italic`
- `FinlandicaText_400Regular_Italic`
- `FinlandicaText_500Medium_Italic`
- `FinlandicaText_600SemiBold_Italic`
- `FinlandicaText_700Bold_Italic`
- `FinlandicaText_800ExtraBold_Italic`
- `FinlandicaText_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/finlandica-text expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/finlandica-text/useFonts';
import { FinlandicaText_100Thin } from '@expo-google-fonts/finlandica-text/100Thin';
import { FinlandicaText_200ExtraLight } from '@expo-google-fonts/finlandica-text/200ExtraLight';
import { FinlandicaText_300Light } from '@expo-google-fonts/finlandica-text/300Light';
import { FinlandicaText_400Regular } from '@expo-google-fonts/finlandica-text/400Regular';
import { FinlandicaText_500Medium } from '@expo-google-fonts/finlandica-text/500Medium';
import { FinlandicaText_600SemiBold } from '@expo-google-fonts/finlandica-text/600SemiBold';
import { FinlandicaText_700Bold } from '@expo-google-fonts/finlandica-text/700Bold';
import { FinlandicaText_800ExtraBold } from '@expo-google-fonts/finlandica-text/800ExtraBold';
import { FinlandicaText_900Black } from '@expo-google-fonts/finlandica-text/900Black';
import { FinlandicaText_100Thin_Italic } from '@expo-google-fonts/finlandica-text/100Thin_Italic';
import { FinlandicaText_200ExtraLight_Italic } from '@expo-google-fonts/finlandica-text/200ExtraLight_Italic';
import { FinlandicaText_300Light_Italic } from '@expo-google-fonts/finlandica-text/300Light_Italic';
import { FinlandicaText_400Regular_Italic } from '@expo-google-fonts/finlandica-text/400Regular_Italic';
import { FinlandicaText_500Medium_Italic } from '@expo-google-fonts/finlandica-text/500Medium_Italic';
import { FinlandicaText_600SemiBold_Italic } from '@expo-google-fonts/finlandica-text/600SemiBold_Italic';
import { FinlandicaText_700Bold_Italic } from '@expo-google-fonts/finlandica-text/700Bold_Italic';
import { FinlandicaText_800ExtraBold_Italic } from '@expo-google-fonts/finlandica-text/800ExtraBold_Italic';
import { FinlandicaText_900Black_Italic } from '@expo-google-fonts/finlandica-text/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    FinlandicaText_100Thin, 
    FinlandicaText_200ExtraLight, 
    FinlandicaText_300Light, 
    FinlandicaText_400Regular, 
    FinlandicaText_500Medium, 
    FinlandicaText_600SemiBold, 
    FinlandicaText_700Bold, 
    FinlandicaText_800ExtraBold, 
    FinlandicaText_900Black, 
    FinlandicaText_100Thin_Italic, 
    FinlandicaText_200ExtraLight_Italic, 
    FinlandicaText_300Light_Italic, 
    FinlandicaText_400Regular_Italic, 
    FinlandicaText_500Medium_Italic, 
    FinlandicaText_600SemiBold_Italic, 
    FinlandicaText_700Bold_Italic, 
    FinlandicaText_800ExtraBold_Italic, 
    FinlandicaText_900Black_Italic
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
          fontFamily: "FinlandicaText_100Thin"
        }}>
          Finlandica Text Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_200ExtraLight"
        }}>
          Finlandica Text Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_300Light"
        }}>
          Finlandica Text Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_400Regular"
        }}>
          Finlandica Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_500Medium"
        }}>
          Finlandica Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_600SemiBold"
        }}>
          Finlandica Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_700Bold"
        }}>
          Finlandica Text Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_800ExtraBold"
        }}>
          Finlandica Text Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_900Black"
        }}>
          Finlandica Text Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_100Thin_Italic"
        }}>
          Finlandica Text Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_200ExtraLight_Italic"
        }}>
          Finlandica Text Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_300Light_Italic"
        }}>
          Finlandica Text Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_400Regular_Italic"
        }}>
          Finlandica Text Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_500Medium_Italic"
        }}>
          Finlandica Text Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_600SemiBold_Italic"
        }}>
          Finlandica Text Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_700Bold_Italic"
        }}>
          Finlandica Text Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_800ExtraBold_Italic"
        }}>
          Finlandica Text Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FinlandicaText_900Black_Italic"
        }}>
          Finlandica Text Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FinlandicaText_100Thin](./100Thin/FinlandicaText_100Thin.ttf.png)|![FinlandicaText_200ExtraLight](./200ExtraLight/FinlandicaText_200ExtraLight.ttf.png)|![FinlandicaText_300Light](./300Light/FinlandicaText_300Light.ttf.png)||
|![FinlandicaText_400Regular](./400Regular/FinlandicaText_400Regular.ttf.png)|![FinlandicaText_500Medium](./500Medium/FinlandicaText_500Medium.ttf.png)|![FinlandicaText_600SemiBold](./600SemiBold/FinlandicaText_600SemiBold.ttf.png)||
|![FinlandicaText_700Bold](./700Bold/FinlandicaText_700Bold.ttf.png)|![FinlandicaText_800ExtraBold](./800ExtraBold/FinlandicaText_800ExtraBold.ttf.png)|![FinlandicaText_900Black](./900Black/FinlandicaText_900Black.ttf.png)||
|![FinlandicaText_100Thin_Italic](./100Thin_Italic/FinlandicaText_100Thin_Italic.ttf.png)|![FinlandicaText_200ExtraLight_Italic](./200ExtraLight_Italic/FinlandicaText_200ExtraLight_Italic.ttf.png)|![FinlandicaText_300Light_Italic](./300Light_Italic/FinlandicaText_300Light_Italic.ttf.png)||
|![FinlandicaText_400Regular_Italic](./400Regular_Italic/FinlandicaText_400Regular_Italic.ttf.png)|![FinlandicaText_500Medium_Italic](./500Medium_Italic/FinlandicaText_500Medium_Italic.ttf.png)|![FinlandicaText_600SemiBold_Italic](./600SemiBold_Italic/FinlandicaText_600SemiBold_Italic.ttf.png)||
|![FinlandicaText_700Bold_Italic](./700Bold_Italic/FinlandicaText_700Bold_Italic.ttf.png)|![FinlandicaText_800ExtraBold_Italic](./800ExtraBold_Italic/FinlandicaText_800ExtraBold_Italic.ttf.png)|![FinlandicaText_900Black_Italic](./900Black_Italic/FinlandicaText_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/finlandica-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Finlandica Text page on Google Fonts](https://fonts.google.com/specimen/Finlandica+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Finlandica Text on Google Fonts](https://fonts.google.com/specimen/Finlandica+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/finlandica-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/finlandica-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
