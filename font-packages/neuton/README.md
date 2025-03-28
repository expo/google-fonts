# @expo-google-fonts/neuton

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/neuton)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/neuton)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/neuton)

This package lets you use the [**Neuton**](https://fonts.google.com/specimen/Neuton) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Neuton

![Neuton](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Neuton_200ExtraLight`
- `Neuton_300Light`
- `Neuton_400Regular`
- `Neuton_400Regular_Italic`
- `Neuton_700Bold`
- `Neuton_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/neuton expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/neuton/useFonts';
import { Neuton_200ExtraLight } from '@expo-google-fonts/neuton/200ExtraLight';
import { Neuton_300Light } from '@expo-google-fonts/neuton/300Light';
import { Neuton_400Regular } from '@expo-google-fonts/neuton/400Regular';
import { Neuton_400Regular_Italic } from '@expo-google-fonts/neuton/400Regular_Italic';
import { Neuton_700Bold } from '@expo-google-fonts/neuton/700Bold';
import { Neuton_800ExtraBold } from '@expo-google-fonts/neuton/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Neuton_200ExtraLight, 
    Neuton_300Light, 
    Neuton_400Regular, 
    Neuton_400Regular_Italic, 
    Neuton_700Bold, 
    Neuton_800ExtraBold
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
          fontFamily: "Neuton_200ExtraLight"
        }}>
          Neuton Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Neuton_300Light"
        }}>
          Neuton Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Neuton_400Regular"
        }}>
          Neuton Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Neuton_400Regular_Italic"
        }}>
          Neuton Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Neuton_700Bold"
        }}>
          Neuton Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Neuton_800ExtraBold"
        }}>
          Neuton Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Neuton_200ExtraLight](./200ExtraLight/Neuton_200ExtraLight.ttf.png)|![Neuton_300Light](./300Light/Neuton_300Light.ttf.png)|![Neuton_400Regular](./400Regular/Neuton_400Regular.ttf.png)||
|![Neuton_400Regular_Italic](./400Regular_Italic/Neuton_400Regular_Italic.ttf.png)|![Neuton_700Bold](./700Bold/Neuton_700Bold.ttf.png)|![Neuton_800ExtraBold](./800ExtraBold/Neuton_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/neuton` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Neuton page on Google Fonts](https://fonts.google.com/specimen/Neuton) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Neuton on Google Fonts](https://fonts.google.com/specimen/Neuton)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/neuton)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/neuton)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
