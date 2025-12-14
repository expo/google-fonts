# @expo-google-fonts/cause

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cause)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cause)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cause)

This package lets you use the [**Cause**](https://fonts.google.com/specimen/Cause) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cause

![Cause](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Cause_100Thin`
- `Cause_200ExtraLight`
- `Cause_300Light`
- `Cause_400Regular`
- `Cause_500Medium`
- `Cause_600SemiBold`
- `Cause_700Bold`
- `Cause_800ExtraBold`
- `Cause_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/cause expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/cause/useFonts';
import { Cause_100Thin } from '@expo-google-fonts/cause/100Thin';
import { Cause_200ExtraLight } from '@expo-google-fonts/cause/200ExtraLight';
import { Cause_300Light } from '@expo-google-fonts/cause/300Light';
import { Cause_400Regular } from '@expo-google-fonts/cause/400Regular';
import { Cause_500Medium } from '@expo-google-fonts/cause/500Medium';
import { Cause_600SemiBold } from '@expo-google-fonts/cause/600SemiBold';
import { Cause_700Bold } from '@expo-google-fonts/cause/700Bold';
import { Cause_800ExtraBold } from '@expo-google-fonts/cause/800ExtraBold';
import { Cause_900Black } from '@expo-google-fonts/cause/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Cause_100Thin, 
    Cause_200ExtraLight, 
    Cause_300Light, 
    Cause_400Regular, 
    Cause_500Medium, 
    Cause_600SemiBold, 
    Cause_700Bold, 
    Cause_800ExtraBold, 
    Cause_900Black
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
          fontFamily: "Cause_100Thin"
        }}>
          Cause Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_200ExtraLight"
        }}>
          Cause Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_300Light"
        }}>
          Cause Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_400Regular"
        }}>
          Cause Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_500Medium"
        }}>
          Cause Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_600SemiBold"
        }}>
          Cause Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_700Bold"
        }}>
          Cause Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_800ExtraBold"
        }}>
          Cause Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Cause_900Black"
        }}>
          Cause Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Cause_100Thin](./100Thin/Cause_100Thin.ttf.png)|![Cause_200ExtraLight](./200ExtraLight/Cause_200ExtraLight.ttf.png)|![Cause_300Light](./300Light/Cause_300Light.ttf.png)||
|![Cause_400Regular](./400Regular/Cause_400Regular.ttf.png)|![Cause_500Medium](./500Medium/Cause_500Medium.ttf.png)|![Cause_600SemiBold](./600SemiBold/Cause_600SemiBold.ttf.png)||
|![Cause_700Bold](./700Bold/Cause_700Bold.ttf.png)|![Cause_800ExtraBold](./800ExtraBold/Cause_800ExtraBold.ttf.png)|![Cause_900Black](./900Black/Cause_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/cause` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cause page on Google Fonts](https://fonts.google.com/specimen/Cause) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cause on Google Fonts](https://fonts.google.com/specimen/Cause)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cause)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cause)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
