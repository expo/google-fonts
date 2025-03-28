# @expo-google-fonts/recursive

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/recursive)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/recursive)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/recursive)

This package lets you use the [**Recursive**](https://fonts.google.com/specimen/Recursive) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Recursive

![Recursive](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Recursive_300Light`
- `Recursive_400Regular`
- `Recursive_500Medium`
- `Recursive_600SemiBold`
- `Recursive_700Bold`
- `Recursive_800ExtraBold`
- `Recursive_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/recursive expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/recursive/useFonts';
import { Recursive_300Light } from '@expo-google-fonts/recursive/300Light';
import { Recursive_400Regular } from '@expo-google-fonts/recursive/400Regular';
import { Recursive_500Medium } from '@expo-google-fonts/recursive/500Medium';
import { Recursive_600SemiBold } from '@expo-google-fonts/recursive/600SemiBold';
import { Recursive_700Bold } from '@expo-google-fonts/recursive/700Bold';
import { Recursive_800ExtraBold } from '@expo-google-fonts/recursive/800ExtraBold';
import { Recursive_900Black } from '@expo-google-fonts/recursive/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Recursive_300Light, 
    Recursive_400Regular, 
    Recursive_500Medium, 
    Recursive_600SemiBold, 
    Recursive_700Bold, 
    Recursive_800ExtraBold, 
    Recursive_900Black
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
          fontFamily: "Recursive_300Light"
        }}>
          Recursive Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_400Regular"
        }}>
          Recursive Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_500Medium"
        }}>
          Recursive Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_600SemiBold"
        }}>
          Recursive Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_700Bold"
        }}>
          Recursive Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_800ExtraBold"
        }}>
          Recursive Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Recursive_900Black"
        }}>
          Recursive Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Recursive_300Light](./300Light/Recursive_300Light.ttf.png)|![Recursive_400Regular](./400Regular/Recursive_400Regular.ttf.png)|![Recursive_500Medium](./500Medium/Recursive_500Medium.ttf.png)||
|![Recursive_600SemiBold](./600SemiBold/Recursive_600SemiBold.ttf.png)|![Recursive_700Bold](./700Bold/Recursive_700Bold.ttf.png)|![Recursive_800ExtraBold](./800ExtraBold/Recursive_800ExtraBold.ttf.png)||
|![Recursive_900Black](./900Black/Recursive_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/recursive` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Recursive page on Google Fonts](https://fonts.google.com/specimen/Recursive) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Recursive on Google Fonts](https://fonts.google.com/specimen/Recursive)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/recursive)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/recursive)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
