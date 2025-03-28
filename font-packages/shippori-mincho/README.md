# @expo-google-fonts/shippori-mincho

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/shippori-mincho)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/shippori-mincho)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/shippori-mincho)

This package lets you use the [**Shippori Mincho**](https://fonts.google.com/specimen/Shippori+Mincho) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Shippori Mincho

![Shippori Mincho](./font-family.png)

This font family contains [5 styles](#-gallery).

- `ShipporiMincho_400Regular`
- `ShipporiMincho_500Medium`
- `ShipporiMincho_600SemiBold`
- `ShipporiMincho_700Bold`
- `ShipporiMincho_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/shippori-mincho expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/shippori-mincho/useFonts';
import { ShipporiMincho_400Regular } from '@expo-google-fonts/shippori-mincho/400Regular';
import { ShipporiMincho_500Medium } from '@expo-google-fonts/shippori-mincho/500Medium';
import { ShipporiMincho_600SemiBold } from '@expo-google-fonts/shippori-mincho/600SemiBold';
import { ShipporiMincho_700Bold } from '@expo-google-fonts/shippori-mincho/700Bold';
import { ShipporiMincho_800ExtraBold } from '@expo-google-fonts/shippori-mincho/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    ShipporiMincho_400Regular, 
    ShipporiMincho_500Medium, 
    ShipporiMincho_600SemiBold, 
    ShipporiMincho_700Bold, 
    ShipporiMincho_800ExtraBold
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
          fontFamily: "ShipporiMincho_400Regular"
        }}>
          Shippori Mincho Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMincho_500Medium"
        }}>
          Shippori Mincho Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMincho_600SemiBold"
        }}>
          Shippori Mincho Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMincho_700Bold"
        }}>
          Shippori Mincho Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMincho_800ExtraBold"
        }}>
          Shippori Mincho Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ShipporiMincho_400Regular](./400Regular/ShipporiMincho_400Regular.ttf.png)|![ShipporiMincho_500Medium](./500Medium/ShipporiMincho_500Medium.ttf.png)|![ShipporiMincho_600SemiBold](./600SemiBold/ShipporiMincho_600SemiBold.ttf.png)||
|![ShipporiMincho_700Bold](./700Bold/ShipporiMincho_700Bold.ttf.png)|![ShipporiMincho_800ExtraBold](./800ExtraBold/ShipporiMincho_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/shippori-mincho` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Shippori Mincho page on Google Fonts](https://fonts.google.com/specimen/Shippori+Mincho) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Shippori Mincho on Google Fonts](https://fonts.google.com/specimen/Shippori+Mincho)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/shippori-mincho)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/shippori-mincho)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
