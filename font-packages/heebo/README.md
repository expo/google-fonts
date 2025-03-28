# @expo-google-fonts/heebo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/heebo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/heebo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/heebo)

This package lets you use the [**Heebo**](https://fonts.google.com/specimen/Heebo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Heebo

![Heebo](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Heebo_100Thin`
- `Heebo_200ExtraLight`
- `Heebo_300Light`
- `Heebo_400Regular`
- `Heebo_500Medium`
- `Heebo_600SemiBold`
- `Heebo_700Bold`
- `Heebo_800ExtraBold`
- `Heebo_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/heebo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/heebo/useFonts';
import { Heebo_100Thin } from '@expo-google-fonts/heebo/100Thin';
import { Heebo_200ExtraLight } from '@expo-google-fonts/heebo/200ExtraLight';
import { Heebo_300Light } from '@expo-google-fonts/heebo/300Light';
import { Heebo_400Regular } from '@expo-google-fonts/heebo/400Regular';
import { Heebo_500Medium } from '@expo-google-fonts/heebo/500Medium';
import { Heebo_600SemiBold } from '@expo-google-fonts/heebo/600SemiBold';
import { Heebo_700Bold } from '@expo-google-fonts/heebo/700Bold';
import { Heebo_800ExtraBold } from '@expo-google-fonts/heebo/800ExtraBold';
import { Heebo_900Black } from '@expo-google-fonts/heebo/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Heebo_100Thin, 
    Heebo_200ExtraLight, 
    Heebo_300Light, 
    Heebo_400Regular, 
    Heebo_500Medium, 
    Heebo_600SemiBold, 
    Heebo_700Bold, 
    Heebo_800ExtraBold, 
    Heebo_900Black
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
          fontFamily: "Heebo_100Thin"
        }}>
          Heebo Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_200ExtraLight"
        }}>
          Heebo Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_300Light"
        }}>
          Heebo Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_400Regular"
        }}>
          Heebo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_500Medium"
        }}>
          Heebo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_600SemiBold"
        }}>
          Heebo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_700Bold"
        }}>
          Heebo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_800ExtraBold"
        }}>
          Heebo Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Heebo_900Black"
        }}>
          Heebo Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Heebo_100Thin](./100Thin/Heebo_100Thin.ttf.png)|![Heebo_200ExtraLight](./200ExtraLight/Heebo_200ExtraLight.ttf.png)|![Heebo_300Light](./300Light/Heebo_300Light.ttf.png)||
|![Heebo_400Regular](./400Regular/Heebo_400Regular.ttf.png)|![Heebo_500Medium](./500Medium/Heebo_500Medium.ttf.png)|![Heebo_600SemiBold](./600SemiBold/Heebo_600SemiBold.ttf.png)||
|![Heebo_700Bold](./700Bold/Heebo_700Bold.ttf.png)|![Heebo_800ExtraBold](./800ExtraBold/Heebo_800ExtraBold.ttf.png)|![Heebo_900Black](./900Black/Heebo_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/heebo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Heebo page on Google Fonts](https://fonts.google.com/specimen/Heebo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Heebo on Google Fonts](https://fonts.google.com/specimen/Heebo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/heebo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/heebo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
