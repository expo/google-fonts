# @expo-google-fonts/google-sans-flex

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/google-sans-flex)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/google-sans-flex)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/google-sans-flex)

This package lets you use the [**Google Sans Flex**](https://fonts.google.com/specimen/Google+Sans+Flex) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Google Sans Flex

![Google Sans Flex](./font-family.png)

This font family contains [9 styles](#-gallery).

- `GoogleSansFlex_100Thin`
- `GoogleSansFlex_200ExtraLight`
- `GoogleSansFlex_300Light`
- `GoogleSansFlex_400Regular`
- `GoogleSansFlex_500Medium`
- `GoogleSansFlex_600SemiBold`
- `GoogleSansFlex_700Bold`
- `GoogleSansFlex_800ExtraBold`
- `GoogleSansFlex_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/google-sans-flex expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/google-sans-flex/useFonts';
import { GoogleSansFlex_100Thin } from '@expo-google-fonts/google-sans-flex/100Thin';
import { GoogleSansFlex_200ExtraLight } from '@expo-google-fonts/google-sans-flex/200ExtraLight';
import { GoogleSansFlex_300Light } from '@expo-google-fonts/google-sans-flex/300Light';
import { GoogleSansFlex_400Regular } from '@expo-google-fonts/google-sans-flex/400Regular';
import { GoogleSansFlex_500Medium } from '@expo-google-fonts/google-sans-flex/500Medium';
import { GoogleSansFlex_600SemiBold } from '@expo-google-fonts/google-sans-flex/600SemiBold';
import { GoogleSansFlex_700Bold } from '@expo-google-fonts/google-sans-flex/700Bold';
import { GoogleSansFlex_800ExtraBold } from '@expo-google-fonts/google-sans-flex/800ExtraBold';
import { GoogleSansFlex_900Black } from '@expo-google-fonts/google-sans-flex/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    GoogleSansFlex_100Thin, 
    GoogleSansFlex_200ExtraLight, 
    GoogleSansFlex_300Light, 
    GoogleSansFlex_400Regular, 
    GoogleSansFlex_500Medium, 
    GoogleSansFlex_600SemiBold, 
    GoogleSansFlex_700Bold, 
    GoogleSansFlex_800ExtraBold, 
    GoogleSansFlex_900Black
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
          fontFamily: "GoogleSansFlex_100Thin"
        }}>
          Google Sans Flex Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_200ExtraLight"
        }}>
          Google Sans Flex Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_300Light"
        }}>
          Google Sans Flex Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_400Regular"
        }}>
          Google Sans Flex Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_500Medium"
        }}>
          Google Sans Flex Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_600SemiBold"
        }}>
          Google Sans Flex Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_700Bold"
        }}>
          Google Sans Flex Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_800ExtraBold"
        }}>
          Google Sans Flex Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansFlex_900Black"
        }}>
          Google Sans Flex Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GoogleSansFlex_100Thin](./100Thin/GoogleSansFlex_100Thin.ttf.png)|![GoogleSansFlex_200ExtraLight](./200ExtraLight/GoogleSansFlex_200ExtraLight.ttf.png)|![GoogleSansFlex_300Light](./300Light/GoogleSansFlex_300Light.ttf.png)||
|![GoogleSansFlex_400Regular](./400Regular/GoogleSansFlex_400Regular.ttf.png)|![GoogleSansFlex_500Medium](./500Medium/GoogleSansFlex_500Medium.ttf.png)|![GoogleSansFlex_600SemiBold](./600SemiBold/GoogleSansFlex_600SemiBold.ttf.png)||
|![GoogleSansFlex_700Bold](./700Bold/GoogleSansFlex_700Bold.ttf.png)|![GoogleSansFlex_800ExtraBold](./800ExtraBold/GoogleSansFlex_800ExtraBold.ttf.png)|![GoogleSansFlex_900Black](./900Black/GoogleSansFlex_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/google-sans-flex` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Google Sans Flex page on Google Fonts](https://fonts.google.com/specimen/Google+Sans+Flex) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Google Sans Flex on Google Fonts](https://fonts.google.com/specimen/Google+Sans+Flex)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/google-sans-flex)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/google-sans-flex)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
