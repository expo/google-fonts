# @expo-google-fonts/unbounded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/unbounded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/unbounded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/unbounded)

This package lets you use the [**Unbounded**](https://fonts.google.com/specimen/Unbounded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Unbounded

![Unbounded](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Unbounded_200ExtraLight`
- `Unbounded_300Light`
- `Unbounded_400Regular`
- `Unbounded_500Medium`
- `Unbounded_600SemiBold`
- `Unbounded_700Bold`
- `Unbounded_800ExtraBold`
- `Unbounded_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/unbounded expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/unbounded/useFonts';
import { Unbounded_200ExtraLight } from '@expo-google-fonts/unbounded/200ExtraLight';
import { Unbounded_300Light } from '@expo-google-fonts/unbounded/300Light';
import { Unbounded_400Regular } from '@expo-google-fonts/unbounded/400Regular';
import { Unbounded_500Medium } from '@expo-google-fonts/unbounded/500Medium';
import { Unbounded_600SemiBold } from '@expo-google-fonts/unbounded/600SemiBold';
import { Unbounded_700Bold } from '@expo-google-fonts/unbounded/700Bold';
import { Unbounded_800ExtraBold } from '@expo-google-fonts/unbounded/800ExtraBold';
import { Unbounded_900Black } from '@expo-google-fonts/unbounded/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Unbounded_200ExtraLight, 
    Unbounded_300Light, 
    Unbounded_400Regular, 
    Unbounded_500Medium, 
    Unbounded_600SemiBold, 
    Unbounded_700Bold, 
    Unbounded_800ExtraBold, 
    Unbounded_900Black
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
          fontFamily: "Unbounded_200ExtraLight"
        }}>
          Unbounded Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_300Light"
        }}>
          Unbounded Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_400Regular"
        }}>
          Unbounded Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_500Medium"
        }}>
          Unbounded Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_600SemiBold"
        }}>
          Unbounded Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_700Bold"
        }}>
          Unbounded Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_800ExtraBold"
        }}>
          Unbounded Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Unbounded_900Black"
        }}>
          Unbounded Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Unbounded_200ExtraLight](./200ExtraLight/Unbounded_200ExtraLight.ttf.png)|![Unbounded_300Light](./300Light/Unbounded_300Light.ttf.png)|![Unbounded_400Regular](./400Regular/Unbounded_400Regular.ttf.png)||
|![Unbounded_500Medium](./500Medium/Unbounded_500Medium.ttf.png)|![Unbounded_600SemiBold](./600SemiBold/Unbounded_600SemiBold.ttf.png)|![Unbounded_700Bold](./700Bold/Unbounded_700Bold.ttf.png)||
|![Unbounded_800ExtraBold](./800ExtraBold/Unbounded_800ExtraBold.ttf.png)|![Unbounded_900Black](./900Black/Unbounded_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/unbounded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Unbounded page on Google Fonts](https://fonts.google.com/specimen/Unbounded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Unbounded on Google Fonts](https://fonts.google.com/specimen/Unbounded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/unbounded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/unbounded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
