# @expo-google-fonts/mukta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta)

This package lets you use the [**Mukta**](https://fonts.google.com/specimen/Mukta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mukta

![Mukta](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Mukta_200ExtraLight`
- `Mukta_300Light`
- `Mukta_400Regular`
- `Mukta_500Medium`
- `Mukta_600SemiBold`
- `Mukta_700Bold`
- `Mukta_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mukta expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mukta/useFonts';
import { Mukta_200ExtraLight } from '@expo-google-fonts/mukta/200ExtraLight';
import { Mukta_300Light } from '@expo-google-fonts/mukta/300Light';
import { Mukta_400Regular } from '@expo-google-fonts/mukta/400Regular';
import { Mukta_500Medium } from '@expo-google-fonts/mukta/500Medium';
import { Mukta_600SemiBold } from '@expo-google-fonts/mukta/600SemiBold';
import { Mukta_700Bold } from '@expo-google-fonts/mukta/700Bold';
import { Mukta_800ExtraBold } from '@expo-google-fonts/mukta/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Mukta_200ExtraLight, 
    Mukta_300Light, 
    Mukta_400Regular, 
    Mukta_500Medium, 
    Mukta_600SemiBold, 
    Mukta_700Bold, 
    Mukta_800ExtraBold
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
          fontFamily: "Mukta_200ExtraLight"
        }}>
          Mukta Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_300Light"
        }}>
          Mukta Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_400Regular"
        }}>
          Mukta Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_500Medium"
        }}>
          Mukta Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_600SemiBold"
        }}>
          Mukta Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_700Bold"
        }}>
          Mukta Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mukta_800ExtraBold"
        }}>
          Mukta Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Mukta_200ExtraLight](./200ExtraLight/Mukta_200ExtraLight.ttf.png)|![Mukta_300Light](./300Light/Mukta_300Light.ttf.png)|![Mukta_400Regular](./400Regular/Mukta_400Regular.ttf.png)||
|![Mukta_500Medium](./500Medium/Mukta_500Medium.ttf.png)|![Mukta_600SemiBold](./600SemiBold/Mukta_600SemiBold.ttf.png)|![Mukta_700Bold](./700Bold/Mukta_700Bold.ttf.png)||
|![Mukta_800ExtraBold](./800ExtraBold/Mukta_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mukta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta page on Google Fonts](https://fonts.google.com/specimen/Mukta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta on Google Fonts](https://fonts.google.com/specimen/Mukta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
