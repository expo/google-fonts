# @expo-google-fonts/moderustic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/moderustic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/moderustic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/moderustic)

This package lets you use the [**Moderustic**](https://fonts.google.com/specimen/Moderustic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Moderustic

![Moderustic](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Moderustic_300Light`
- `Moderustic_400Regular`
- `Moderustic_500Medium`
- `Moderustic_600SemiBold`
- `Moderustic_700Bold`
- `Moderustic_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/moderustic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/moderustic/useFonts';
import { Moderustic_300Light } from '@expo-google-fonts/moderustic/300Light';
import { Moderustic_400Regular } from '@expo-google-fonts/moderustic/400Regular';
import { Moderustic_500Medium } from '@expo-google-fonts/moderustic/500Medium';
import { Moderustic_600SemiBold } from '@expo-google-fonts/moderustic/600SemiBold';
import { Moderustic_700Bold } from '@expo-google-fonts/moderustic/700Bold';
import { Moderustic_800ExtraBold } from '@expo-google-fonts/moderustic/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Moderustic_300Light, 
    Moderustic_400Regular, 
    Moderustic_500Medium, 
    Moderustic_600SemiBold, 
    Moderustic_700Bold, 
    Moderustic_800ExtraBold
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
          fontFamily: "Moderustic_300Light"
        }}>
          Moderustic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Moderustic_400Regular"
        }}>
          Moderustic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Moderustic_500Medium"
        }}>
          Moderustic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Moderustic_600SemiBold"
        }}>
          Moderustic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Moderustic_700Bold"
        }}>
          Moderustic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Moderustic_800ExtraBold"
        }}>
          Moderustic Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Moderustic_300Light](./300Light/Moderustic_300Light.ttf.png)|![Moderustic_400Regular](./400Regular/Moderustic_400Regular.ttf.png)|![Moderustic_500Medium](./500Medium/Moderustic_500Medium.ttf.png)||
|![Moderustic_600SemiBold](./600SemiBold/Moderustic_600SemiBold.ttf.png)|![Moderustic_700Bold](./700Bold/Moderustic_700Bold.ttf.png)|![Moderustic_800ExtraBold](./800ExtraBold/Moderustic_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/moderustic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Moderustic page on Google Fonts](https://fonts.google.com/specimen/Moderustic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Moderustic on Google Fonts](https://fonts.google.com/specimen/Moderustic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/moderustic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/moderustic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
