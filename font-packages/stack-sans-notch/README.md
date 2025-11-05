# @expo-google-fonts/stack-sans-notch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/stack-sans-notch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/stack-sans-notch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/stack-sans-notch)

This package lets you use the [**Stack Sans Notch**](https://fonts.google.com/specimen/Stack+Sans+Notch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Stack Sans Notch

![Stack Sans Notch](./font-family.png)

This font family contains [6 styles](#-gallery).

- `StackSansNotch_200ExtraLight`
- `StackSansNotch_300Light`
- `StackSansNotch_400Regular`
- `StackSansNotch_500Medium`
- `StackSansNotch_600SemiBold`
- `StackSansNotch_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/stack-sans-notch expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/stack-sans-notch/useFonts';
import { StackSansNotch_200ExtraLight } from '@expo-google-fonts/stack-sans-notch/200ExtraLight';
import { StackSansNotch_300Light } from '@expo-google-fonts/stack-sans-notch/300Light';
import { StackSansNotch_400Regular } from '@expo-google-fonts/stack-sans-notch/400Regular';
import { StackSansNotch_500Medium } from '@expo-google-fonts/stack-sans-notch/500Medium';
import { StackSansNotch_600SemiBold } from '@expo-google-fonts/stack-sans-notch/600SemiBold';
import { StackSansNotch_700Bold } from '@expo-google-fonts/stack-sans-notch/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    StackSansNotch_200ExtraLight, 
    StackSansNotch_300Light, 
    StackSansNotch_400Regular, 
    StackSansNotch_500Medium, 
    StackSansNotch_600SemiBold, 
    StackSansNotch_700Bold
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
          fontFamily: "StackSansNotch_200ExtraLight"
        }}>
          Stack Sans Notch Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansNotch_300Light"
        }}>
          Stack Sans Notch Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansNotch_400Regular"
        }}>
          Stack Sans Notch Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansNotch_500Medium"
        }}>
          Stack Sans Notch Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansNotch_600SemiBold"
        }}>
          Stack Sans Notch Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StackSansNotch_700Bold"
        }}>
          Stack Sans Notch Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![StackSansNotch_200ExtraLight](./200ExtraLight/StackSansNotch_200ExtraLight.ttf.png)|![StackSansNotch_300Light](./300Light/StackSansNotch_300Light.ttf.png)|![StackSansNotch_400Regular](./400Regular/StackSansNotch_400Regular.ttf.png)||
|![StackSansNotch_500Medium](./500Medium/StackSansNotch_500Medium.ttf.png)|![StackSansNotch_600SemiBold](./600SemiBold/StackSansNotch_600SemiBold.ttf.png)|![StackSansNotch_700Bold](./700Bold/StackSansNotch_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/stack-sans-notch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Stack Sans Notch page on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Notch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Stack Sans Notch on Google Fonts](https://fonts.google.com/specimen/Stack+Sans+Notch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stack-sans-notch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stack-sans-notch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
