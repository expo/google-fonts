# @expo-google-fonts/libre-caslon-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-caslon-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-caslon-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-caslon-condensed)

This package lets you use the [**Libre Caslon Condensed**](https://fonts.google.com/specimen/Libre+Caslon+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libre Caslon Condensed

![Libre Caslon Condensed](./font-family.png)

This font family contains [8 styles](#-gallery).

- `LibreCaslonCondensed_400Regular`
- `LibreCaslonCondensed_500Medium`
- `LibreCaslonCondensed_600SemiBold`
- `LibreCaslonCondensed_700Bold`
- `LibreCaslonCondensed_400Regular_Italic`
- `LibreCaslonCondensed_500Medium_Italic`
- `LibreCaslonCondensed_600SemiBold_Italic`
- `LibreCaslonCondensed_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/libre-caslon-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/libre-caslon-condensed/useFonts';
import { LibreCaslonCondensed_400Regular } from '@expo-google-fonts/libre-caslon-condensed/400Regular';
import { LibreCaslonCondensed_500Medium } from '@expo-google-fonts/libre-caslon-condensed/500Medium';
import { LibreCaslonCondensed_600SemiBold } from '@expo-google-fonts/libre-caslon-condensed/600SemiBold';
import { LibreCaslonCondensed_700Bold } from '@expo-google-fonts/libre-caslon-condensed/700Bold';
import { LibreCaslonCondensed_400Regular_Italic } from '@expo-google-fonts/libre-caslon-condensed/400Regular_Italic';
import { LibreCaslonCondensed_500Medium_Italic } from '@expo-google-fonts/libre-caslon-condensed/500Medium_Italic';
import { LibreCaslonCondensed_600SemiBold_Italic } from '@expo-google-fonts/libre-caslon-condensed/600SemiBold_Italic';
import { LibreCaslonCondensed_700Bold_Italic } from '@expo-google-fonts/libre-caslon-condensed/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    LibreCaslonCondensed_400Regular, 
    LibreCaslonCondensed_500Medium, 
    LibreCaslonCondensed_600SemiBold, 
    LibreCaslonCondensed_700Bold, 
    LibreCaslonCondensed_400Regular_Italic, 
    LibreCaslonCondensed_500Medium_Italic, 
    LibreCaslonCondensed_600SemiBold_Italic, 
    LibreCaslonCondensed_700Bold_Italic
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
          fontFamily: "LibreCaslonCondensed_400Regular"
        }}>
          Libre Caslon Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_500Medium"
        }}>
          Libre Caslon Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_600SemiBold"
        }}>
          Libre Caslon Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_700Bold"
        }}>
          Libre Caslon Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_400Regular_Italic"
        }}>
          Libre Caslon Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_500Medium_Italic"
        }}>
          Libre Caslon Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_600SemiBold_Italic"
        }}>
          Libre Caslon Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreCaslonCondensed_700Bold_Italic"
        }}>
          Libre Caslon Condensed Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LibreCaslonCondensed_400Regular](./400Regular/LibreCaslonCondensed_400Regular.ttf.png)|![LibreCaslonCondensed_500Medium](./500Medium/LibreCaslonCondensed_500Medium.ttf.png)|![LibreCaslonCondensed_600SemiBold](./600SemiBold/LibreCaslonCondensed_600SemiBold.ttf.png)||
|![LibreCaslonCondensed_700Bold](./700Bold/LibreCaslonCondensed_700Bold.ttf.png)|![LibreCaslonCondensed_400Regular_Italic](./400Regular_Italic/LibreCaslonCondensed_400Regular_Italic.ttf.png)|![LibreCaslonCondensed_500Medium_Italic](./500Medium_Italic/LibreCaslonCondensed_500Medium_Italic.ttf.png)||
|![LibreCaslonCondensed_600SemiBold_Italic](./600SemiBold_Italic/LibreCaslonCondensed_600SemiBold_Italic.ttf.png)|![LibreCaslonCondensed_700Bold_Italic](./700Bold_Italic/LibreCaslonCondensed_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/libre-caslon-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Caslon Condensed page on Google Fonts](https://fonts.google.com/specimen/Libre+Caslon+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Caslon Condensed on Google Fonts](https://fonts.google.com/specimen/Libre+Caslon+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-caslon-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-caslon-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
