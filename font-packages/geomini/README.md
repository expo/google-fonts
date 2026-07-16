# @expo-google-fonts/geomini

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/geomini)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/geomini)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/geomini)

This package lets you use the [**Geomini**](https://fonts.google.com/specimen/Geomini) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Geomini

![Geomini](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Geomini_200ExtraLight`
- `Geomini_300Light`
- `Geomini_400Regular`
- `Geomini_500Medium`
- `Geomini_600SemiBold`
- `Geomini_700Bold`
- `Geomini_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/geomini expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/geomini/useFonts';
import { Geomini_200ExtraLight } from '@expo-google-fonts/geomini/200ExtraLight';
import { Geomini_300Light } from '@expo-google-fonts/geomini/300Light';
import { Geomini_400Regular } from '@expo-google-fonts/geomini/400Regular';
import { Geomini_500Medium } from '@expo-google-fonts/geomini/500Medium';
import { Geomini_600SemiBold } from '@expo-google-fonts/geomini/600SemiBold';
import { Geomini_700Bold } from '@expo-google-fonts/geomini/700Bold';
import { Geomini_800ExtraBold } from '@expo-google-fonts/geomini/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Geomini_200ExtraLight, 
    Geomini_300Light, 
    Geomini_400Regular, 
    Geomini_500Medium, 
    Geomini_600SemiBold, 
    Geomini_700Bold, 
    Geomini_800ExtraBold
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
          fontFamily: "Geomini_200ExtraLight"
        }}>
          Geomini Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_300Light"
        }}>
          Geomini Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_400Regular"
        }}>
          Geomini Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_500Medium"
        }}>
          Geomini Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_600SemiBold"
        }}>
          Geomini Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_700Bold"
        }}>
          Geomini Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geomini_800ExtraBold"
        }}>
          Geomini Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Geomini_200ExtraLight](./200ExtraLight/Geomini_200ExtraLight.ttf.png)|![Geomini_300Light](./300Light/Geomini_300Light.ttf.png)|![Geomini_400Regular](./400Regular/Geomini_400Regular.ttf.png)||
|![Geomini_500Medium](./500Medium/Geomini_500Medium.ttf.png)|![Geomini_600SemiBold](./600SemiBold/Geomini_600SemiBold.ttf.png)|![Geomini_700Bold](./700Bold/Geomini_700Bold.ttf.png)||
|![Geomini_800ExtraBold](./800ExtraBold/Geomini_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/geomini` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Geomini page on Google Fonts](https://fonts.google.com/specimen/Geomini) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Geomini on Google Fonts](https://fonts.google.com/specimen/Geomini)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/geomini)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/geomini)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
