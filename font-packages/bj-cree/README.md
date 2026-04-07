# @expo-google-fonts/bj-cree

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bj-cree)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bj-cree)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bj-cree)

This package lets you use the [**BJ Cree**](https://fonts.google.com/specimen/BJ+Cree) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## BJ Cree

![BJ Cree](./font-family.png)

This font family contains [4 styles](#-gallery).

- `BJCree_400Regular`
- `BJCree_500Medium`
- `BJCree_600SemiBold`
- `BJCree_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bj-cree expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bj-cree/useFonts';
import { BJCree_400Regular } from '@expo-google-fonts/bj-cree/400Regular';
import { BJCree_500Medium } from '@expo-google-fonts/bj-cree/500Medium';
import { BJCree_600SemiBold } from '@expo-google-fonts/bj-cree/600SemiBold';
import { BJCree_700Bold } from '@expo-google-fonts/bj-cree/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    BJCree_400Regular, 
    BJCree_500Medium, 
    BJCree_600SemiBold, 
    BJCree_700Bold
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
          fontFamily: "BJCree_400Regular"
        }}>
          BJ Cree Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BJCree_500Medium"
        }}>
          BJ Cree Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BJCree_600SemiBold"
        }}>
          BJ Cree Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BJCree_700Bold"
        }}>
          BJ Cree Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BJCree_400Regular](./400Regular/BJCree_400Regular.ttf.png)|![BJCree_500Medium](./500Medium/BJCree_500Medium.ttf.png)|![BJCree_600SemiBold](./600SemiBold/BJCree_600SemiBold.ttf.png)||
|![BJCree_700Bold](./700Bold/BJCree_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bj-cree` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [BJ Cree page on Google Fonts](https://fonts.google.com/specimen/BJ+Cree) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [BJ Cree on Google Fonts](https://fonts.google.com/specimen/BJ+Cree)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bj-cree)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bj-cree)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
