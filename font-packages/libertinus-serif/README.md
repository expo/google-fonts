# @expo-google-fonts/libertinus-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libertinus-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libertinus-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libertinus-serif)

This package lets you use the [**Libertinus Serif**](https://fonts.google.com/specimen/Libertinus+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libertinus Serif

![Libertinus Serif](./font-family.png)

This font family contains [6 styles](#-gallery).

- `LibertinusSerif_400Regular`
- `LibertinusSerif_400Regular_Italic`
- `LibertinusSerif_600SemiBold`
- `LibertinusSerif_600SemiBold_Italic`
- `LibertinusSerif_700Bold`
- `LibertinusSerif_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/libertinus-serif expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/libertinus-serif/useFonts';
import { LibertinusSerif_400Regular } from '@expo-google-fonts/libertinus-serif/400Regular';
import { LibertinusSerif_400Regular_Italic } from '@expo-google-fonts/libertinus-serif/400Regular_Italic';
import { LibertinusSerif_600SemiBold } from '@expo-google-fonts/libertinus-serif/600SemiBold';
import { LibertinusSerif_600SemiBold_Italic } from '@expo-google-fonts/libertinus-serif/600SemiBold_Italic';
import { LibertinusSerif_700Bold } from '@expo-google-fonts/libertinus-serif/700Bold';
import { LibertinusSerif_700Bold_Italic } from '@expo-google-fonts/libertinus-serif/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    LibertinusSerif_400Regular, 
    LibertinusSerif_400Regular_Italic, 
    LibertinusSerif_600SemiBold, 
    LibertinusSerif_600SemiBold_Italic, 
    LibertinusSerif_700Bold, 
    LibertinusSerif_700Bold_Italic
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
          fontFamily: "LibertinusSerif_400Regular"
        }}>
          Libertinus Serif Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibertinusSerif_400Regular_Italic"
        }}>
          Libertinus Serif Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibertinusSerif_600SemiBold"
        }}>
          Libertinus Serif Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibertinusSerif_600SemiBold_Italic"
        }}>
          Libertinus Serif Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibertinusSerif_700Bold"
        }}>
          Libertinus Serif Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibertinusSerif_700Bold_Italic"
        }}>
          Libertinus Serif Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LibertinusSerif_400Regular](./400Regular/LibertinusSerif_400Regular.ttf.png)|![LibertinusSerif_400Regular_Italic](./400Regular_Italic/LibertinusSerif_400Regular_Italic.ttf.png)|![LibertinusSerif_600SemiBold](./600SemiBold/LibertinusSerif_600SemiBold.ttf.png)||
|![LibertinusSerif_600SemiBold_Italic](./600SemiBold_Italic/LibertinusSerif_600SemiBold_Italic.ttf.png)|![LibertinusSerif_700Bold](./700Bold/LibertinusSerif_700Bold.ttf.png)|![LibertinusSerif_700Bold_Italic](./700Bold_Italic/LibertinusSerif_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/libertinus-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libertinus Serif page on Google Fonts](https://fonts.google.com/specimen/Libertinus+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libertinus Serif on Google Fonts](https://fonts.google.com/specimen/Libertinus+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libertinus-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libertinus-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
